const express =require("express")
const patientController = require("../controllers/patient.controller")

const route = express.Router()


route.post('/add-patient',patientController.addPatient)
// route.get('/get-patients',patientController.getPatients)
route.post('/schedulePatient',patientController.schedulePatient)
route.post('/get-patients',patientController.getPatients)
route.post('/delete-patient', patientController.deletePatients)
route.post('/vaccinate', patientController.vaccinate)
route.get('/patientOnDate',patientController.patientOnDate)
route.get('/get-allpatients',patientController.getAllPatients)

module.exports = route

