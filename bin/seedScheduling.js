const mongoose = require('mongoose');
const Scheduling = require('../models/Scheduling');

const dbName = 'medical-manager-server';
mongoose.connect(`mongodb://localhost/${dbName}`);

const appointments = [
  {
    reason: 'Ferida',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5ce29bcb27cf3c15a9644f60',
    id_doctor: '5ce29b6c2d3067157ecefe1e',
  },
  {
    reason: 'Dor nos pé',
    date: '2019-06-12',
    hour: '09:00',
    id_patient: '5ce29bcb27cf3c15a9644f61',
    id_doctor: '5ce29b6c2d3067157ecefe1e',
  },
  {
    reason: 'Dor de cabeça',
    date: '2019-06-22',
    hour: '10:00',
    id_patient: '5ce29bcb27cf3c15a9644f64',
    id_doctor: '5ce29b6d2d3067157ecefe1f',
  },
  {
    reason: 'Dor de barriga',
    date: '2019-06-23',
    hour: '11:00',
    id_patient: '5ce29bcb27cf3c15a9644f62',
    id_doctor: '5ce29b6c2d3067157ecefe1e',
  },
  {
    reason: 'Dor nas costas',
    date: '2019-06-24',
    hour: '12:00',
    id_patient: '5ce29bcb27cf3c15a9644f63',
    id_doctor: '5ce29b6d2d3067157ecefe1f',
  },
];

Scheduling.create(appointments, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${appointments.length} appointments`);
  mongoose.connection.close();
});
