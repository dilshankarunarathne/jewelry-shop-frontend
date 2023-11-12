"use client"

import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Box, Typography, makeStyles } from '@material-ui/core';
import { Navbar } from '../../components/Navbar';

const useStyles = makeStyles({
  container: {
    background: 'linear-gradient(to right, transparent, #FFFDCE), url("/couple.png")',
    backgroundSize: 'contain',
    backgroundPosition: 'left bottom',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  },
});

export default function AboutPage() {
  const classes = useStyles();

  return (
    <Router>
        <Box className={classes.container}>
          <Navbar />
          {/* Rest of your code */}
        </Box>
    </Router>
  );
}
