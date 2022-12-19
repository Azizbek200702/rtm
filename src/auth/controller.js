const DoctorModel = require('../doctors/model')
const jwt = require('jsonwebtoken')
module.exports = {
    Login: async function(req, res) {
        try {
            const {password , tel} = req.body
            const doctor = await DoctorModel.findOne({
                tel : tel,
                password : password
            })
            if(!doctor) {
                return res.status(401).send("login parol xato")
            }
            const token = jwt.sign(
                {
                    _id : doctor._id,
                    firstName: doctor.firstName,
                    lastName : doctor.lastName,
                    middleName : doctor.middleName,
                    tel: doctor.tel,
                    category : doctor.category
                },
                process.env.TOKEN_KEY,
                {algorithm : "HS256", expiresIn : process.env.TOKEN_EXPIRESIN}
            )
            return res.status(200).json({token})
        } catch (error) {
            return res.status(400).send(error, "login da xatolik")
        }
    }
}