const DoctorModel = require('../doctors/model')

module.exports = {
    Login: async function(req, res) {
        try {
            const {tel, password} = req.body
            const doctor = await DoctorModel.findOne({
                tel: tel,   
                password: password
            })
            if(!doctor) {
                return res.status(403).send("doctor mavjud emas")
            }
            return res.status(200).json(doctor)
        } catch (error) {
            return res.status(400).send(error, "login da xatolik")
        }
    }
}