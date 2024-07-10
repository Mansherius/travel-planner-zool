"use client";

import React, { useState, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

interface WritedateProps {
  onChange: (dateRange: { start: string; end: string }) => void;
}

const Writedate: React.FC<WritedateProps> = ({ onChange }) => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    new Date(2024, 6, 1),
    new Date(2024, 6, 4),
  ]);
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    if (startDate && endDate) {
      onChange({
        start: format(startDate, "yyyy-MM-dd"),
        end: format(endDate, "yyyy-MM-dd"),
      });
    }
  }, [startDate, endDate, onChange]);

  const validStartDate = startDate || undefined;
  const validEndDate = endDate || undefined;

  return (
    <div className="flex items-center">
      <p>
        {startDate ? format(startDate, "d MMM") : ""} -{" "}
        {endDate ? format(endDate, "d MMM") : ""}
      </p>
      <DatePicker
        selectsRange={true}
        startDate={validStartDate}
        endDate={validEndDate}
        onChange={(update: [Date | null, Date | null]) => {
          setDateRange(update);
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
