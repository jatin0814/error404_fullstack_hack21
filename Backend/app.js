const express = require("express")
const vanRoute = require("./routes/van.routes")

const app = express()

const PORT = 5000;

app.use("/van",vanRoute)

app.listen(()=>{
    console.log(`App is running at ${PORT}`)
})