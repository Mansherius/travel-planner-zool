// components/FeedbackForm.tsx
'use client'
import React, { useState } from 'react';

const StarRating = ({ rating, setRating }: { rating: number; setRating: (rating: number) => void }) => (
  <div className="flex">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        onClick={() => setRating(star)}
        className={`text-2xl ${star <= rating ? 'text-black' : 'text-gray-300'}`}
      >
        ★
      </button>
    ))}
  </div>
);

const FeedbackForm: React.FC = () => {
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className='flex flex-col items-center justify-center'>
    <div className="w-full max-w-4xl bg-gray-100 p-8 rounded-lg mt-3 ">
      <h3 className="text-4xl  mb-6 text-center">We'd love your feedback!</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
           <div>
            <p className='font-bold ml-2'>Name</p>
          <input
            type="text"
            placeholder="Name (optional)"
            className="w-full p-2 border rounded"
          />
          </div> 
          <div>
            <p className='font-bold ml-2'>Email</p>
          <input
            type="email"
            placeholder="Email (optional)"
            className="w-full p-2 border rounded"
          />
          </div>
        </div>
        <div className="mb-4 ml-2">
        <p className='font-bold'>Rating</p>
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <p className='font-bold ml-2 '>Your Feedback</p>
        <p className='ml-2 italic font-light text-[#606060] text-base'>Share your comments, suggestions or concerns</p>
        <textarea
          placeholder=""
          className="w-full p-2 border rounded mb-4"
          rows={4}
        ></textarea>
        <div className='text-center'>
        <button
          type="submit"
          className="bg-orange-500 text-black py-2 px-6 rounded-3xl hover:bg-orange-600 transition duration-300 "
        >
            <span className='font-bold text-xl'>
          Submit
          </span>
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default FeedbackForm;