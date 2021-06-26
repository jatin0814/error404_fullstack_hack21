const express =  require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const patientRoute =  require("./routes/patient.routes");
const vanRoute = require("./routes/van.routes")
const userRoute = require("./routes/user.routes")

dotenv.config();
const mongoDbUrl = process.env.MONGODBURL;
const port = process.env.PORT || 9000;
const app = express()

// app.get('/',(req,res,next)=>{
//     res.send("Hello")
// })
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())



app.use("/user",userRoute)
app.use("/patient",patientRoute)
app.use("/van",vanRoute)

mongoose.connect(mongoDbUrl).then(result=>{
    app.listen(port,()=>{
        console.log(`App is running on Port ${port} and connected to Database`)
    })
}).catch(err=>{
    console.log(err)
})



