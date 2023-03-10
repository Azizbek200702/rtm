const mongoose = require("mongoose")

const patientSchema = mongoose.Schema({
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
    region : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    country : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    street : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    age : {
        type : String,
        required :true
    },
    phone : {
        type : String,
        required : true
    },
    passport : {
        type: String,
        required: true
    },
    category: {
        type: String,
        default : false
    },
    check: {
        type: Boolean,
        default : false
    },
    history : [
        {
            file: String,
            title: String,
            date: String,
            doctorType:String,
            doctor: String,
            doctorId:String,
            top: Boolean,
            description: String,
            list: [
                {
                    name: String,
                    date: String,
                    title: String
                }
            ]
        }
    ]
}, { timestamps: true, versionKey: false })

const Patient = mongoose.model("patient" , patientSchema)
module.exports = Patient