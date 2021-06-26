const express =require("express")
const vanController = require("../controllers/van.controller")

const route = express.Router()

route.post('/register-van', vanController.regVan)
route.post('/get-patients',vanController.getPatients)
route.post('/vanlogin',vanController.vanlogin)
route.post("/getLiveTime",vanController.getLiveTime)
module.exports = route
