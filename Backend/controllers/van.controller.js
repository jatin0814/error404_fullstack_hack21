const Van = require("../models/van.model")
const jwt = require("jsonwebtoken")
const Patient = require("../models/patient.model")
var axios = require("axios").default;
const dotenv = require("dotenv")
dotenv.config();

function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s)";
}


exports.regVan = async (req,res) => {
    const date = new Date()
    console.log("date",date)
    const van = new Van({
        ...req.body,Date:date
    })

    try{
       await van.save()

       res.status(200).send(van)
    }
    catch (e) {
        res.status(400).send({Error: e.message})
    }
}

    exports.getPatients =  async( req, res) => {

    console.log(req.body.number)

    try {

        let van = await Van.find({number: req.body.number}).populate("patients").exec()

        console.log(van.patients);
        
        res.status(200).send(van);
        
    }catch (e) {
        res.status(400).send({Error: e.message})
    }
}


exports.vanlogin = (req,res,next) => {
    console.log("vanlogin")
    const username=req.body["username"]
    const password=req.body["password"]
    Van.findOne({$and:[{username:username},{password:password}]}).then(van=>{
        if(!van){
            return res.status(400).json({message:"Van not found"})
        }
        const token = jwt.sign({username:van.username,_id:van._id},
            "secret",{
                expiresIn:"1h"
            }
        )
        return res.status(200).json({message:"Van Found",token:token,userId:van._id.toString()})
    })
}


exports.getLiveTime = (req,res,next) => {
        console.log("req.body",req.body)
        let patientId = req.body.id;
        let liveVanLoc = req.body.liveVanLoc;
        console.log(liveVanLoc)
        let start_point = `(${liveVanLoc[0]},${liveVanLoc[1]})`
        
        Patient.findOne({_id:patientId}).then(patient=>{
            console.log(patient)
            let coordinateArray = patient.coordinate;
            let end_point = `(${coordinateArray[0]},${coordinateArray[1]})`
            var options = {
            method: 'GET',
            url: 'https://distance-calculator.p.rapidapi.com/v1/one_to_one',
            params: {
                start_point: start_point,
                end_point: end_point,
                unit: 'kilometers'
            },
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-key': process.env.rapidapikey,
                'x-rapidapi-host': 'distance-calculator.p.rapidapi.com'
            }
            };
    
            axios.request(options).then(function (response) {
                let time = timeConvert(response.data.distance/50);
                return res.status(200).json({time:time})
            }).catch(function (error) {
                console.error(error);
                return res.status(400).json({message:"something went wrong!!"})
            });
        })
}