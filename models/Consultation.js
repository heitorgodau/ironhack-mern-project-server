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
  cardiovascular: { type: String },
  RCR_2T_BNF_S_S: { type: String },
  pele_e_faneros: { type: String },
  ap_respiratorio: { type: String },
  R_Adv: { type: String },
  abdome: { type: String },
  osteo_articular: { type: String },
  PA: { type: String },
  nameCid: { type: String },
  exam: { type: String },
  symptoms: { type: String },
  conduct: { type: String },
  date: { type: String },
  imageUrl: { type: String },
  id_patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
  id_doctor: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

const Consultation = mongoose.model('Consultation', ConsultationSchema);
module.exports = Consultation;
