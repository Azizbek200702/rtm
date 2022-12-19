const express = require('express')
const router = express.Router()
const patientController = require("./controller")
const authController = require("../util/authenticate")

router.use(authController)

router.route('/').post(patientController.addNew)

router.route('/').get(patientController.getAll)

router.route('/:id').get(patientController.getOne)

router.route('/:id').delete(patientController.delete)

router.route('/:id').put(patientController.update)

module.exports = router
