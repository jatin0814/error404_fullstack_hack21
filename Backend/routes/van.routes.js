const express =require("express")
const vanController = require("../controllers/van.controller")

const route = express.Router()

route.post('/register-van', vanController.regVan)


module.exports = route
