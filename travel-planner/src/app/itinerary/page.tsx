"use client";
import React, { useState } from "react";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";
import Writedate from "@/components/shared/WrittenDate";
import {
	IoDocumentTextOutline,
	IoShareSocial,
	IoMapOutline,
} from "react-icons/io5";
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
		<div className="w-full min-h-screen px-4 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-center bg-blue-50">
			<section className="w-full lg:w-[55%] bg-slate-50 p-4">
				<div className="flex justify-between pb-2 text-lg md:text-xl lg:text-2xl tracking-wide">
					<p>Trip to Goa</p>
					<Writedate onChange={setDateRange} />
				</div>
				<div className="md:flex md:justify-between py-4">
					<p className="text-3xl md:text-4xl font-bold">Itinerary</p>
					<div className="flex flex-col gap-2 md:flex-row md:flex-wrap lg:gap-2 mt-4 lg:mt-0">
						<button className="bg-transparent px-4 py-1 border rounded-full flex justify-center items-center">
							Notes
							<IoDocumentTextOutline size={20} className="ml-2" />
						</button>
						<button className="bg-transparent px-4 py-1 border rounded-full flex justify-center items-center">
							Share
							<IoShareSocial size={20} className="ml-2" />
						</button>
						<button
							className="bg-black text-white px-4 py-1 rounded-full flex justify-center items-center"
							onClick={toggleMap}
						>
							{showMap ? "Show Shortlist" : "Show Map"}
							{showMap ? null : (
								<IoMapOutline size={20} className="ml-2" />
							)}
						</button>
					</div>
				</div>
				<Carousel days={days} />
			</section>

			<section
				className={`transition-transform duration-500 w-full lg:w-[45%] flex-grow ${
					showMap ? "hidden" : "flex"
				} flex-col`}
			>
				<div className="bg-gray-100 flex flex-col p-4 h-full">
					<div className="flex justify-between pb-2">
						<p className="text-3xl md:text-4xl font-bold">Shortlist</p>
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
							<p className="font-bold hover:text-orange-500">
								Tourist Attractions
							</p>
							<p className="font-bold hover:text-orange-500">Restaurants</p>
							<p className="font-bold hover:text-orange-500">Hotels</p>
						</div>
					</div>
					<div className="py-2 flex">shortlist items</div>
				</div>
			</section>

			<section
				className={`transition-transform duration-500 w-full lg:w-[45%] flex-grow ${
					showMap ? "flex" : "hidden"
				} flex-col`}
				id="map"
			>
				{/* Map content goes here */}
				hello there
			</section>
		</div>
	);
};

export default Itinerary;
