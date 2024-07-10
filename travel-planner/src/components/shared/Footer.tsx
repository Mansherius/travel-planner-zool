"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-20">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <Link href="/" className="font-bold text-custom-blue text-2xl">
          <h1>PLANORAMA</h1>
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/my_trips" className="hover:text-blue-500">
            My Trips
          </Link>
          <Link href="/about_us" className="hover:text-blue-500">
            About Us
          </Link>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="https://twitter.com" target="_blank">
            <img
              src="/images/shared/temp-x.png"
              alt="Twitter"
              className="w-6 h-6"
            />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <img
              src="/images/shared/temp-instagram.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </Link>
          <Link href="https://facebook.com" target="_blank">
            <img
              src="/images/shared/temp-facebook.png"
              alt="Facebook"
              className="w-6 h-6"
            />
          </Link>
        </div>
        <div className="text-xs italic font-sans font-light">
          © 2024 Planorama. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;