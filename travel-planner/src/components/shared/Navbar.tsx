"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function getMenuClasses() {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[60px]",
        "bg-black",
        "w-full",
        "p-4",
        "left-0",
        "gap-10",
        "flex-col",
      ];
    } else {
      menuClasses = ["hidden", "md:flex", "md:bg-white"];
    }

    return menuClasses.join(" ");
  }

  return (
    <nav className="bg-white-800 text-black p-4 sm:p-3 md:flex md:justify-between rounded-3xl md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className="font-bold text-custom-blue">
          <h1>Planorama</h1>
        </a>
        <div className={getMenuClasses()}>
          <Link
            href="/home"
            className={`mx-2 hover:text-blue-500 font-livvic ${
              pathname === "/home" ? "text-orange-500 font-extrabold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/my_trips"
            className={`mx-2 hover:text-blue-500  ${
              pathname === "/my_trips" ? "text-orange-500 font-extrabold" : ""
            }`}
          >
            My Trips
          </Link>

          <Link
            href="/about_us"
            className={`mx-2 hover:text-blue-500 font-livvic ${
              pathname === "/about_us" ? "text-orange-500" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            href="/search"
            className={`mx-2 hover:text-blue-500  ${
              pathname === "/search" ? "text-orange-500 font-extrabold" : ""
            }`}
          >
            <svg
              className="w-6 h-6"
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
          </Link>
          <Link
            href="/profile"
            className={`mx-2 hover:text-blue-500  ${
              pathname === "/profile" ? "text-orange-500 font-extrabold" : ""
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
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
        </div>
      </div>
    </nav>
  );
};
