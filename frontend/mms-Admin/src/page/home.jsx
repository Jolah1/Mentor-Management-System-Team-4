import React from 'react';
import { Container, Typography, ThemeProvider } from '@mui/material';
import logo from '../components/image';

const Home = () => {
  return (
    <Container maxWidth="sm" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{ textAlign: 'center' }}>
        <img src={logo} alt="Logo" width="100" height="100" />
        <Typography variant="h4" align="center">
          Mentor Management System
        </Typography>
      </div>
    </Container>
  );
};

export default Home;