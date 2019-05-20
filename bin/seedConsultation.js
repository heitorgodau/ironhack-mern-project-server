const mongoose = require('mongoose');
const Consultation = require('../models/Consultation');

const dbName = 'medical-manager-server';
mongoose.connect(`mongodb://localhost/${dbName}`);

const consultations = [
  {
    reason: 'Ferida',
    cid: 'aaaaaa',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5ce29bcb27cf3c15a9644f60',
    id_doctor: '5ce29b6c2d3067157ecefe1e',
  },
  {
    reason: 'Dor nos pé',
    cid: 'bbbb',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5ce29bcb27cf3c15a9644f61',
    id_doctor: '5ce29b6c2d3067157ecefe1e',
  },
  {
    reason: 'Dor de cabeça',
    cid: 'cccccc',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5ce29bcb27cf3c15a9644f64',
    id_doctor: '5ce29b6d2d3067157ecefe1f',
  },
  {
    reason: 'Dor de barriga',
    cid: 'dddddd',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5ce29bcb27cf3c15a9644f62',
    id_doctor: '5ce29b6c2d3067157ecefe1e',
  },
  {
    reason: 'Dor nas costas',
    cid: 'eeeeee',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5ce29bcb27cf3c15a9644f63',
    id_doctor: '5ce29b6d2d3067157ecefe1f',
  },
];

Consultation.create(consultations, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${consultations.length} consultations`);
  mongoose.connection.close();
});
