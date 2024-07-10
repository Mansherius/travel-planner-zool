//DayCard.tsx
import React from 'react';
import { DayInfo } from './types';

const DayCard: React.FC<DayInfo> = ({ day, date, weather }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-bold">{day}</h3>
      <p>{date}</p>
      <p>{weather}</p>
      <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Add place to your list and drag here</p>
      </div>
    </div>
  );
};

export default DayCard;