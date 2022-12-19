const Patient = require("./model");

module.exports = {
  addNew: async function (req, res) {
    try {
      let patient = await Patient.create(req.body);
      if (!patient) {
        return res.status(400).send("patient yaratishda hatolik boldi");
      }
      return res.status(201).send(patient);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  check: async function (req, res) {
    try {
      const {patientId, title, top, doctor, description, list} = req.body
      const patient = await Patient.findById(patientId)
      if(!patient) {
          return res.status(400).send("hotolik")
      }
      const history = {
          title :title,
          top : top,
          doctor : doctor,
          description : description,
          list : list
      }
      patient.history.push(history)
      await patient.save()    

      return res.status(200).send("ok")
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  getAll: async function (req, res) {
    try {
      const {category} = req.body
      let patients = []
     if(category){
          patients = await Patient.find({category: category});
     }else {
          patients = await Patient.find({})
     }
      if (!patients) {
        return res.status(400).send("patientlarni olishda hatolik boldi ");
      }
      return res.status(200).json(patients);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  getOne: async function (req, res) {
    try {
      let patientId = req.params.id;
      let patient = await Patient.findOne({ _id: patientId });
      if (!patient) {
        return res.status(400).send("patientlarni olishda hatolik boldi ");
      }
      return res.status(200).send(patient);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  delete: async function (req, res) {
    try {
      let patientId = req.params.id;
      let patient = await Patient.findByIdAndDelete(patientId);
      return res.status(200).send(patient);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  update: async function (req, res) {
    try {
      let patientId = req.params.id;
      await Patient.findByIdAndUpdate(patientId, req.body);
      return res.status(200).send("success");
    } catch (err) {
      return res.status(400).send(err);
    }
  },
};
