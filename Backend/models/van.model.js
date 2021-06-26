const mongoose = require("mongoose")

const schema = mongoose.Schema

const vansSchema = new schema({
    number:{
        type:Number,
        required:true
    },
    vaccines:{
        type:Number,
        require:true
    },
    staff1: {
        type:String,
        require: true
    },
    staff2:{
        type:String,
        require:true
    },
    staff3:{
        type:String,
        // ref:'User',
        require:true
    },
    coordinate:{
        type:Array,
        required:true
    },
    Date:{
        type:Date,
        require:true
    },
    count:{
        type:Number,
        require:true,
        default:0
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

vansSchema.virtual('patients', {
    ref: 'Patient',
    localField: 'number',
    foreignField: 'vanNumber'
})

vansSchema.set('toObject', { virtuals: true });
vansSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("Van",vansSchema)