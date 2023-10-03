import React from 'react';
import { Grid, Typography } from '@mui/material';

import './style.css';
import MediaCard from '../main-page/third-section/card';

const ShrubsComponent = () => {
  const images = [
    '/shrubs/bougainvillaea.jpeg',
    '/shrubs/china-rose.jpeg',
    '/shrubs/pomegranate.jpeg',
    '/shrubs/rose.jpeg',
    '/shrubs/tulsi.jpeg',
    '/shrubs/jasmine.jpeg',
  ];

  const texts = [
    'Bougainvillaea',
    'China Rose',
    'Pomegranate',
    'Rose',
    'Tulsi',
    'Jasmine'
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
    <Grid container className='shrubs-container'>
      <Grid item lg={12} md={12} sm={12} xs={12} className='shrubs-header-container'>
        <Typography className='shrubs-header-title'>SHRUBS</Typography>
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

export default ShrubsComponent;

