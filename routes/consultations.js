const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Consultation = require('../models/Consultation');

// BUSCAR a lista completa de todas as consultas
router.get('/consultations', (req, res, next) => {
  Consultation.find()
    .populate('id_doctor')
    .then((allTheConsultations) => {
      res.json(allTheConsultations);
    })
    .catch((err) => {
      res.json(err);
    });
});

// BUSCAR uma consulta específica
router.get('/consultation/:id', (req, res, next) => {
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

// EDITAR uma consulta específica
router.put('/consultation/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Consultation.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Project with ${req.params.id} is updated successfully.` });
    })
    .catch((err) => {
      res.json(err);
    });
});

// CRIAR uma nova consulta
router.post('/consultation/new', (req, res, next) => {
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
