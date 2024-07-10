import React, { useState } from "react";
import styles from "./buttons.module.css";
import { LuFilter } from "react-icons/lu";
import { FaRegMap } from "react-icons/fa";

interface ButtonsProps {
  onSortChange: (order: string) => void;
  cartCount: any;
}

const Buttons: React.FC<ButtonsProps> = ({ onSortChange, cartCount }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFilterClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSortOptionClick = (order: string) => {
    onSortChange(order);
    setShowDropdown(false);
  };

  return (
    <div className={styles.buttons}>
      <div className={styles.buttonsContainer}>
        <div className={styles.buttonsLeft}>
          <div className={styles.dropdownContainer}>
            <button className={styles.buttons1} onClick={handleFilterClick}>
              <LuFilter className={styles.icon} />
              Filters
            </button>
            {showDropdown && (
              <div className={styles.dropdown}>
                <div
                  className={styles.dropdownOption}
                  onClick={() => handleSortOptionClick("lowToHigh")}
                >
                  Low to High Price
                </div>
                <div
                  className={styles.dropdownOption}
                  onClick={() => handleSortOptionClick("highToLow")}
                >
                  High to Low Price
                </div>
              </div>
            )}
          </div>
          <button className={styles.buttons2}>
            <FaRegMap className={styles.icon} />
            Show map
          </button>
        </div>
        <div className={styles.buttonsRight}>
          <button className={styles.buttons3}>Manage Itinerary</button>
          <button className={styles.buttons4}>
            <span className={styles.badge}>{cartCount}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <mask
                id="mask0_2139_209"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2139_209)">
                <path
                  d="M7.33398 29.3333C6.80065 29.3333 6.33398 29.1333 5.93398 28.7333C5.53398 28.3333 5.33398 27.8667 5.33398 27.3333V4.66667C5.33398 4.13334 5.53398 3.66667 5.93398 3.26667C6.33398 2.86667 6.80065 2.66667 7.33398 2.66667H24.6673C25.2007 2.66667 25.6673 2.86667 26.0673 3.26667C26.4673 3.66667 26.6673 4.13334 26.6673 4.66667V27.3333C26.6673 27.8667 26.4673 28.3333 26.0673 28.7333C25.6673 29.1333 25.2007 29.3333 24.6673 29.3333H7.33398ZM7.33398 27.3333H24.6673V4.66667H22.6673V13.5333L19.434 11.6667L16.2007 13.5333V4.66667H7.33398V27.3333ZM9.46732 24.1H22.7007L18.434 18.4L14.934 22.9333L12.6007 20L9.46732 24.1Z"
                  fill="white"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
