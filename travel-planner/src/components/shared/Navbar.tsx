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

  const linkClasses = "block py-1 hover:text-blue-500 md:mx-2";

  return (
    <nav className="bg-white text-black p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/home" >
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
            className={`${linkClasses} ${
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
            <span className="md:hidden ml-2">Profile</span>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50"
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