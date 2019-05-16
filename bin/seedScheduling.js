const mongoose = require('mongoose');
const Scheduling = require('../models/Scheduling');

const appointment = 'medical-manager-server';
mongoose.connect(`mongodb://localhost/${appointment}`);

const appointments = [
  {
    reason: 'Ferida',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5cdd70ac2ee7376c9aba2ff0',
    id_doctor: '5cdd6fd0120a696940f52be1',
  },
  {
    reason: 'Dor nos pé',
    date: '2019-06-12',
    hour: '09:00',
    id_patient: '5cdd70ac2ee7376c9aba2ff4',
    id_doctor: '5cdd6fd0120a696940f52be3',
  },
  {
    reason: 'Dor de cabeça',
    date: '2019-06-22',
    hour: '10:00',
    id_patient: '5cdd70ac2ee7376c9aba2ff1',
    id_doctor: '5cdd6fd0120a696940f52be1',
  },
  {
    reason: 'Dor de barriga',
    date: '2019-06-23',
    hour: '11:00',
    id_patient: '5cdd70ac2ee7376c9aba2ff2',
    id_doctor: '5cdd6fd0120a696940f52be2',
  },
  {
    reason: 'Dor nas costas',
    date: '2019-06-24',
    hour: '12:00',
    id_patient: '5cdd70ac2ee7376c9aba2ff3',
    id_doctor: '5cdd6fd0120a696940f52be3',
  },
];

Scheduling.create(appointments, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${appointments.length} appointments`);
  mongoose.connection.close();
});
