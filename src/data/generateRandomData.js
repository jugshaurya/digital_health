const fs = require('fs');
const util = require('util');

const patientIdStart = 9111000;
const doctorIdStart = 9111000;
const status = ['Recovered', 'Passed Away', 'Recovering'];
const mini = 0;
const maxi = 17; // size of arrays

const hospitals = [
  'Amit Jaggi Memorial Hospital',
  'Apex Hospitals',
  'Apex Hospitals',
  'Amit Jaggi Center',
  'Manipal Hospital',
  'Kanpur Medical Center',
  'Apex Hospitals',
  'Manipal Hospital',
  'HOSMAT Hospital',
  'Amit Jaggi Center',
  'Kanpur Medical Center',
  'Apex Hospitals',
  'Bombay Hospital',
  'HOSMAT Hospital',
  'Yashoda Super Center',
  'Aditya Hospitals',
  'Amar Leela Hospital',
  'Kanpur Medical Center',
];
const doctorNames = [
  'Vladimir Hurst',
  'Shellie William',
  'Declan Beasley',
  'Sawyer Byers',
  'Shea Hayes',
  'Regan Pierce',
  'Ignacia Acevedo',
  'Colleen Stone',
  'Heidi Hoffman',
  'Halee Frye',
  'Ralph Palmer',
  'Minerva Little',
  'Graham Vang',
  'Aidan Jensen',
  'Harper Mercado',
  'Emerson Dudley',
  'Montana Gillespie',
  'Devin Woods',
];
const patientNames = [
  'Bhagesh',
  'Nolan Chande',
  'Mannix Rai',
  'Keefe Jana',
  'Daniel Charan',
  'Sylvester Vish',
  'Rhea Prasad',
  'Raja Saini',
  'Ignacia Dutta',
  'Amery Srivastav',
  'Roanna Saini',
  'Kiara Jai',
  'Kathleen Lata',
  'Gwendolyn Muthu',
  'Emma Vijaya',
  'Giselle Chaudhary',
  'Bernard Uddin',
  'Lois Naran',
];
const states = [
  'Chandigarh',
  'Delhi',
  'Agartala',
  'Haridwar',
  'Agartala',
  'Pondicherry',
  'Ashoknagar',
  'Panjim',
  'Panjim',
  'Delhi',
  'Aizwal',
  'Bharatpur',
  'Tiruvottiyur',
  'Shillong',
  'Chapra',
  'Kohima',
  'Silvassa',
  'Tonk',
];
const diseases = [
  'Mononucleosis',
  'Colds and Flu.',
  'Allergies',
  'Conjunctivitis',
  'Headaches',
  'Colds',
  'Stomach',
  'Conjunctivitis',
  'Mononucleosis',
  'Conjunctivitis',
  'Stomach',
  'Headaches',
  'Colds',
  'Colds',
  'Diarrhea',
  'Conjunctivitis',
  'Headaches',
  'Stomach',
];
const medications = [
  'Meloxicam',
  'Klor-Con M20',
  'Symbicort',
  'Folic Acid',
  'Amoxicillin',
  'Lovastatin',
  'Venlafaxine HCl ER',
  'Levoxyl',
  'Oxycodone HCl',
  'Tricor',
  'Benicar HCT',
  'Lantus Solostar',
  'Metformin HCl',
  'Promethazine HCl',
  'Metformin HCl',
  'Azithromycin',
  'Famotidine',
  'Famotidine',
];
const dates = [
  'Oct 9, 2021',
  'Apr 3, 2021',
  'Jul 12, 2021',
  'Mar 7, 2021',
  'Sep 18, 2021',
  'Nov 23, 2020',
  'Sep 21, 2021',
  'Mar 4, 2021',
  'May 17, 2021',
  'Sep 29, 2021',
  'May 31, 2021',
  'Jun 14, 2021',
  'Apr 20, 2021',
  'Jan 14, 2021',
  'Jul 6, 2021',
  'Mar 7, 2021',
  'Dec 1, 2021',
  'May 21, 2021',
];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateData = () => {
  const data = [];
  for (let i = 0; i < 1000; i++) {
    const patientIndex = getRandomInt(mini, maxi);
    const doctorIndex = getRandomInt(mini, maxi);
    data.push({
      id: i,
      patient_name: patientNames[patientIndex],
      patient_health_id: 'P-' + patientIdStart + patientIndex,
      doctor_name: doctorNames[doctorIndex],
      doctor_health_id: 'D-' + doctorIdStart + doctorIndex,
      entry_date: dates[getRandomInt(mini, maxi)],
      hospital_name: hospitals[doctorIndex],
      region: states[doctorIndex],
      disease: diseases[getRandomInt(mini, maxi)],
      medication: medications[getRandomInt(mini, maxi)],
      status: status[getRandomInt(mini, 2)],
    });
  }

  return data;
};

const datasets = { data: generateData() };

// https://nodejs.org/en/knowledge/getting-started/how-to-use-util-inspect/
fs.writeFile(
  'src/data/radomPatientData.js',
  'const DATASET = ' +
    util.inspect(datasets, false, null) +
    '\nexport default DATASET',
  'utf-8',
  (err) => {
    console.log(err);
  }
);
