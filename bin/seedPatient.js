const mongoose = require('mongoose');
const PatientRecord = require('../models/PatientRecord');

const dbName = 'medical-manager-server';
mongoose.connect(`mongodb://localhost/${dbName}`);

const patients = [
  {
    name: 'Miguel Thales Silva',
    gender: 'male',
    birthdate: '1997-10-04',
    address: 'Rua Edgar Bispo de Souza, 623 ',
    maritalStatus: 'Casado',
    affiliation: 'Maria Vera Isis',
    telResidential: '(81) 3780-1011',
    cellphone: '(81) 98928-9486',
    healthInsurance: 'Amil',
    email: 'severinobernardojesus_@inglesasset.com.br',
    bloodType: 'B-',
    familyHistory: 'Não se aplica',
    surgicalHistory: 'Não se aplica',
    allergies: 'Poeira',
    id_doctor: '5ce29b6c2d3067157ecefe1e',
  },
  {
    name: 'Edson Gabriel Moreira',
    gender: 'male',
    birthdate: '1995-06-14',
    address: 'Rua Nazaré, 332',
    maritalStatus: 'Solteiro',
    affiliation: 'Isabella Allana Lavínia',
    telResidential: '(49) 3895-8069',
    cellphone: '(49) 99424-1427',
    healthInsurance: 'Amil',
    email: 'edsongabrielmoreira-78@oliveiraesouza.adv.br',
    bloodType: 'O-',
    familyHistory: 'Não se aplica',
    surgicalHistory: 'Não se aplica',
    allergies: 'Não se aplica',
    id_doctor: '5ce29b6c2d3067157ecefe1e',
  },
  {
    name: 'Nair Cecília Rosa Alves',
    gender: 'other',
    birthdate: '1995-03-08',
    address: 'Travessa Nova, 515',
    maritalStatus: 'Solteira',
    affiliation: 'Cláudia Rosângela Márcia',
    telResidential: '(82) 2794-2797',
    cellphone: '(82) 99755-8338',
    healthInsurance: 'Intermédica',
    email: 'nairceciliarosaalves_@2emesconstrutora.com.br',
    bloodType: 'O-',
    familyHistory: 'Não se aplica',
    surgicalHistory: 'Não se aplica',
    allergies: 'Não se aplica',
    id_doctor: '5ce29b6c2d3067157ecefe1e',
  },
  {
    name: 'Heitor Raimundo Ricardo Freitas',
    gender: 'asexual',
    birthdate: '1940-01-25',
    address: '1ª Travessa Quarenta, 800',
    maritalStatus: 'Solteiro',
    affiliation: 'Yasmin Elza Heloise',
    telResidential: '(81) 3847-8777',
    cellphone: '(81) 99758-9871',
    healthInsurance: 'Notredame',
    email: 'hheitorraimundoricardofreitas@ipek.net.br',
    bloodType: 'A-',
    familyHistory: 'Não se aplica',
    surgicalHistory: 'Não se aplica',
    allergies: 'Não se aplica',
    id_doctor: '5ce29b6d2d3067157ecefe1f',
  },
  {
    name: 'Manuel Yuri de Paula',
    gender: 'male',
    birthdate: '1979-05-02',
    address: 'Rua Ouro Verde, 498',
    maritalStatus: 'Solteiro',
    affiliation: 'Luiza Catarina Betina',
    telResidential: '(43) 2918-9383',
    cellphone: '(43) 98898-1280',
    healthInsurance: 'Brasdesco Saúde',
    email: 'manuelyuridepaula__manuelyuridepaula@capua.com.br',
    bloodType: 'B+',
    familyHistory: 'Não se aplica',
    surgicalHistory: 'Não se aplica',
    allergies: 'Não se aplica',
    id_doctor: '5ce29b6d2d3067157ecefe1f',
  },
];

PatientRecord.create(patients, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${patients.length} patients`);
  mongoose.connection.close();
});
