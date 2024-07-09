"use client";
import React, { useState } from "react";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Writedate from "@/components/shared/WrittenDate";

const Itinerary = () => {
  const [dateRange, setDateRange] = useState<[Date | undefined, Date | undefined]>([new Date(2024, 6, 1), new Date(2024, 6, 4)]);
  const [startDate, endDate] = dateRange;

  return (
        <div className="w-100% min-h-screen md:mx-[50px] lg:mx-[150px] flex justify-center bg-blue-50">
            <section className="mx-auto w-[55%] bg-slate-50">
                <div className="flex justify-between p-4 text-2xl tracking-wide ">
                <p>Trip to Goa</p>
                <Writedate />
                </div>
            </section>

			<section className="mx-auto w-[45%] bg-gray-100 flex flex-col p-4">
				<div className="flex justify-between pb-2">
					<p className="text-4xl font-bold">Shortlist</p>
					<TbSquareRoundedPlusFilled size={30} className="my-auto mr-2" />
				</div>
				<div className="py-4">
					<form className="flex items-center bg-white border rounded-full p-1 focus: outline-none">
						<div className="w-full">
							<input
								type="text"
								placeholder="Search for places"
								className="outline-none w-full placeholder-grey text-sm pl-2"
							/>
						</div>
						<button
							type="submit"
							className="text-slate-500"
						>
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
				<div className="py-2 flex ">shortlist items</div>
			</section>
		</div>
	);
};

export default Itinerary;
