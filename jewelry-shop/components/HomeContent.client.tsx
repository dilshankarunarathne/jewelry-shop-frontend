"use client"

import { useState, useEffect } from 'react';
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
    <div className="slider" style={{ backgroundImage: `url(${slides[currentSlide].img})` }}>
      <button onClick={goLeft} className='buttonsnextprev'>
        <img src="/left-arrow.png" alt="Go Left" />
      </button>

      <div className="slide">
        <div className="slide-content">
          <h1>{slides[currentSlide].heading}</h1>
          <p>{slides[currentSlide].description}</p>
          <button>SEE COLLECTION</button>
        </div>
      </div>
      
      <button onClick={goRight} className='buttonsnextprev'>
        <img src="/right-arrow.png" alt="Go Right" />
      </button>
    </div>
  );
}
