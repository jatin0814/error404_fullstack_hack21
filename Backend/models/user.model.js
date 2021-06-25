const mongoose = require("mongoose")

const schema = mongoose.Schema

const userSchema = new schema({
    mobileNo: {
        type:String,
        require: true
    }
})

userSchema.virtual('members', {
    ref: 'Patient',
    localField: 'mobileNo',
    foreignField: 'phone'
})

userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("User",userSchema)