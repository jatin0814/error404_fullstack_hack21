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
    coordinate: {
        type: Array,
        require: true
    },
    vanNumber:{
        type:Number,
        required:true
    },
    dose: {
        type: Number,
        default: 1
    },
    vaccinationDate:{
        type:String,
        require:true,
        default: null
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
    },
    vaccineName : {
        type: String
    },
    distance:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model("Patient",patientsSchema)