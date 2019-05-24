const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const PatientRecord = require('../models/PatientRecord');

// SEARCH the complete list of patients
router.get('/patients', (req, res) => {
  PatientRecord.find().populate('Pacientes')
    .then((allThePatients) => {
      res.json(allThePatients);
    })
    .catch((err) => {
      res.json(err);
    });
});

// SEARCH a specific patient
router.get('/patient/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  PatientRecord.findById(req.params.id).populate('tasks')
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

// EDIT a specific patient
router.put('/patient/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  PatientRecord.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.json({ message: `Project with ${req.params.id} is updated successfully.` });
    })
    .catch((err) => {
      res.json(err);
    });
});

// CREATE a new patient in the database
router.post('/patient/new', (req, res) => {
  const {
    name, gender, birthdate, address, maritalStatus, affiliation, telResidential, cellphone, healthInsurance, email, bloodType, familyHistory, surgicalHistory, allergies, id_doctor,
  } = req.body;
  PatientRecord.create({
    name,
    gender,
    birthdate,
    address,
    maritalStatus,
    affiliation,
    telResidential,
    cellphone,
    healthInsurance,
    email,
    bloodType,
    familyHistory,
    surgicalHistory,
    allergies,
    id_doctor,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
