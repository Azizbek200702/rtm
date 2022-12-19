const mongoose = require("mongoose")

const doctorSchema = mongoose.Schema({
    firstName : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    lastName : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    middleName : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    tel : {
        type : String,
        required : true
    },
    password : {
        type: String,
        required: true
    },
    category : {
        type: String,
        minlength: 3,
        maxlength : 50,
        required: true
    }
}, { timestamps: true, versionKey: false })

const Doctor = mongoose.model("doctor" , doctorSchema)
module.exports = Doctor