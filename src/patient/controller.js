const Patient = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let patient = await Patient.create(req.body)
            if(!patient){
                return res.status(400).send("patient yaratishda hatolik boldi")
            }
            return res.status(201).send(patient)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let patients = await Patient.find({})
           if(!patients){
            return res.status(400).send("patientlarni olishda hatolik boldi ")
            }
        return res.status(200).send(patients)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let patientId = req.params.id
           let patient = await Patient.findOne({_id : patientId})
           if(!patient){
            return res.status(400).send("patientlarni olishda hatolik boldi ")
            }
        return res.status(200).send(patient)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let patientId = req.params.id
        let patient = await Patient.findByIdAndDelete(patientId)           
        return res.status(200).send(patient)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let patientId = req.params.id
        await Patient.findByIdAndUpdate(patientId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}