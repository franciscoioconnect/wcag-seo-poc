import React from 'react';
import { Grid, Typography } from '@mui/material';

import './style.css';
import MediaCard from '../main-page/third-section/card';

const TreesComponent = () => {
  const images = [
    '/trees/ahuehuete.jpeg',
    '/trees/apple.jpeg',
    '/trees/eucaluptus.jpeg',
    '/trees/judas-tree.jpeg',
    '/trees/lilac.jpeg',
    '/trees/white-poplar.jpeg',
  ];

  const texts = [
    'Ahuehuete',
    'Apple',
    'Eucalyptus',
    'Judas Tree',
    'Lilac',
    'White Poplar'
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
    <Grid container className='trees-container'>
      <Grid item lg={12} md={12} sm={12} xs={12} className='trees-header-container'>
        <Typography className='trees-header-title'>TREES</Typography>
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

export default TreesComponent;

