const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Scheduling = require('../models/Scheduling');

// SEARCH the complete list of schedulings
router.get('/schedulings', (req, res) => {
  Scheduling.find().populate('id_patient')
    .then((allTheSchedulings) => {
      res.json(allTheSchedulings);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Search for a specific scheduling
router.get('/scheduling/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Scheduling.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

// EDIT a specific scheduling
router.put('/scheduling/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Scheduling.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Scheduling with ${req.params.id} is updated successfully.` });
    })
    .catch((err) => {
      res.json(err);
    });
});

// DELETE a scheduling
router.delete('/scheduling/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Scheduling.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Project with ${req.params.id} is removed successfully.` });
    })
    .catch((err) => {
      res.json(err);
    });
});

// CREATE a new scheduling
router.post('/scheduling/new', (req, res) => {
  const {
    patientName, reason, date, hour, id_patient, id_doctor,
  } = req.body;
  Scheduling.create({
    patientName,
    reason,
    date,
    hour,
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
