import React from 'react';
import { Grid, Typography } from '@mui/material';

import './style.css';
import MediaCard from '../main-page/third-section/card';

const CreepersComponent = () => {
  const images = [
    '/creepers.jpeg',
    '/creepers/bignonia.jpeg',
    '/creepers/bugleweed.jpeg',
    '/creepers/cucumber.jpeg',
    '/creepers/pumpkin.jpeg',
    '/creepers/strawberry.jpeg',
  ];

  const texts = [
    'Watermelon',
    'Bignonia',
    'Bugleweed',
    'Cucumber',
    'Pumpkin',
    'Strawberry'
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
    <Grid container className='creepers-container'>
      <Grid item lg={12} md={12} sm={12} xs={12} className='creepers-header-container'>
        <Typography className='creepers-header-title'>Creepers</Typography>
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

export default CreepersComponent;

