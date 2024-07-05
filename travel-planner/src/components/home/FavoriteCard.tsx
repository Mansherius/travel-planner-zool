
import React from 'react';
import Image from 'next/image';

interface FavoriteCardProps {
  image: string;
  name: string;
  state: string;
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ image, name, state }) => {
  return (
   <div className="relative rounded-lg overflow-hidden">
    <Image
      src={image}
      alt={name}
      width={300}
      height={200}
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
      <h3 className="text-white text-xl font-bold">{name}</h3>
      <p className="text-white text-sm">{state}</p>
    </div>
  </div>
  );
}

export default FavoriteCard;