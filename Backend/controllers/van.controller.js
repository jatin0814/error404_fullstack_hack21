const Van = require("../models/van.model")
const jwt = require("jsonwebtoken")
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