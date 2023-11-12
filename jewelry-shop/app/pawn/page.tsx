"use client"

import { Navbar } from '../../components/Navbar';
import { Button, Grid, Typography, Container, makeStyles, Box } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import "./pawn.css"

const useStyles = makeStyles({
  sec3h: {
    fontFamily: "'Gwendolyn', cursive",
    color: 'White',
  }
});

export default function PawnPage() {
  const classes = useStyles();
  return (
    <Router>      
      <CssBaseline />
      <Navbar />
      <Box className="root">
        <Typography className="h1" variant="h1">40% Discount</Typography>
        <Typography className="subh" variant="body1">for all in every pawning of gold articles</Typography>
        <Typography className="text" variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod</Typography>
        <Button variant="contained" color="primary" className="button">
          DISCOVER MORE
        </Button>
      </Box>

      <Box className="fullScreen marginTop">
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

      <Box className="fullScreen marginTop about">
        <Grid container alignItems="center" justify="space-around" style={{ height: '100%' }}>
          <Grid item xs={6}>
            <Typography className={classes.sec3h} variant="h1" align="center">
              About Us
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" align="center" className='sec3p'>
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
