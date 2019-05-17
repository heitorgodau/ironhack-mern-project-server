const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  crm: { type: String },
  specialty: { type: String },
  email: { type: String },
  birthdate: { type: String },
  telResidencial: { type: String },
  cellphone: { type: String },
},
{
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
