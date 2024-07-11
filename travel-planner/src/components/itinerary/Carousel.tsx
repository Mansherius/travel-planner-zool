import React, { useState, useEffect } from 'react';
import DayCard from './DayCard';
import { DayInfo } from './types';

interface CarouselProps {
  days: DayInfo[];
}

const Carousel: React.FC<CarouselProps> = ({ days }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselNumber, setCarouselNumber] = useState(4);

  useEffect(() => {
    const updateClasses = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setCarouselNumber(1);
      } else if (screenWidth >= 640 && screenWidth < 1110) {
        setCarouselNumber(2);
      } else if (screenWidth < 1110 && screenWidth < 1350) {
        setCarouselNumber(3);
      } else {
        setCarouselNumber(4);
      }
    };

    // Initial class setting
    updateClasses();

    // Add event listener
    window.addEventListener("resize", updateClasses);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", updateClasses);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [days]);

  const visibleDays = days.slice(currentIndex, currentIndex + carouselNumber);

  const handleNext = () => {
    if (currentIndex + carouselNumber < days.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex" style={{ flexWrap: 'nowrap' }}>
        {visibleDays.map((day, index) => (
          <div key={index} className="flex-grow-0 flex-shrink-0 px-2" style={{ flexBasis: `calc(100% / ${carouselNumber})` }}>
            <DayCard {...day} />
          </div>
        ))}
      </div>
      {currentIndex > 0 && (
        <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          &lt;
        </button>
      )}
      {currentIndex + carouselNumber < days.length && (
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          &gt;
        </button>
      )}
    </div>
  );
};

export default Carousel;