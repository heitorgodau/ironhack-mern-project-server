const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  crm: String,
  prefix: String,
  specialty: String,
  email: String,
  birthdate: Date,
  telResidencial: String,
  cellphone: String,
},
{
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
