const mongoose = require('mongoose');
const Doctor = require('../models/Doctor');

const dbName = 'medical-manager-server';
mongoose.connect(`mongodb://localhost/${dbName}`);


const doctors = [
  {
    username: 'ABADIA ROCHA FINHOLDT',
    password: '$2a$10$WrgZdAlpgR1ZWyRMTEPoU.mV6O4E4HS5fBOPi3xGXPYifdEV/UDC6',
    name: 'ABADIA ROCHA FINHOLDT',
    crm: '194528',
    specialty: 'CLÍNICO GERAL',
    email: 'abadia.finholdt@saudeplus.com.br',
    birthdate: '22/10/1988',
    telResidencial: '3947-1795',
    cellphone: '98035-0872',
  },
  {
    username: 'JOAQUIM DIEGO ANTONIO DA CRUZ',
    password: '$2a$10$WrgZdAlpgR1ZWyRMTEPoU.mV6O4E4HS5fBOPi3xGXPYifdEV/UDC6',
    name: 'JOAQUIM DIEGO ANTONIO DA CRUZ',
    crm: '781692',
    specialty: 'ALERGISTA',
    email: 'joaquim.cruz@saudeplus.com.br',
    birthdate: '02/11/1988',
    telResidencial: '4947-1799',
    cellphone: '98055-0893',
  },
  {
    username: 'FERNANDA RAQUEL REGINA BARROS',
    password: '$2a$10$WrgZdAlpgR1ZWyRMTEPoU.mV6O4E4HS5fBOPi3xGXPYifdEV/UDC6',
    name: 'FERNANDA RAQUEL REGINA BARROS',
    crm: '231567',
    specialty: 'CARDIOLOGISTA',
    email: 'fernanda.barros@saudeplus.com.br',
    birthdate: '02/11/1988',
    telResidencial: '4947-1799',
    cellphone: '98055-0893',
  },
];

Doctor.create(doctors, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${doctors.length} doctors`);
  mongoose.connection.close();
});
