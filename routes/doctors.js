const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const bcrypt = require('bcryptjs');
const Doctor = require('../models/user-model');

// SEARCH the complete list of doctors
router.get('/doctors', (req, res) => {
  Doctor.find()
    .then((allTheDoctors) => {
      res.json(allTheDoctors);
    })
    .catch((err) => {
      res.json(err);
    });
});

// SEARCH a specific doctor
router.get('/doctor/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Doctor.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

// EDIT a specific doctor
router.put('/doctor/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Doctor.findOne({ _id: req.params.id })
    .then((result) => {
      console.log('Find One then');
      if (result.password !== req.body.password) {
        const {
          username,
          password,
          name,
          crm,
          prefix,
          specialty,
          email,
          birthdate,
          telResidencial,
          cellphone,
        } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        const body = {
          username,
          password: hashPass,
          name,
          crm,
          prefix,
          specialty,
          email,
          birthdate,
          telResidencial,
          cellphone,
        };
        Doctor.findByIdAndUpdate(req.params.id, body)
          .then(() => {
            console.log('Find and update then');
            res.json({ message: `Doctor with ${req.params.id} is updated successfully.` });
          })
          .catch((err) => {
            console.log('Find and update chatch');
            res.json(err);
          });
      } else {
        const {
          username,
          name,
          crm,
          prefix,
          specialty,
          email,
          birthdate,
          telResidencial,
          cellphone,
        } = req.body;

        const body = {
          username,
          name,
          crm,
          prefix,
          specialty,
          email,
          birthdate,
          telResidencial,
          cellphone,
        };
        Doctor.findByIdAndUpdate(req.params.id, body)
          .then(() => {
            console.log('ELSE Find and update then');
            res.json({ message: `Doctor with ${req.params.id} is updated successfully.` });
          })
          .catch((err) => {
            console.log('ELSE Find and update chatch');
            res.json(err);
          });
      }
    });
});

// CREATE a new doctor in the database
router.post('/doctor/new', (req, res) => {
  const {
    username,
    password,
    name,
    crm,
    specialty,
    email,
    birthdate,
    telResidencial,
    cellphone,
  } = req.body;
  Doctor.create({
    username,
    password,
    name,
    crm,
    specialty,
    email,
    birthdate,
    telResidencial,
    cellphone,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
