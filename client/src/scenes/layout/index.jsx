import { Box } from '@mui/material';
// import { useMediaQuery } from '@mui/material';
import React from 'react';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from "../../components/Navbar.jsx"
const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout