"use client"

import { useState, useEffect } from 'react';

import { Box, Button, IconButton, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './HomeContent.client.css'; 

const slides = [
  { 
    img: '/background-women-1.png', 
    heading: "Enhance Your Beauty",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
  },
  { 
    img: '/background-women-2.png',
    heading: "Choose Your Style",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
  },
  { 
    img: '/background-women-3.png',
    heading: "Be Unique",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
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

  return (
    <Box position="relative" className="slider" style={{ backgroundImage: `url(${slides[currentSlide].img})` }}>
    <IconButton onClick={goLeft} className='buttonsnextprev' style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
      <ArrowBackIosIcon />
    </IconButton>

    <Box className="slide">
      <Box className="slide-content">
      <Typography variant="h1" style={{ color: 'black' }}>{slides[currentSlide].heading}</Typography>
      <Typography variant="body1" style={{ color: 'black' }}>{slides[currentSlide].description}</Typography>
      <Button variant="contained">SEE COLLECTION</Button>
      </Box>
    </Box>
    
    <IconButton onClick={goRight} className='buttonsnextprev' style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
      <ArrowForwardIosIcon />
    </IconButton>

    <Box className="dots">
      {slides.map((slide, index) => (
        <span 
          key={index} 
          className={`dot ${currentSlide === index ? 'active' : ''}`} 
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </Box>
  </Box>
  );
}
