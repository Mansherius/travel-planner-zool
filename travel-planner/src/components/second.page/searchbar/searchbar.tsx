// src/app/components/SearchBar.tsx
import React, { useEffect, useState } from "react";
import styles from "./searchbar.module.css";
import { IoMdSearch } from "react-icons/io";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery("");
  };

  return (
    <form onSubmit={handleSearchSubmit} className={styles.searchbar}>
       <div className={styles.dropdown}>
        {/* Dropdown content */}
        <label className="relative px-4 py-2 px-sm-2 py-sm-1 after:content-[''] after:absolute after:right-0  after:top-0  after:h-full pl-2 after:w-px after:bg-gray-500 rounded-full mr-2">Goa 
        </label>
      </div>
      <input
        type="text"
        placeholder="Find attractions, activities, and more..."
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.input}
      />
      <button type="submit" className={styles.searchButton}>
        <IoMdSearch className={styles.searchIcon} />
      </button>
    </form>
  );
};

export default SearchBar;