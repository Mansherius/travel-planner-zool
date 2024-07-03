import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const textColorClass = isDarkMode ? 'text-white' : 'text-black-100';
  const backgroundColorClass = isDarkMode ? 'bg-black-100' : 'bg-white';

  const handleNav = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='w-full h-20 z-[100]'>
      <div className='sticky flex justify-between items-center w-100 h-full px-2 pl-4 bg-transparent shadow-lg rounded-full m-4'>
        <Link href='/home'>
          <Image src='/logoLeo.png' alt='logo' width={50} height={50} />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <li className={`ml-10 uppercase text-lg tracking-widest hover:border-b-2 border-teal-500 ${textColorClass} hover:transform hover:translate-y-[-2px] transition-transform duration-200`}>
              <Link href='/home'>Home</Link>
            </li>
            <li className={`ml-10 uppercase text-lg tracking-widest hover:border-b-2 border-teal-500 ${textColorClass} hover:transform hover:translate-y-[-2px] transition-transform duration-200`}>
              <Link href='/about'>About</Link>
            </li>
            <li className={`ml-10 uppercase text-lg tracking-widest hover:border-b-2 border-teal-500 ${textColorClass} hover:transform hover:translate-y-[-2px] transition-transform duration-200`}>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className={`ml-10 uppercase text-lg tracking-widest hover:border-b-2 border-teal-500 ${textColorClass} hover:transform hover:translate-y-[-2px] transition-transform duration-200`}>
              <Link href='/projects'>Projects</Link>
            </li>
            <li className={`ml-10 mr-2 uppercase text-lg tracking-widest hover:border-b-2 border-teal-500 ${textColorClass} hover:transform hover:translate-y-[-2px] transition-transform duration-200`}>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
          <p> OPEN MENU</p>
          </div>
        </div>
      </div>

      <div className={showMenu ? 'fixed inset-0 bg-black/70 md:hidden' : ''}>
        <div className={showMenu ? `fixed left-0 top-0 w-[70%] sm:w-[65%] md:w-[50%] h-screen ${backgroundColorClass} p-10 ease-in-out duration-1000 transform translate-x-0` : `fixed left-0 top-0 w-[70%] sm:w-[65%] md:w-[50%] h-screen ${backgroundColorClass} p-10 ease-in-out duration-1000 transform -translate-x-full`}>
          <div className='flex w-full justify-between items-center'>
            <Image src='/logoLeo.png' alt='logo' width={50} height={50} />
            <div onClick={handleNav} className='rounded-full shadow-lg p-3 cursor-pointer'>
              <p> CLOSE MENU</p>
            </div>
          </div>
          <div className='border-b border-grey my-4'>
            <p className='md:w-full py-4'>You should be hiring me now</p>
          </div>
          <div>
            <ul className='text-sm uppercase'>
              <li className='my-4 hover:border-b border-teal-500 hover:transform hover:translate-y-[-2px] transition-transform duration-200'>
                <Link href='/home' onClick={() => setShowMenu(false)}>Home</Link>
              </li>
              <li className='my-4 hover:border-b border-teal-500 hover:transform hover:translate-y-[-2px] transition-transform duration-200'>
                <Link href='/about' onClick={() => setShowMenu(false)}>About</Link>
              </li>
              <li className='my-4 hover:border-b border-teal-500 hover:transform hover:translate-y-[-2px] transition-transform duration-200'>
                <Link href='/resume' onClick={() => setShowMenu(false)}>Resume</Link>
              </li>
              <li className='my-4 hover:border-b border-teal-500 hover:transform hover:translate-y-[-2px] transition-transform duration-200'>
                <Link href='/projects' onClick={() => setShowMenu(false)}>Projects</Link>
              </li>
              <li className='my-4 hover:border-b border-teal-500 hover:transform hover:translate-y-[-2px] transition-transform duration-200'>
                <Link href='/contact' onClick={() => setShowMenu(false)}>Contact</Link>
              </li>
            </ul>
            <p className='text-sm'>© 2021 Leo. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
