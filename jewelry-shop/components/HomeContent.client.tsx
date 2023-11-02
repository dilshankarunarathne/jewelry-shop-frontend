"use client"

import { useState } from 'react';
import './HomeContent.client.css'; 

const slides = [
  { 
    img: '/path/to/image1.jpg', 
    description: 'Description 1' 
  },
  { 
    img: '/path/to/image2.jpg', 
    description: 'Description 2' },
  { 
    img: '/path/to/image3.jpg', description: 'Description 3' }
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

  return (
    <div className="slider">
      <button onClick={goLeft}>
        <img src="/left-arrow.png" alt="Go Left" />
      </button>

      <div className="slide">
        <img src={slides[currentSlide].img} alt="Slide" />
        <h1>{slides[currentSlide].heading}</h1>
        <p>{slides[currentSlide].description}</p>
      </div>

      <button onClick={goRight}>
        <img src="/right-arrow.png" alt="Go Right" />
      </button>
    </div>
  );
}
