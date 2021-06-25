const mongoose = require("mongoose")

const schema = mongoose.Schema

const patientsSchema = new schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        require:true
    },
    gender: {
        type:String,
        require: true
    },
    phone: {
        type:String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    vanNumber:{
        type:Number,
        required:true
    },
    dose: {
        type: Number,
        default: 0
    },
    vaccinationDate:{
        type:Date,
        require:true,
        default: 1
    },
    special: {
        type: Boolean,
        default: false
    },
    sheduled : {
        type: Boolean,
        default: false
    },
    vaccinated : {
        type: Boolean,
        default: false
    },
    otp : {
        type: String,
        default: 0000
    }
})

module.exports = mongoose.model("Patient",patientsSchema)