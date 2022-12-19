const express = require('express');
const router = express.Router();
const doctorRouter = require("./src/doctors/router")


router.use('/doctor', doctorRouter);


module.exports = router;