const express =require("express")
const patientController = require("../controllers/patient.controller")

const route = express.Router()


route.post('/add-patient',patientController.addPatient)
route.get('/get-patients',patientController.getPatients)
route.post('/schedulePatient',patientController.schedulePatient)
route.post('/get-patients',patientController.getPatients)
route.post('/delte-patient', patientController.deletePatients)

module.exports = route

