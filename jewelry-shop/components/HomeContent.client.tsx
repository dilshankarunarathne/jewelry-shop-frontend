"use client"

import { useState } from 'react';
import './HomeContent.client.css'; 

const slides = [
  { 
    img: '/path/to/image1.jpg', 
    heading: "Enhance Your Beauty",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
  },
  { 
    img: '/path/to/image2.jpg', 
    heading: "Choose Your Style",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
  },
  { 
    img: '/path/to/image3.jpg', 
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

  return (
    <div className="slider">
      <button onClick={goLeft}>
        <img src="/left-arrow.png" alt="Go Left" />
      </button>

      <div className="slide">
        <img src={slides[currentSlide].img} alt="Slide" />
        <div>

        </div>
      </div>

      <button onClick={goRight}>
        <img src="/right-arrow.png" alt="Go Right" />
      </button>
    </div>
  );
}
