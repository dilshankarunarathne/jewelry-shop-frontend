"use client"

import { useState, useEffect } from 'react';

import { Box, Button, IconButton, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './HomeContent.client.css'; 

const slides = [
  { 
    img: '/background-woman-4.png', 
    heading: "Enhance Your Beauty",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
  },
  { 
    img: '/background-woman-4.png',
    heading: "Choose Your Style",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
  },
  { 
    img: '/background-woman-4.png',
    heading: "Be Unique",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
  }
];

export default function HomeContent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goLeft = () => {
    setCurrentSlide((oldSlide) => {
      if (oldSlide === 0) {
        return slides.length - 1;
      } else {
        return oldSlide - 1;
      }
    });
  };

  const goRight = () => {
    setCurrentSlide((oldSlide) => (oldSlide + 1) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(goRight, 5000);
  
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  // useEffect(() => {
  //   document.body.style.backgroundImage = `url(${slides[currentSlide].img})`;
  //   document.body.style.backgroundPosition = 'right';
  //   document.body.style.backgroundRepeat = 'no-repeat';
  //   document.body.style.backgroundSize = 'contain';
  // }, [currentSlide]);

  return (
    <Box id='home' className='slide-except-image'>
      <Box position="relative" className="slider">
        <IconButton onClick={goLeft} className='buttonsnextprev' 
          style={{ 
            position: 'absolute', 
            left: 0, top: '50%', 
            transform: 'translateY(-50%)',
            // transform: 'translateX(50%)',
            backgroundColor: '#FFB714' 
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
    
        <Box className="slide">
          <Box className="slide-content">
            <Typography variant="h1" 
              style={{ color: 'white' }}>{slides[currentSlide].heading}
            </Typography>
            <Typography variant="body1" 
              style={{ color: 'white' }}>{slides[currentSlide].description}
            </Typography>
            <Button variant="contained">SEE COLLECTION</Button>
          </Box>
        </Box>

        <IconButton onClick={goRight} className='buttonsnextprev' 
          style={{ 
            position: 'absolute', 
            right: 0, top: '50%', 
            transform: 'translateY(-50%)',
            transform: 'translateX(-50%)', 
            backgroundColor: '#FFB714' 
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    

      <Box className="slide-image" >
        <img src={slides[currentSlide].img} alt="slide" 
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
      </Box>
      
      
  
      {/* <Box className="dots">
        {slides.map((slide, index) => (
          <span 
            key={index} 
            className={`dot ${currentSlide === index ? 'active' : ''}`} 
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Box> */}
    </Box>
  );
}
