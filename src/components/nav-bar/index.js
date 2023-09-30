'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Button, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import './styles.css';


const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container>
      <Grid item lg={6} md={6} sm={6} xs={9} className='header-logo-section'>
        <Image
          src="/logo.svg"
          height={60}
          width={60}
          alt="Logo of the Application"
        />
        <h1 className='header-title-page'>GREEN WORLD</h1>
      </Grid>
      <Box
        component={Grid}
        className='header-buttons-section'
        item
        lg={6}
        md={6}
        sm={6}
        sx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' } }}
      >
        <Button className='button-header' variant="text" size="large" sx={{ color: '#176528' }} aria-label='Button to open the Plants Catalog'>CATALOG</Button>
        <Button className='button-header' variant="text" size="large" sx={{ color: '#176528', marginLeft: 5 }} aria-label='Button to open the section About Us'>ABOUT US</Button>
      </Box>
      <Box
        component={Grid}
        className='header-buttons-section'
        item
        xs={3}
        sx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none' } }}
      >
        <IconButton
          aria-label="menu"
          size='large'
          className='header-menu-icon'
          id="menu-button"
          aria-controls={open ? 'app-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="app-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'menu-button',
          }}
        >
          <MenuItem style={{ color: '#176528' }} onClick={handleClose}>CATALOG</MenuItem>
          <MenuItem style={{ color: '#176528' }} onClick={handleClose}>ABOUT US</MenuItem>
        </Menu>
      </Box>

    </Grid>
  );
};

export default NavBar;
