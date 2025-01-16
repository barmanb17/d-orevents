'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex lg:justify-center">
        <div className="absolute pt-2 w-full z-10 px-12 py-6 flex justify-between items-center bg-transparent text-white max-w-7xl">
          <div className="gap-12 flex flex-1 text-xl">
            <Link href="/">Home</Link>
            <Link href="/">Videos</Link>
            <Link href="/">Services</Link>
          </div>
          <div className="flex justify-center items-center w-28 h-28">
            <Image 
              src="/dor.png" 
              alt="Hero Image"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-1 gap-12 text-xl justify-end">
            <Link href="/">Packages</Link>
            <Link href="/">Testimonials</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden ">
        {/* Mobile Header */}
        <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-3  bg-transpartent shadow-2xl">
          <Link href="/" className="flex items-center gap-2 mx-3">
            <Image 
              src="/dor.png" 
              alt="ToDesktop Logo"
              width={70}
              height={70}
            />
          </Link>
          <button onClick={handleMenu} className="text-3xl mx-4 text-white">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-40   transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-28 p-6 bg-[#231709] ">
            <Link href="/" className="block py-2 text-lg text-white hover:text-gray-600" onClick={handleMenu}>Home</Link>
            <Link href="/" className="block py-2 text-lg text-white hover:text-gray-600" onClick={handleMenu}>Videos</Link>
            <Link href="/" className="block py-2 text-lg text-white hover:text-gray-600" onClick={handleMenu}>Services</Link>
            <Link href="/" className="block py-2 text-lg text-white hover:text-gray-600" onClick={handleMenu}>Packages</Link>
            <Link href="/" className="block py-2 text-lg text-white hover:text-gray-600" onClick={handleMenu}>Testimonials</Link>
            <Link href="/" className="block py-2 text-lg text-white hover:text-gray-600" onClick={handleMenu}>Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

