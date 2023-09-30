import React from 'react';
import { Button, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';
import Image from 'next/image';

import './styles.css';

const FirstSection = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12} className='first-section-header'>
        <div className='rounded-item' />
        <Typography variant='h4' className='first-section-header-text'>TREES</Typography>
        <div className='rounded-item' />
        <Typography variant='h4' className='first-section-header-text'>FLOWERS</Typography>
        <div className='rounded-item' />
        <Typography variant='h4' className='first-section-header-text'>HERBS</Typography>
        <div className='rounded-item' />
      </Grid>
      <Grid item lg={4} xs={3} className='beige-background'>
        <div className='image-container'>
          <Image
            src="/left-leave.png"
            fill
            alt="Left leave"
            className='image'
          />
        </div>
      </Grid>
      <Grid item lg={4} xs={6} className='first-section-text-container beige-background'>
        {/* <div className='first-section-text-container'> */}
          <Typography variant='h5' className='first-section-text'>Discover a new world and find the perfect plant just for you!</Typography>
          <Button className='button-catalog' variant="contained" size="large">Catalog</Button>
        {/* </div> */}
      </Grid>
      <Grid item lg={4} xs={3} className='beige-background'>
        <div className='image-container'>
          <Image
            src="/right-leave.png"
            fill
            alt="Right leave"
            className='image'
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default FirstSection;
