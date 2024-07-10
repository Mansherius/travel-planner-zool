"use client";
import React, { useState } from "react";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";
import Writedate from "@/components/shared/WrittenDate";
import { IoDocumentTextOutline, IoShareSocial, IoMapOutline } from "react-icons/io5";
import Carousel from "@/components/itinerary/Carousel";
import { generateDays } from "@/components/itinerary/dateUtils";
import { DateRange } from "@/components/itinerary/types";

const Itinerary: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    start: "2023-07-01",
    end: "2023-07-25",
  });
  const [showMap, setShowMap] = useState(false);
  const days = generateDays(dateRange);

  const toggleMap = () => {
    setShowMap((prev) => !prev);
  };

  return (
    <div className="w-100% min-h-screen md:mx-[50px] lg:mx-[150px] flex justify-center bg-blue-50">
      <section className="mx-auto w-[55%] bg-slate-50 p-4">
        <div className="flex justify-between pb-2 text-2xl tracking-wide">
          <p>Trip to Goa</p>
          <Writedate onChange={setDateRange} />
        </div>
        <div className="py-4">
			<div className="flex justify-between">
				<p className="text-4xl font-bold">Itinerary</p>
				<div className='flex gap-4'>
					<button className="bg-transparent px-4 py-1 border rounded-full ml-2 my-auto flex">Notes <IoDocumentTextOutline size={20} className='my-auto ml-2' /></button>
					<button className="bg-transparent px-4 py-1 border rounded-full ml-2 my-auto flex">Share <IoShareSocial size={20} className='my-auto ml-2'/> </button>
					<button className='bg-black text-white px-4 py-1 rounded-full ml-2 my-auto flex' onClick={toggleMap}> 
						{showMap ? "Show Shortlist" : "Show Map"}
						{showMap ? null : <IoMapOutline size={20} className="my-auto ml-2" />}
					</button>
				</div>
			</div>
        </div>
        <Carousel days={days} />
      </section>

      <section className={`transition-transform duration-500 w-[45%] ${showMap ? "hidden" : "block"}`}>
        <div className="bg-gray-100 flex flex-col p-4">
          <div className="flex justify-between pb-2">
            <p className="text-4xl font-bold">Shortlist</p>
            <TbSquareRoundedPlusFilled size={30} className="my-auto mr-2" />
          </div>

          <div className="py-4">
            <form className="flex items-center bg-white border rounded-full p-1 focus:outline-none">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Search for places"
                  className="outline-none w-full placeholder-grey text-sm pl-2"
                />
              </div>
              <button type="submit" className="text-slate-500">
                <FiSearch size={20} className="pr-1" />
              </button>
            </form>
          </div>

          <div className="py-4 bg-white rounded-full">
            <div className="flex justify-evenly px-4">
              <p className="font-bold hover:text-orange-500">All</p>
              <p className="font-bold hover:text-orange-500">Tourist Attractions</p>
              <p className="font-bold hover:text-orange-500">Restaurants</p>
              <p className="font-bold hover:text-orange-500">Hotels</p>
            </div>
          </div>
          <div className="py-2 flex">shortlist items</div>
        </div>
      </section>

      <section className={`transition-transform duration-500 w-[45%] ${showMap ? "block" : "hidden"}`} id="map">
        {/* Map content goes here */}
      </section>
    </div>
  );
};

export default Itinerary;
