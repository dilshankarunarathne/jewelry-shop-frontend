import { Box } from '@material-ui/core';
import { Button, Link, Menu, MenuItem, Typography } from '@material-ui/core';
import Reactm from 'react';
import { Link as RouterLink } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <Box className='footer-main' >
        <Box className='left-container'>
          <RouterLink to="/">
            <Typography className='links home' variant='h6'
              style={{fontSize:'30px'}}
            >Sri Kantha Jewellers</Typography>  
          </RouterLink>
        </Box>
        <Box className='right-container'>
          <RouterLink className='routerlink' to="/about"><Typography className='links' variant="body1">ABOUT US</Typography></RouterLink>
          <RouterLink className='routerlink' to="/contact"><Typography className='links' variant="body1">CONTACT US</Typography></RouterLink>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
