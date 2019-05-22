const mongoose = require('mongoose');

const { Schema } = mongoose;

const ConsultationSchema = new Schema({
  reason: { type: String },
  cid: { type: String },
  fisico: { type: String },
  orofaringe: { type: String },
  otoscopia: { type: String },
  SNC: { type: String },
  rigidez_da_nuca: { type: String },
  pupilas: { type: String },
  glasgow: { type: String },
  cardiovascular: { type: String },  
  pele_e_faneros: { type: String },
  ap_respiratorio: { type: String },  
  abdome: { type: String },
  osteo_articular: { type: String },  
  nameCid: { type: String },
  symptoms: { type: String },
  conduct: { type: String },
  date: { type: String },
  imageUrl: String,
  id_patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
  id_doctor: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

const Consultation = mongoose.model('Consultation', ConsultationSchema);
module.exports = Consultation;
