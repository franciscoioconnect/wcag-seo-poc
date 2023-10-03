import React from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

import './styles.css';

const SecondSection = () => {
  return (
    <Grid container className='second-section-container'>
      <Grid item lg={8} xs={12} className='second-section-text-container'>
        <Typography className='first-section-text-title'>Start changing the world</Typography>
        <Typography
          className='first-section-text-subtitle-1'
        >You do not need a big place to start your new adventure</Typography>
        <Typography
          className='first-section-text-subtitle-2'
        >Your ideal plant is waiting for you!</Typography>
      </Grid>
      <Grid item lg={4} xs={12} className='second-section-image-container'>
        <div className='image-container'>
          <Image
            src="/second-section.png"
            fill
            alt="Image Second Section"
            className='image'
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default SecondSection;
