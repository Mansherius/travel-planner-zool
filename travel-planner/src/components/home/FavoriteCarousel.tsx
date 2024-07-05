'use client'
import React, { useState, useEffect } from 'react';
import FavoriteCard from './FavoriteCard';

interface Favorite {
  image: string;
  name: string;
  state: string;
}

interface FavoriteCarouselProps {
  favorites: Favorite[];
}

const FavoriteCarousel: React.FC<FavoriteCarouselProps> = ({ favorites }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? favorites.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % favorites.length
      );
    }
  };

  // Function to get the correct index for each card position
  const getCardIndex = (position: number) => {
    return (currentIndex + position + favorites.length) % favorites.length;
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
      >
        &lt;
      </button>
      <div className="grid grid-cols-4 gap-6 overflow-hidden">
        {[0, 1, 2, 3].map((position) => {
          const index = getCardIndex(position);
          const favorite = favorites[index];
          return (
            <FavoriteCard
              key={index}
              image={favorite.image}
              name={favorite.name}
              state={favorite.state}
            />
          );
        })}
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default FavoriteCarousel;