"use client"

import { Navbar } from '../../components/Navbar';
import { Button, Typography, Container, makeStyles, Box } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.76)), url("/rings-bg.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  },
  h1: {
    color: 'white',
    fontFamily: 'Gudea',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  },
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    background: '#FFE55E',
    fontFamily: 'Inria Sans',
    color: 'black',
    // fontWeight: 'bold',
    marginTop: '23px',
    textAlign: 'center',
    padding: '6px 12px', 
    width: '200px',
  },
  subh: {
    color: 'white',
    fontFamily: 'Inter',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  },
  text: {
    color: 'white',
    fontFamily: 'Gudea',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  },
  
  h1p2: {
  },
}));

export default function PawnPage() {
  const classes = useStyles();

  return (
    <Router>      
    <CssBaseline />
      <Navbar />
      <Box className={classes.root}>
      <Typography className={classes.h1} variant="h1">40% Discount</Typography>
      <Typography className={classes.subh} variant="body1">for all in every pawning of gold articles</Typography>
      <Typography className={classes.text} variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod</Typography>
      <Button variant="contained" color="primary" className={classes.button}>
        DISCOVER MORE
      </Button>
      </Box>
      <Box>
        <Typography className={classes.h1p2} variant="h1">Our Services</Typography>
      </Box>
  </Router>
  );
}
