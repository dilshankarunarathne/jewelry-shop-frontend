"use client"

import { Navbar } from '../../components/Navbar';
import { Button, Typography, Container, makeStyles, Box } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import "./pawn.css"

// const useStyles = makeStyles((theme) => ({
//   '@global': {
//     body: {
//       backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.76)), url("/rings-bg.png")',
//       backgroundRepeat: 'no-repeat',
//       backgroundSize: 'cover',
//     },
//   },
//   h1: {
//     color: 'white',
//     fontFamily: 'Gudea',
//     textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
//   },
//   root: {
//     marginTop: theme.spacing(4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   button: {
//     margin: theme.spacing(3, 0, 2),
//     background: '#FFE55E',
//     fontFamily: 'Inria Sans',
//     color: 'black',
//     // fontWeight: 'bold',
//     marginTop: '23px',
//     textAlign: 'center',
//     padding: '6px 12px', 
//     width: '200px',
//   },
//   subh: {
//     color: 'white',
//     fontFamily: 'Inter',
//     textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
//   },
//   text: {
//     color: 'white',
//     fontFamily: 'Gudea',
//     textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
//   },
// }));

export default function PawnPage() {
  // const classes = useStyles();

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

      <Box className="fullScreen marginTop about" style={{ 
        backgroundImage: `url('/pawn-about-bg.png'})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
      }}>
        {/* about content goes here */}
      </Box>
    </Router>
  );
}
