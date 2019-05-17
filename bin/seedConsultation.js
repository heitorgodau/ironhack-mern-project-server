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
    id_patient: '5cdec50d9d441c66d7ccde70',
    id_doctor: '5cdde31554d0bf5892d0f297',
  },
  {
    reason: 'Dor nos pé',
    cid: 'bbbb',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5cdec50d9d441c66d7ccde70',
    id_doctor: '5cdde31554d0bf5892d0f297',
  },
  {
    reason: 'Dor de cabeça',
    cid: 'cccccc',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5cdec50d9d441c66d7ccde70',
    id_doctor: '5cdde31554d0bf5892d0f299',
  },
  {
    reason: 'Dor de barriga',
    cid: 'dddddd',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5cdec50d9d441c66d7ccde6c',
    id_doctor: '5cdde31554d0bf5892d0f298',
  },
  {
    reason: 'Dor nas costas',
    cid: 'eeeeee',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5cdec50d9d441c66d7ccde6c',
    id_doctor: '5cdde31554d0bf5892d0f298',
  },
];

Consultation.create(consultations, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${consultations.length} consultations`);
  mongoose.connection.close();
});
