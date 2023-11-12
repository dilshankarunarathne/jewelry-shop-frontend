"use client"

import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Box, Typography } from '@material-ui/core';
import { Navbar } from '../../components/Navbar';

export default function AboutPage() {
  return (
    <Router>
      <Container style={{
        background: 'linear-gradient(to right, transparent, #FFFDCE) !important',
        minHeight: '100vh'
      }}>
        <Box className="AboutPage">
          <Navbar />
          
        </Box>
      </Container>
    </Router>
  );
}
