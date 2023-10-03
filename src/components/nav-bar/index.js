'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Box, Button, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import './styles.css';


const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMobileMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = (btnType) => {
    setAnchorEl(null);
    if (btnType === 'catalog') {
      handleCatalogBtnClick();
    }
    // } else {
    //   handleAboutUsBtnClick();
    // }
    // router.pathname
  };

  const handleCatalogBtnClick = () => {
    router.push('/catalog');
  };

  const handleAboutUsBtnClick = () => {
    router.push('/aboutus');
  };
  useEffect(() => {
    console.log(pathname);
  }, []);

  return (
    <nav>
      <Grid container>
        <Grid item lg={6} md={6} sm={6} xs={9} className='header-logo-section'>
          <Image
            src="/logo.svg"
            height={60}
            width={60}
            alt="Logo of the Application"
          />
          <Link className='header-link' href='/'>
            <h1 className='header-title-page'>GREEN WORLD</h1>
          </Link>
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
          <Button
            className={`${pathname === '/catalog' ? 'active-button-header' : 'button-header'}`}
            variant="text"
            size="large"
            sx={{ color: '#176528' }}
            aria-label='Button to open the Plants Catalog'
            onClick={handleCatalogBtnClick}
            aria-braillelabel='Button to open the Plants Catalog'
          >
            CATALOG
          </Button>
          <Button
            className={`${pathname === '/aboutus' ? 'active-button-header' : 'button-header'}`}
            variant="text"
            size="large"
            sx={{ color: '#176528', marginLeft: 5 }}
            aria-label='Button to open the section About Us'
          >
            ABOUT US
          </Button>
        </Box>
        <Box
          component={Grid}
          className='header-buttons-section'
          item
          xs={3}
          sx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none' } }}
        >
          <IconButton
            aria-label="app-menu-button"
            size='large'
            className='header-menu-icon'
            id="menu-button"
            aria-controls={open ? 'app-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleMobileMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="app-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMobileMenuClose}
            MenuListProps={{
              'aria-labelledby': 'menu-button',
            }}
          >
            <MenuItem
              style={{ color: '#176528' }}
              onClick={() => handleMobileMenuClose('catalog')}
            >
              CATALOG
            </MenuItem>
            <MenuItem
              style={{ color: '#176528' }}
              onClick={() => handleMobileMenuClose('aboutus')}
            >
              ABOUT US
            </MenuItem>
          </Menu>
        </Box>
      </Grid>
    </nav>
  );
};

export default NavBar;
