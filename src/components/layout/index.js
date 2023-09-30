import React from 'react';
import NavBar from '../nav-bar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
