import React from 'react';
import { Grid, Typography } from '@mui/material';

import './style.css';
import MediaCard from '../main-page/third-section/card';

const ClimbersComponent = () => {
  const images = [
    '/climbers/bittergourd.jpeg',
    '/climbers/glory-lily.jpeg',
    '/climbers/grapevine.jpeg',
    '/climbers/morning-glory.jpeg',
    '/climbers/passion-flower.jpeg',
    '/climbers/petha.jpeg',
  ];

  const texts = [
    'Bitter Gourd',
    'Glory Lily',
    'Grapevine',
    'Morning Glory',
    'Passion Flower',
    'Petha'
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
    <Grid container className='climbers-container'>
      <Grid item lg={12} md={12} sm={12} xs={12} className='climbers-header-container'>
        <Typography className='climbers-header-title'>CLIMBERS</Typography>
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

export default ClimbersComponent;

