// Carousel.tsx
import React, { useState, useEffect } from 'react';
import DayCard from './DayCard';
import { DayInfo } from './types';

interface CarouselProps {
  days: DayInfo[];
}

const Carousel: React.FC<CarouselProps> = ({ days }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [days]);

  const visibleDays = days.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    if (currentIndex + 4 < days.length) {
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
      <div className="flex">
        {visibleDays.map((day, index) => (
          <div key={index} className="w-1/4 flex-shrink-0 px-2">
            <DayCard {...day} />
          </div>
        ))}
      </div>
      {currentIndex > 0 && (
        <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          &lt;
        </button>
      )}
      {currentIndex + 4 < days.length && (
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          &gt;
        </button>
      )}
    </div>
  );
};

export default Carousel;