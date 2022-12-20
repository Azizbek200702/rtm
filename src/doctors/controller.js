const Doctor = require("./model");

module.exports = {
  addNew: async function (req, res) {
    try {
      let doctor = await Doctor.create(req.body);
      if (!doctor) {
        return res.status(400).send("doctor yaratishda hatolik boldi");
      }
      return res.status(201).send(doctor);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  getAll: async function (req, res) {
    try {
      let doctors = await Doctor.find({});
      if (!doctors) {
        return res.status(400).send("doctorlarni olishda hatolik boldi ");
      }
      return res.status(200).send(doctors);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  //     getDoctorByType
  getDoctorByType: async function (req, res) {
    try {
      const doctorType = req.query.doctorType;
      const doctors = await Doctor.find({ doctorType: doctorType });

      if (doctors.length > 0) {
        return res.status(200).json(doctors);
      } else {
        return res.status(404).send("Not");
      }
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  getOne: async function (req, res) {
    try {
      let doctorId = req.params.id;
      let doctor = await Doctor.findOne({ _id: doctorId });
      if (!doctor) {
        return res.status(400).send("doctorlarni olishda hatolik boldi ");
      }
      return res.status(200).send(doctor);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  delete: async function (req, res) {
    try {
      let doctorId = req.params.id;
      let doctor = await Doctor.findByIdAndDelete(doctorId);
      return res.status(200).send(doctor);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  update: async function (req, res) {
    try {
      let doctorId = req.params.id;
      await Doctor.findByIdAndUpdate(doctorId, req.body);
      return res.status(200).send("success");
    } catch (err) {
      return res.status(400).send(err);
    }
  },
};
