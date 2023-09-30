"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Grid, Typography } from '@mui/material';

import Carousel from 'react-multi-carousel';
import Card from './card';
import MobileDetect from 'mobile-detect';

import 'react-multi-carousel/lib/styles.css';
import './styles.css';

const ThirdSection = () => {
  const [moving, setMoving] = useState(false);
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const md = new MobileDetect(navigator.userAgent);
    if (md.tablet()) {
      setDeviceType("tablet");
    } else if (md.mobile()) {
      setDeviceType("mobile");
    } else {
      setDeviceType("desktop");
    }
  }, []);

  const images = [
    "/coriander.jpeg",
    "/bonsai.png",
    "/chrys.jpeg",
    "/tulip.jpeg",
    "/pine.jpeg",
  ];

  const texts = [
    "Coriander",
    "Bonsai",
    "Chrysants",
    "Tulip",
    "Pine"
  ];

  const fakerData = Array(5)
    .fill(0)
    .map((_, index) => {
      return {
        image: images[index],
        headline: texts[index],
        description: texts[index] || texts[0]
      };
    });

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <Grid container sx={{ width: '100%'}}>
      <Grid item lg={12} md={12} sm={12} xs={12} className='third-section-container'>
        <Typography className='third-section-text-title'>Top Plants Today</Typography>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className='carousel-container' >
         <Carousel
          // swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr
          infinite={false}
          beforeChange={() => setMoving(true)}
          afterChange={() => setMoving(false)}
          deviceType={deviceType}
        >
          {fakerData.map((card, index) => {
            return <Card key={index} isMoving={moving} {...card} />;
          })}
        </Carousel>

      </Grid>
    </Grid>
  )
}

export default ThirdSection
