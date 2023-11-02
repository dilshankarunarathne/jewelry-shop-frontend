import { useState } from 'react';

const slides = [
  { img: '/path/to/image1.jpg', description: 'Description 1' },
  { img: '/path/to/image2.jpg', description: 'Description 2' },
  { img: '/path/to/image3.jpg', description: 'Description 3' },
  // Add more slides as needed
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
    <div>
      <button onClick={goLeft}>Go Left</button>
      <div>
        <img src={slides[currentSlide].img} alt="Slide" />
        <p>{slides[currentSlide].description}</p>
      </div>
      <button onClick={goRight}>Go Right</button>
    </div>
  );
}
