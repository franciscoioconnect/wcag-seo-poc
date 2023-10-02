'use client';
import React from 'react';
import { Grid, Typography } from '@mui/material';

import { BackgroundImage } from './styled-component';
import './style.css';

const CatalogComponent = () => {
  return (
    <Grid container className='catalog-container'>
      <Grid item lg={12} md={12} sm={12} xs={12} className='catalog-header-container'>
        <Typography className='catalog-header-title'>CATALOG</Typography>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12} className='catalog-image-container'>
        <BackgroundImage imageUrl='/shrubs.jpeg'>
          <div className='catalog-category-image-text'>
            <Typography className='catalog-image-title'>Shrubs</Typography>
          </div>
        </BackgroundImage>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12} className='catalog-image-container'>
        <BackgroundImage imageUrl='/creepers.jpeg'>
          <div className='catalog-category-image-text'>
            <Typography className='catalog-image-title'>Creepers</Typography>
          </div>
        </BackgroundImage>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12} className='catalog-image-container'>
        <BackgroundImage imageUrl='/climbers.jpeg'>
          <div className='catalog-category-image-text'>
            <Typography className='catalog-image-title'>Climbers</Typography>
          </div>
        </BackgroundImage>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} className='catalog-image-container'>
        <BackgroundImage imageUrl='/trees.jpeg'>
          <div className='catalog-category-image-text'>
            <Typography className='catalog-image-title'>Trees</Typography>
          </div>
        </BackgroundImage>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} className='catalog-image-container'>
        <BackgroundImage imageUrl='/herbs.jpeg'>
          <div className='catalog-category-image-text'>
            <Typography className='catalog-image-title'>Herbs</Typography>
          </div>
        </BackgroundImage>
      </Grid>
    </Grid>
  );
};

export default CatalogComponent;
