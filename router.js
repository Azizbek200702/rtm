const express = require('express');
const router = express.Router();
const doctorRouter = require("./src/doctors/router")
const patientRouter = require("./src/patient/router")
const authRouter = require("./src/auth/router")


router.use('/doctor', doctorRouter);
router.use('/patient', patientRouter);
router.use('/login', authRouter);


module.exports = router;