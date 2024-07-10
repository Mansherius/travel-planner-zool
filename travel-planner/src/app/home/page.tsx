import Image from "next/image";
import FavoriteCard from "@/components/home/FavoriteCard";
import FavoriteCarousel from "@/components/home/FavoriteCarousel";
import TravelerReview from "@/components/home/TravelerReview";
import FeedbackForm from "@/components/home/FeedbackForm";

import React from 'react';
import Link from 'next/link';

export default function Home() {
 
  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
  
  const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
  const favorites = [
    { image: "/images/home/mysuru.jpg", name: "Mysuru", state: "Karnataka" },
    { image: "/images/home/ladakh.jpg", name: "Leh-Ladakh", state: "Ladakh" },
    { image: "/images/home/jaipur.jpg", name: "Jaipur", state: "Rajasthan" },
    { image: "/images/home/ooty.jpg", name: "Ooty", state: "Tamil Nadu" },
    { image: "/images/home/srinagar.jpg", name: "Srinagar", state: "Jammu & Kashmir" },
    { image: "/images/home/agra.jpg", name: "Agra", state: "Uttar Pradesh" },
    { image: "/images/home/goa.jpg", name: "Goa", state: "India" },
    { image: "/images/home/manali.jpg", name: "Manali", state: "Himachal Pradesh" },
    
    
    // Add more favorites as needed
  ];
  const travelerReviews = [
    {
      name: "Anna S.",
      image: "/images/home/anna.jpg",
      rating: 5,
      review:
        "Planorama made planning my trip to Goa a breeze! The curated itineraries were spot-on, and I loved being able to customize my trip effortlessly.",
      title: "Travel Blogger",
    },
    {
      name: "David Wilson",
      image: "/images/home/david.jpg",
      rating: 5,
      review:
        "Planning a family vacation can often be a daunting task, but Planorama transformed it into an enjoyable experience. The customized itinerary they created using the site, made it easy to plan our days efficiently. The detailed descriptions of each attraction, along with user reviews, helped us make informed decisions for our family.",
      title: "Family Vacation Planner",
    },
    {
      name: "Emily J.",
      image: "/images/home/emily.jpg",
      rating: 5,
      review:
        "As a photographer, I needed to find the best spots quickly. Planorama helped me shortlist all the must-visit locations in no time!",
      title: "Photographer",
    },
    {
      name: "Anna S.",
      image: "/images/home/anna.jpg",
      rating: 5,
      review:
        "As a photographer, I needed to find the best spots quickly. Planorama helped me shortlist all the must-visit locations in no time!",
      title: "Travel Blogger",
    },
    {
      name: "Emily J.",
      image: "/images/home/emily.jpg",
      rating: 4,
      review:
        "Planorama made planning my trip to Goa a breeze! The curated itineraries were spot-on, and I loved being able to customize my trip effortlessly.",
      title: "Photographer",
    },
    {
      name: "David Wilson",
      image: "/images/home/david.jpg",
      rating: 5,
      review:
        "Planning a family vacation can often be a daunting task, but Planorama transformed it into an enjoyable experience.The detailed descriptions of each attraction, along with user reviews, helped us make informed decisions for our family.",
      title: "Family Vacation Planner",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation bar (keep your existing nav code here) */}

      {/* Hero section */}
      <section className="relative h-[600px]">
        {/* Background image */}
        <Image
          src="/images/home/india-gate.png"
          alt="India Gate"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />

        {/* Content overlay */}
        <div className="absolute top-28  inset-0 flex flex-col items-center justify-center p-8">
          <h2 className=" text-white text-7xl font-bold mb-8 drop-shadow-lg">
            Plan Your Next Trip!
          </h2>

          {/* Search form */}
          <form className="absolute top-96 w-full max-w-4xl bg-white rounded-3xl shadow-lg p-6">
      <div className="flex flex-col space-y-4">
        <div className="gap-x-8">
          <div>
            <label htmlFor="destination" className="text-sm text-gray-600 mb-1 block">
              I'm going to
            </label>
            <div className="relative">
              <input
                type="text"
                id="destination"
                placeholder="Enter destination"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </span>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <div className="flex-1">
              <label htmlFor="start-date" className="text-sm text-gray-600 mb-1 block">
                From
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="start-date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="end-date" className="text-sm text-gray-600 mb-1 block">
                To
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="end-date"
                  className="w-full px-3 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <Link href="/plan">
          <button
            type="submit"
            className="bg-black text-white py-4 px-8 rounded-full hover:bg-gray-800 transition duration-300"
          >
            Start planning
          </button>
          </Link>
        </div>
      </div>
    </form>
        </div>
      </section>
      <section className="pt-56 pb-12 bg-white mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-8 text-center">
            Frequent Favorites
          </h2>
          <FavoriteCarousel favorites={favorites} />
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Hear from Our Travelers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelerReviews.map((review, index) => (
              <TravelerReview key={index} {...review} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeedbackForm />
        </div>
      </section>
   
    </main>
  );
}
