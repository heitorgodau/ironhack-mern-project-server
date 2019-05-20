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
    id_patient: '5ce305f3e48b58349e9e7ce7',
    id_doctor: '5ce3056de3f262346845ee31',
  },
  {
    reason: 'Dor nos pé',
    cid: 'bbbb',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5ce305f3e48b58349e9e7ceb',
    id_doctor: '5ce3056de3f262346845ee32',
  },
  {
    reason: 'Dor de cabeça',
    cid: 'cccccc',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5ce305f3e48b58349e9e7ce8',
    id_doctor: '5ce3056de3f262346845ee31',
  },
  {
    reason: 'Dor de barriga',
    cid: 'dddddd',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5ce305f3e48b58349e9e7ce9',
    id_doctor: '5ce3056de3f262346845ee31',
  },
  {
    reason: 'Dor nas costas',
    cid: 'eeeeee',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5ce305f3e48b58349e9e7cea',
    id_doctor: '5ce3056de3f262346845ee32',
  },
];

Consultation.create(consultations, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${consultations.length} consultations`);
  mongoose.connection.close();
});
