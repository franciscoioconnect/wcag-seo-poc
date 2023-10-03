import React from 'react';
import { Grid, Typography } from '@mui/material';

import './style.css';
import MediaCard from '../main-page/third-section/card';

const HerbsComponent = () => {
  const images = [
    '/herbs/carrot.jpeg',
    '/herbs/ginger.jpeg',
    '/herbs/radish.jpeg',
    '/herbs/sunflower.jpeg',
    '/herbs/tomato.jpeg',
    '/herbs/wheat.jpeg',
  ];

  const texts = [
    'Carrot',
    'Ginger',
    'Radish',
    'Sunflower',
    'Tomato',
    'Wheat'
  ];

  const fakerData = Array(6)
  .fill(0)
  .map((_, index) => {
    return {
      image: images[index],
      headline: texts[index],
      description: texts[index] || texts[0]
    };
  });

  return (
    <Grid container className='herbs-container'>
      <Grid item lg={12} md={12} sm={12} xs={12} className='herbs-header-container'>
        <Typography className='herbs-header-title'>HERBS</Typography>
      </Grid>
      {fakerData.map((card, index) => {
        return (
          <Grid key={index} item lg={4} md={4} sm={12} xs={12} >
            <MediaCard key={index} {...card} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HerbsComponent;

