const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Consultation = require('../models/Consultation');

// SEARCH a complete list of all consultations
router.get('/consultations', (req, res) => {
  Consultation.find()
    .populate('id_doctor')
    .then((allTheConsultations) => {
      res.json(allTheConsultations);
    })
    .catch((err) => {
      res.json(err);
    });
});

// SEARCH for a single consultation
router.get('/consultation/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Consultation.findById(req.params.id)
    .populate('id_doctor')
    .populate('id_patient')
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

// EDIT a specific consultation
router.put('/consultation/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  console.log(req.body);
  Consultation.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Project with ${req.params.id} is updated successfully.` });
    })
    .catch((err) => {
      res.json(err);
    });
});

// CREATE a new consultation
router.post('/consultation/new', (req, res) => {
  const {
    reason, fisico, orofaringe, otoscopia, SNC, rigidez_da_nuca, pupilas, glasgow, cardiovascular,pele_e_faneros, ap_respiratorio, abdome, osteo_articular, cid, nameCid, symptoms, conduct, id_patient, id_doctor, imageUrl,
  } = req.body;
  Consultation.create({
    reason,
    nameCid,
    fisico,
    orofaringe,
    otoscopia,
    SNC,
    rigidez_da_nuca,
    pupilas,
    glasgow,
    cardiovascular,
    pele_e_faneros,
    ap_respiratorio,
    abdome,
    osteo_articular,
    cid,
    symptoms,
    conduct,
    imageUrl,
    id_patient,
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
