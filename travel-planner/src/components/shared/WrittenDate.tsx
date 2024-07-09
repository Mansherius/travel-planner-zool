"use client";
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const Writedate = () => {
  const [dateRange, setDateRange] = useState<[Date | undefined, Date | undefined]>([new Date(2024, 6, 1), new Date(2024, 6, 4)]);
  const [startDate, endDate] = dateRange;

  return (
          <div className="flex items-center">
            <p>
              {startDate ? format(startDate, "d MMM") : ""} - {endDate ? format(endDate, "d MMM") : ""}
            </p>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update: [Date | null, Date | null]) => {
                const [startDate, endDate] = update;
                setDateRange([startDate || undefined, endDate || undefined]);
              }}
              customInput={<CustomInput />}
            />
          </div>
  );
};

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

const CustomInput = React.forwardRef<HTMLButtonElement, CustomInputProps>(
  ({ value, onClick }, ref) => (
    <button className="ml-2" onClick={onClick} ref={ref}>
      <FaRegCalendarAlt size={20} />
    </button>
  )
);

export default Writedate;