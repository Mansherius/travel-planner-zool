// src/app/components/SearchBar.tsx
import React, { useState } from "react";
import styles from "./searchbar.module.css";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle search submission logic here
    console.log("Search query:", searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit} className={styles.searchbar}>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className={styles.dropdown}
      >
        <option value="Goa">Goa</option>
        <option value="Tourist Attractions">Tourist Attractions</option>
        <option value="Hotels">Hotels</option>
        <option value="Restaurants">Restaurants</option>
      </select>
      <input
        type="text"
        placeholder="Find attractions, activities, and more..."
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.input}
      />
      <button type="submit" className={styles.searchButton}>
      <svg
              className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_2019_13420"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2019_13420)">
                <path
                  d="M9.45 15.775C7.64733 15.775 6.12167 15.15 4.873 13.9C3.62433 12.65 3 11.1416 3 9.37498C3 7.60831 3.625 6.09998 4.875 4.84998C6.125 3.59998 7.6375 2.97498 9.4125 2.97498C11.1875 2.97498 12.6958 3.59998 13.9375 4.84998C15.1792 6.09998 15.8 7.60956 15.8 9.37873C15.8 10.0929 15.6833 10.7833 15.45 11.45C15.2167 12.1166 14.8667 12.7416 14.4 13.325L20.45 19.325C20.6 19.4676 20.675 19.6491 20.675 19.8695C20.675 20.0898 20.6 20.275 20.45 20.425C20.3 20.575 20.1148 20.65 19.8945 20.65C19.6742 20.65 19.4927 20.575 19.35 20.425L13.325 14.4C12.825 14.8333 12.242 15.1708 11.576 15.4125C10.91 15.6541 10.2013 15.775 9.45 15.775ZM9.425 14.275C10.7792 14.275 11.9303 13.7958 12.8783 12.8375C13.8261 11.8791 14.3 10.725 14.3 9.37498C14.3 8.02498 13.8261 6.87081 12.8783 5.91248C11.9303 4.95414 10.7792 4.47498 9.425 4.47498C8.057 4.47498 6.89417 4.95414 5.9365 5.91248C4.97883 6.87081 4.5 8.02498 4.5 9.37498C4.5 10.725 4.97883 11.8791 5.9365 12.8375C6.89417 13.7958 8.057 14.275 9.425 14.275Z"
                  fill="#1F1F1F"
                />
              </g>
            </svg>
      </button>
    </form>
  );
};

export default SearchBar;
