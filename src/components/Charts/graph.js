import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import DATASET from '../../data/randomPatientData.js';

const data = DATASET['data'];
const regions = {};
const diseases = {};

for (var i = 0; i < data.length; i++) {
  if (regions.hasOwnProperty(data[i].region)) regions[data[i].region][1]++;
  else {
    const r = Math.floor(Math.random() * (245 - 52 + 1) + 52);
    const g = Math.floor(Math.random() * (245 - 52 + 1) + 52);
    const b = Math.floor(Math.random() * (245 - 52 + 1) + 52);
    regions[data[i].region] = [
      0,
      1,
      `rgba(${r}, ${g}, ${b}, 0.6)`,
      `rgba(${r}, ${g}, ${b}, 1)`,
    ]; // [recovered, total, bgcolor, bordercolor]
  }
  if (data[i].status === 'Recovered') regions[data[i].region][0]++;

  if (diseases.hasOwnProperty(data[i].disease)) diseases[data[i].disease][2]++;
  else {
    const r2 = Math.floor(Math.random() * (245 - 52 + 1) + 52);
    const g2 = Math.floor(Math.random() * (245 - 52 + 1) + 52);
    const b2 = Math.floor(Math.random() * (245 - 52 + 1) + 52);
    diseases[data[i].disease] = [
      0,
      0,
      1,
      `rgba(${r2}, ${g2}, ${b2}, 0.6)`,
      `rgba(${r2}, ${g2}, ${b2}, 1)`,
    ]; // [recovering, deaths, total, bgcolor, bordercolor]
  }
  if (data[i].status === 'Recovering') diseases[data[i].disease][0]++;
  else if (data[i].status === 'Passed Away') diseases[data[i].disease][1]++;
}

const state1 = {
  labels: Object.keys(regions),
  datasets: [
    {
      label: 'Precentage of People Recovered',
      backgroundColor: Object.keys(regions).map(function (key) {
        return regions[key][2];
      }),
      borderColor: Object.keys(regions).map(function (key) {
        return regions[key][3];
      }),
      data: Object.keys(regions).map(function (key) {
        return (100 * regions[key][0]) / regions[key][1];
      }),
    },
  ],
};

const state2 = {
  labels: Object.keys(diseases),
  datasets: [
    {
      label: 'Disease-wise Death Rate',
      backgroundColor: Object.keys(diseases).map(function (key) {
        return diseases[key][3];
      }),
      borderColor: Object.keys(diseases).map(function (key) {
        return diseases[key][4];
      }),
      data: Object.keys(diseases).map(function (key) {
        return (100 * diseases[key][1]) / diseases[key][2];
      }),
    },
  ],
};

export default function Graph() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Graphs</h1>
      <h2>City-wise Recovery Rate</h2>
      <Bar
        data={state1}
        options={{
          title: {
            display: true,
            text: 'City-wise Recovery Rate',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />

      <h2>Disease-wise Death Rate</h2>
      <Pie
        data={state2}
        options={{
          title: {
            display: true,
            text: 'Disease-wise Death Rate',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
}
