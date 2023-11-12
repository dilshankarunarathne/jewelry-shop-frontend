"use client"

import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Box, Typography, makeStyles } from '@material-ui/core';
import { Navbar } from '../../components/Navbar';
import { Button } from '@material-ui/core';

import './about.css'

const useStyles = makeStyles({
  container: {
    background: 'linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(255,253,206,1) 65%, rgba(255,253,206,1) 100%), url("/couple.png")',
    backgroundSize: 'contain',
    backgroundPosition: 'left bottom',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  },
  button: {
    background: '#FFE55E',
    fontFamily: 'Inria Sans',
    color: 'black',
    // fontWeight: 'bold',
    marginTop: '23px',
    textAlign: 'center',
    padding: '6px 12px', 
    width: '200px',
  },
  h1: {
    fontFamily: "'Gwendolyn', cursive",
    fontSize: '100px',
    fontWeight: 200,
    lineHeight: '85px',
    letterSpacing: '0em',
    textAlign: 'left',
    paddingBottom: '30px',
  },
  paragraph: {
    fontFamily: 'Inter',
    fontSize: '25px',
    fontWeight: 80,
    lineHeight: '45px',
    letterSpacing: '0em',
    textAlign: 'justify',
  },
  rightAlignBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    paddingRight: '40px',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  parentBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // This makes the box take up the full viewport height
  },
});

export default function AboutPage() {
  const classes = useStyles();

  return (
    <Router>
        <Box className={classes.container}>
          <Navbar />
          <Box className={classes.rightAlignBox}>
            <Typography className={classes.h1} variant="h1">The Hallmark of Elegance</Typography>
            <Typography className={classes.paragraph} variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            </Typography>
            <Button className={classes.button} variant="contained" color="primary">Discover More</Button>
          </Box>
        </Box>
    </Router>
  );
}
