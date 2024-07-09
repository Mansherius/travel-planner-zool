import React from "react";
import styles from "./buttons.module.css";

const Buttons: React.FC = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.buttonsContainer}>
        <div className={styles.buttonsLeft}>
          <button className={styles.buttons1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={styles.icon}
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
            </svg>
            Filters
          </button>
          <button className={styles.buttons2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={styles.icon}
            >
              <mask
                id="mask0_2139_202"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2139_202)">
                <path
                  d="M14.35 20.775L9 18.9L4.35 20.7C4.18333 20.7667 4.02083 20.7875 3.8625 20.7625C3.70417 20.7375 3.55833 20.6833 3.425 20.6C3.29167 20.5167 3.1875 20.4042 3.1125 20.2625C3.0375 20.1208 3 19.9583 3 19.775V5.75C3 5.53333 3.0625 5.34167 3.1875 5.175C3.3125 5.00833 3.48333 4.88333 3.7 4.8L8.35 3.225C8.45 3.19167 8.55417 3.16667 8.6625 3.15C8.77083 3.13333 8.88333 3.125 9 3.125C9.11667 3.125 9.22917 3.13333 9.3375 3.15C9.44583 3.16667 9.55 3.19167 9.65 3.225L15 5.1L19.65 3.3C19.8167 3.23333 19.9792 3.2125 20.1375 3.2375C20.2958 3.2625 20.4417 3.31667 20.575 3.4C20.7083 3.48333 20.8125 3.59583 20.8875 3.7375C20.9625 3.87917 21 4.04167 21 4.225V18.25C21 18.4667 20.9375 18.6583 20.8125 18.825C20.6875 18.9917 20.5167 19.1167 20.3 19.2L15.65 20.775C15.55 20.8083 15.4458 20.8333 15.3375 20.85C15.2292 20.8667 15.1167 20.875 15 20.875C14.8833 20.875 14.7708 20.8667 14.6625 20.85C14.5542 20.8333 14.45 20.8083 14.35 20.775ZM14 18.55V6.85L10 5.45V17.15L14 18.55ZM16 18.55L19 17.55V5.7L16 6.85V18.55ZM5 18.3L8 17.15V5.45L5 6.45V18.3Z"
                  fill="black"
                />
              </g>
            </svg>
            Show map
          </button>
        </div>
        <div className={styles.buttonsRight}>
          <button className={styles.buttons3}>
            Manage Itinerary
          </button>
          <button className={styles.buttons4}><svg
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
            </svg></button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
