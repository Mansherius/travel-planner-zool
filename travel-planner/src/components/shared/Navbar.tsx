//Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
  }, [pathname]);

  function getMenuClasses() {
    let menuClasses = [
      "fixed",
      "top-0",
      "left-0",
      "h-full",
      "w-64",
      "bg-white",
      "z-50",
      "flex",
      "flex-col",
      "p-4",
      "gap-10",
      "transition-transform",
      "duration-300",
      "ease-in-out",
      "transform",
      "md:static",
      "md:h-auto",
      "md:w-auto",
      "md:flex-row",
      "md:items-center",
    ];

    if (isOpen) {
      menuClasses.push("translate-x-0");
    } else {
      menuClasses.push("-translate-x-full", "md:translate-x-0");
    }

    return menuClasses.join(" ");
  }

  const linkClasses = "block py-1 hover:text-orange-500 md:mx-2";

  return (
    <nav className="bg-white text-black p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/home">
          <h1 className="text-custom-blue"> Planorama</h1>
        </Link>

        <div className={getMenuClasses()}>
          <Link
            href="/home"
            className={`${linkClasses} ${
              pathname === "/home" ? "text-orange-500 font-extrabold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/itinerary"
            className={`${linkClasses}  ${
              pathname === "/itinerary" ? "text-orange-500 font-extrabold" : ""
            }`}
          >
          My Trips
          </Link>
          <Link
            href="/about_us"
            className={`${linkClasses} ${
              pathname === "/about_us" ? "text-orange-500 font-extrabold" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            href="/search"
            className={`${linkClasses} ${
              pathname === "/search" ? "text-orange-500 font-extrabold" : ""
            }`}
          >
            <svg
              className="w-6 h-6 inline md:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="md:hidden ml-2">Search</span>
          </Link>
          <Link
            href="/profile"
            className={`${linkClasses} ${
              pathname === "/profile" ? "text-orange-500 font-extrabold" : ""
            }`}
          >
            <svg
              className="w-6 h-6 inline md:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 32 33"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_2252_57542"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="33"
              >
                <rect y="0.5" width="32" height="32" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2252_57542)">
                <path
                  d="M11.9993 19.5C11.5327 19.5 11.1382 19.3389 10.816 19.0167C10.4938 18.6945 10.3327 18.3 10.3327 17.8334C10.3327 17.3667 10.4938 16.9722 10.816 16.65C11.1382 16.3278 11.5327 16.1667 11.9993 16.1667C12.466 16.1667 12.8605 16.3278 13.1827 16.65C13.5049 16.9722 13.666 17.3667 13.666 17.8334C13.666 18.3 13.5049 18.6945 13.1827 19.0167C12.8605 19.3389 12.466 19.5 11.9993 19.5ZM19.9993 19.5C19.5327 19.5 19.1382 19.3389 18.816 19.0167C18.4938 18.6945 18.3327 18.3 18.3327 17.8334C18.3327 17.3667 18.4938 16.9722 18.816 16.65C19.1382 16.3278 19.5327 16.1667 19.9993 16.1667C20.466 16.1667 20.8605 16.3278 21.1827 16.65C21.5049 16.9722 21.666 17.3667 21.666 17.8334C21.666 18.3 21.5049 18.6945 21.1827 19.0167C20.8605 19.3389 20.466 19.5 19.9993 19.5ZM15.9993 27.1667C18.9771 27.1667 21.4993 26.1334 23.566 24.0667C25.6327 22 26.666 19.4778 26.666 16.5C26.666 15.9667 26.6327 15.45 26.566 14.95C26.4993 14.45 26.3771 13.9667 26.1993 13.5C25.7327 13.6111 25.266 13.6945 24.7993 13.75C24.3327 13.8056 23.8438 13.8334 23.3327 13.8334C21.3105 13.8334 19.3993 13.4 17.5993 12.5334C15.7993 11.6667 14.266 10.4556 12.9993 8.90002C12.2882 10.6334 11.2716 12.1389 9.94935 13.4167C8.62713 14.6945 7.08824 15.6556 5.33268 16.3V16.5C5.33268 19.4778 6.36602 22 8.43268 24.0667C10.4993 26.1334 13.0216 27.1667 15.9993 27.1667ZM15.9993 29.8334C14.1549 29.8334 12.4216 29.4834 10.7993 28.7834C9.17713 28.0834 7.76602 27.1334 6.56602 25.9334C5.36602 24.7334 4.41602 23.3222 3.71602 21.7C3.01602 20.0778 2.66602 18.3445 2.66602 16.5C2.66602 14.6556 3.01602 12.9222 3.71602 11.3C4.41602 9.6778 5.36602 8.26669 6.56602 7.06669C7.76602 5.86669 9.17713 4.91669 10.7993 4.21669C12.4216 3.51669 14.1549 3.16669 15.9993 3.16669C17.8438 3.16669 19.5771 3.51669 21.1993 4.21669C22.8216 4.91669 24.2327 5.86669 25.4327 7.06669C26.6327 8.26669 27.5827 9.6778 28.2827 11.3C28.9827 12.9222 29.3327 14.6556 29.3327 16.5C29.3327 18.3445 28.9827 20.0778 28.2827 21.7C27.5827 23.3222 26.6327 24.7334 25.4327 25.9334C24.2327 27.1334 22.8216 28.0834 21.1993 28.7834C19.5771 29.4834 17.8438 29.8334 15.9993 29.8334ZM14.1993 6.00002C15.1327 7.55558 16.3993 8.80558 17.9993 9.75002C19.5993 10.6945 21.3771 11.1667 23.3327 11.1667C23.6438 11.1667 23.9438 11.15 24.2327 11.1167C24.5216 11.0834 24.8216 11.0445 25.1327 11C24.1993 9.44446 22.9327 8.19446 21.3327 7.25002C19.7327 6.30558 17.9549 5.83335 15.9993 5.83335C15.6882 5.83335 15.3882 5.85002 15.0993 5.88335C14.8105 5.91669 14.5105 5.95558 14.1993 6.00002ZM5.89935 13.1334C7.03268 12.4889 8.02157 11.6556 8.86602 10.6334C9.71046 9.61113 10.3438 8.46669 10.766 7.20002C9.63268 7.84446 8.64379 8.6778 7.79935 9.70002C6.9549 10.7222 6.32157 11.8667 5.89935 13.1334Z"
                  fill="black"
                />
              </g>
            </svg>

            <span className="md:hidden ml-2">Profile</span>
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};
