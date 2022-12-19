const jwt = require('jsonwebtoken')
const bluebird = require("bluebird")

bluebird.promisifyAll(jwt)
module.exports = async function(req, res, next){
    try {
        const Token = req.headers["authorzation"]
        if(Token){
            const tokens = Token.split(" ")
            let tokenjwt = tokens[1]
            let decode = await jwt.verifyAsync(
                tokenjwt, process.env.TOKEN_KEY
            )
            if(!decode){
                return res.status(403).json('Auth')
            }
            req.doctor = decode
            return next()
        }
        return res.status(403).json('Token none')
    } catch (error) {
        return res.status(403).json('Auth da xatolik yuz berdi')
    }
}