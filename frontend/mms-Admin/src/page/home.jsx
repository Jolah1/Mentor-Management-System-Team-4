import React from 'react';
import { Container, Typography } from '@mui/material';
import mmsLogo from '../components/image'
const home = () => {
  return (
    <Container
      style={{ height: '100vh' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <div>
        <img
          src="mmsLogo"  // Replace with the path to your logo image
          alt="Logo"
          style={{ width: '100px', height: '100px' }} // Customize logo size as needed
        />
        <Typography variant="h4" align="center">
          Mentor Management System
        </Typography>
        {/* Add additional content or components for your landing page */}
      </div>
    </Container>
  );
};

export default home;