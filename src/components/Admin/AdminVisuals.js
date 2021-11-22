import * as React from 'react';
import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';

import hospitalWiseData from './hospitalWiseData.png';
import recoverRate from './recoverRate.png';
import A from './1.png';
import B from './2.png';
import C from './3.png';

import Graphs from '../Charts/graph';

export default function AdminVisuals() {
  return (
    <>
      <div style={{ width: '800px', height: 'auto' }}>
        <Graphs />
      </div>
      <ImageList sx={{ width: 1500, height: 'auto' }} cols={1}>
        {itemData.map((item) => (
          <div>
            <hr />
            <h2>{item.heading}</h2>
            <img src={item.img} alt={item.title} loading="lazy" />
            <hr />
          </div>
          // <ImageListItem key={item.img}>
          // </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemData = [
  {
    heading: '1. Recovery Rate Visuals',
    img: recoverRate,
    title: 'recoverrate',
  },
  {
    heading: '2. HosptialWise #Patient Visuals',
    img: hospitalWiseData,
    title: 'hospitalWiseData',
  },
  {
    heading: '3. PredictPatientStatusBasedOnDiseaseAndMedicines',
    img: A,
    title: '1',
  },
  {
    heading: '',
    img: B,
    title: '2',
  },
  {
    heading: '',
    img: C,
    title: '3',
  },
];
