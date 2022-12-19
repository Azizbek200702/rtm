const express = require('express')
const router = express.Router()
const doctorController = require("./controller")


router.route('/').post(doctorController.addNew)

router.route('/').get(doctorController.getAll)

router.route('/:id').get(doctorController.getOne)

router.route('/:id').delete(doctorController.delete)

router.route('/:id').put(doctorController.update)

module.exports = router
