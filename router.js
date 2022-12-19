const express = require('express');
const router = express.Router();
const doctorRouter = require("./src/doctors/router")
const patientRouter = require("./src/patient/router")


router.use('/doctor', doctorRouter);
router.use('/patient', patientRouter);


module.exports = router;