// src/app/components/SearchBar.tsx
import React, { useEffect, useState } from "react";
import styles from "./searchbar.module.css";
import { IoMdSearch } from "react-icons/io";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    return () => {
      setSearchQuery("");
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit} className={styles.searchbar}>
       <div className={styles.dropdown}>
        {/* Dropdown content */}
        <select>
          <option>Goa</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
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