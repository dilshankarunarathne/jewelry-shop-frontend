"use client"

import { Button, Grid, Typography, Container, makeStyles, Box } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import "./pawn.css"
import { NavbarPawn } from '@/components/NavbarPawn';

const useStyles = makeStyles({
  sec3h: {
    fontFamily: "'Gwendolyn', cursive",
    color: 'White',
    '@media (max-width:600px)': {
      fontSize: '70px',
    },
  }
});

export default function PawnPage() {
  const classes = useStyles();
  return (
    <Router>      
    <CssBaseline />
      <NavbarPawn />
      <Box className="root" id='home'>
        <Typography className="h1 mainhead" variant="h1">40% Discount</Typography>
        <Typography className="subh" variant="body1">for all in every pawning of gold articles</Typography>
        <Typography className="text" variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod</Typography>
        <Button variant="contained" color="primary" className="button">
          DISCOVER MORE
        </Button>
      </Box>

      <Box className="fullScreen marginTop services" id='services'>
        <Typography className="h1p2" variant="h1">Our Services</Typography>
        <Box className="servicesContainer">
          <Box className="serviceBox">
            <Typography variant="h1">Service 1</Typography>
            <Typography className="sbp" variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            </Typography>
            <Button className="button" variant="contained" color="primary">Action</Button>
          </Box>
          <Box className="serviceBox">
            <Typography variant="h1">Service 2</Typography>
            <Typography className="sbp" variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            </Typography>
            <Button className="button" variant="contained" color="primary">Action</Button>
          </Box>
          <Box className="serviceBox">
            <Typography variant="h1">Service 3</Typography>
            <Typography className="sbp" variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            </Typography>
            <Button className="button" variant="contained" color="primary">Action</Button>
          </Box>
          <Box className="serviceBox">
            <Typography variant="h1">Service 4</Typography>
            <Typography className="sbp" variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            </Typography>
            <Button className="button" variant="contained" color="primary">Action</Button>
          </Box>
        </Box>
      </Box>

      <Box className="fullScreen marginTop about" id='about'>
        <Grid className='aboutContainer topspace' container alignItems="center" justify="space-around" style={{ height: '100%' }}>
          <Grid item xs={6} className='maxwidth70'>
            <Typography className={classes.sec3h} variant="h1" align="center">
              About Us
            </Typography>
          </Grid>
          <Grid item xs={6} className='maxwidth80'>
            <Typography variant="body1" align="center" className='sec3p aboutp'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
              ut Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
              eiusmod tempor incididunt ut
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Router>
  );
}
