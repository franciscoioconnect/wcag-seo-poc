import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import './style.css';

const FourthSection = () => {
  return (
    <Grid container className='fourth-section-container'>
      <Grid item lg={3} md={3} sm={6} xs={12} className='contact-container'>
        <Typography className='contact-title'>CONTACT US</Typography>
        <div className='contact-paragraph-container'>
          <LocationOnIcon fontSize='medium'/>
          <Typography className='contact-paragraph'>Pachuca Hgo, México</Typography>
        </div>
        <div className='contact-paragraph-container'>
          <LocationOnIcon fontSize='medium'/>
          <Typography className='contact-paragraph'>127 Avenue Img, México</Typography>
        </div>
        <div className='contact-paragraph-container'>
          <EmailIcon fontSize='medium'/>
          <Typography className='contact-paragraph'>francisco.delgado@ioconnectservices.com</Typography>
        </div>
        <div className='contact-paragraph-container'>
          <PhoneIcon fontSize='medium'/>
          <Typography className='contact-paragraph'>+52 111 111 1111</Typography>
        </div>
      </Grid>
      <Box
        component={Grid}
        item
        lg={6}
        md={6}
        sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
      >
        <Image
          src="/logo.svg"
          height={150}
          width={150}
          alt="Logo of the App"
          className='image'
        />
      </Box>
      <Grid item lg={3} md={3} sm={6} xs={12} className='contact-container'>
        <Typography className='contact-title'>INFORMATION</Typography>
        <div className='contact-paragraph-container'>
          <Typography className='contact-paragraph'>About us</Typography>
        </div>
        <div className='contact-paragraph-container'>
          <Typography className='contact-paragraph'>Our Mission</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default FourthSection;
