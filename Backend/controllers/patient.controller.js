const dotenv = require("dotenv")
const Patient = require("../models/patient.model")
const Van = require("../models/van.model")
var axios = require("axios").default;
dotenv.config();
const client = require("twilio")(process.env.accountSID,process.env.authToken);

const selectionSort = arr => {
    var minIdx, temp,len = arr.length;
    for(var i = 0; i < len; i++){
      minIdx = i;
      for(var  j = i+1; j<len; j++){
         if(arr[j].distance<arr[minIdx].distance){
            minIdx = j;
         }
      }
      temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
    return arr;
  }

exports.addPatient = (req,res,next) => {
    console.log(req.body)
    let user_point =`(${req.body.coordinate[0]},${req.body.coordinate[1]})`
    let cord={'start_point':user_point}
    Van.find().then(vans=>{
        vans.forEach((van,index)=>{
            cord[`end_point_${index+1}`]=`(${van.coordinate[0]},${van.coordinate[1]})`
        })

        // let user_point =`(${req.body.coordinate[0]},${req.body.coordinate[1]})`
        // const params = {user_point:user_point,...cord}

        
        cord = {...cord,unit: 'kilometers'}
        var options = {
            method: 'GET',
            url: 'https://distance-calculator.p.rapidapi.com/v1/one_to_many',
            params: cord,
            headers: {
              'content-type': 'application/json',
              'x-rapidapi-key': 'eca084dc7emshabfc11644902855p117df7jsn30163e604465',
              'x-rapidapi-host': 'distance-calculator.p.rapidapi.com'
            }
          };

        axios.request(options).then(function (response) {
            responseCordArray = []
            let responseCordObj = response.data;
            for (const property in responseCordObj) {
                responseCordArray.push(responseCordObj[property]);
              }
              console.log(response)
              responseCordArray.splice(0,1)
              let lastIndex = responseCordArray.length - 1
              console.log("lastIndex",lastIndex)
              responseCordArray.splice(lastIndex,1)
              console.log("responseCordArray",responseCordArray)
              let smallestElement = selectionSort(responseCordArray)[0];
              let smallestElementCord = smallestElement['coordinate'];
              let a = smallestElementCord.split(',')[0].split('(')[1];
              let b = smallestElementCord.split(',')[1].split(')')[0];
              let smallestElementCordArray = [];
              smallestElementCordArray.push(parseFloat(a),parseFloat(b))
              console.log("smallestElement",smallestElement)
              console.log("smallestElementCordArray",smallestElementCordArray)
              Van.findOne({coordinate:smallestElementCordArray}).then(closestVan=>{
                //   console.log(closestVan)
                    const patient = new Patient({
                        ...req.body,
                        vanNumber: closestVan.number,
                        distance:smallestElement.distance
                    })
                
                    patient.save().then(result=>{
                        // console.log("result",result)
                        return res.status(200).send({message:"patient addes successfully!",patientId:result.id.toString()})
                    }).catch(err=>{
                        console.log("err",err)
                        return res.status(400).json({"message":"someting went wrong!!"})
                    })
              })
        }).catch(function (error) {
            console.error(error);
        });
    }).catch(err=>{
        console.log("err",err)
        return res.status(400).json({"message":"someting went wrong!!"})
    })
   
}


exports.getPatients = (req,res,next) => {
    const phone = req.body["phone"];
    // console.log(userId)
    Patient.find({phone:phone}).then(result=>{
        return res.status(200).send({patients:result})
    }).catch(err=>{
        console.log(err)
        return res.status(400).json({"message":"someting went wrong!!"})
    })
}

exports.getAllPatients =  (req,res,next) => {
  
  
    Patient.find( { vaccinated: false }).then(result=>{
        return res.status(200).send({patients:result})
    }).catch(err=>{
        console.log(err)
        return res.status(400).json({"message":"someting went wrong!!"})
    })
}

exports.deletePatients = async (req, res, next) => {
    console.log("reached")
    try {
        await Patient.findOneAndDelete({ _id: req.body.id});
        res.status(200).send('deleted')
        
    }catch(e) {
        res.status(400).send({Error: e.message})
    }
}

exports.vaccinate = async (req, res) => {
    try {
        await Patient.findByIdAndUpdate(req.body.id, { vaccinated: true, vaccineName: req.body.vaccine });
        res.status(200).send('vaccinated')
        
    }catch(e) {
        return res.status(400).send({Error: e.message})
    }
}

exports.schedulePatient = (req,res,next) => {
    const vanNumber = req.body.vanNumber;
    Van.findOne({number:vanNumber}).then(van=>{
        const vanDate = van.Date;
        const todayData = new Date(vanDate);
        if(vanDate.getTime() < todayData.getTime()){
            let today = new Date();
            var tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1)
            van.Date = today
            if(van.count!==0){
                van.count=0
            }
            van.count = van.count + 1;
            van.save().then(result=>{
                Patient.findById({_id:req.body["patientId"]}).then(patient=>{
                    patient.vaccinationDate = tomorrow
                    patient.save().then(result=>{
                        return res.status(200).json({Date:tomorrow})
                    })
                })
            }).catch(err=>{
                console.log(err)
                return res.status(400).json({"message":"someting went wrong!!"})
            })
          }
          
          else if(vanDate.getTime() === todayData.getTime() && van.count<10){
            van.count = van.count + 1;
            van.save().then(result=>{
                Patient.findById({_id:req.body["patientId"]}).then(patient=>{
                    patient.vaccinationDate = van.Date;
                    patient.save().then(result=>{
                        return res.status(200).json({Date:van.Date})
                    })
                })
            }).catch(err=>{
                return res.status(400).json({message:"Something Went Wrong!!"})
            })
          }
          
          else if(van.count>=10){
            var tomorrow = new Date();
            tomorrow.setDate(vanDate.getDate() + 1)
            if(van.count===10){
                van.count=0
            }
            van.count = van.count + 1;
            van.Date = tomorrow
            van.save().then(result=>{
            Patient.findById({_id:req.body["patientId"]}).then(patient=>{
                patient.vaccinationDate = tomorrow
                patient.save(then=>{
                    return res.status(200).json({Date:tomorrow})
                }).catch(err=>{
                    return res.status(400).json({message:"Something Went Wrong!!"})
                })
            })}).catch(err=>{
                return res.status(400).json({message:"Something Went Wrong!!"})
            })
          }
    })
}



exports.patientOnDate = (req,res,next) => {
    const date = req.body["date"];
    Patient.find({vaccinationDate:date}).then(patients=>{
        const sortedPatients = selectionSort(patients)
        return res.status(200).json({patients:sortedPatients})
    }).catch(err=>{
        return res.status(400).json({message:"Something Went Wrong!!"})
    })
}

