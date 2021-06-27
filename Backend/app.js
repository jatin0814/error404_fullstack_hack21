const express =  require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const http = require('http')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/user')

const patientRoute =  require("./routes/patient.routes");
const vanRoute = require("./routes/van.routes")
const userRoute = require("./routes/user.routes")

dotenv.config();

const mongoDbUrl = process.env.MONGODBURL;
const port = process.env.PORT || 9000;
const app = express()
app.use(cors())
const server = http.createServer(app)
const io = socketio(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true
    }
  });

// app.get('/',(req,res,next)=>{
//     res.send("Hello")
// })

app.use(express.json())
app.use(express.urlencoded())


app.use("/hello",(req,res,next)=>{
    res.send("<h1>WORLD<h1/>")
    next();
})
app.use("/user",userRoute)
app.use("/patient",patientRoute)
app.use("/van",vanRoute)


//CHAT
io.on('connection', (socket) => { 

         
    socket.emit('message', "Welcome", "", "Admin")
    socket.broadcast.emit('message', "A new user has joined", "12:30", "Admin")


    socket.on('sendMessage', (mssg, d, user,  callback) => {

        const u = getUser(socket.id);

        const filter = new Filter()

        if(filter.isProfane(mssg)){
            return callback('Profanity is not allowed')
        }


        io.emit('message', mssg, d, user)
        callback();
    });   

    socket.on('sendLocation', (location, time, user, callback) => {
        
        io.emit('locationMessage', `https://google.com/maps?=${location.latitude},${location.longitude}`, time ,user)
        callback();
    });   

    socket.on('disconnect', () => {
       
    io.emit('message', `A user has left!`, "", "Admin")
               
    })
});



mongoose.connect(mongoDbUrl).then(result=>{
    server.listen(port,()=>{
        console.log(`App is running on Port ${port} and connected to Database`)
    })
}).catch(err=>{
    console.log(err)
})



