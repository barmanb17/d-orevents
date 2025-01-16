"use client";
import React, { useState } from 'react';
import Link from 'next/link';  
import Image from 'next/image'; 

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
      setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='lg:justify-center lg:flex hidden'>
      {/* Desktop Navbar */}
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

      {/* Mobile Navbar */}
      <div className={`lg:hidden fixed inset-0 ${isMenuOpen ? 'block' : 'hidden'} p-6 z-50`}>
        <div className="flex justify-between items-center">
          <a href="#" id='brand' className='flex gap-2 items-center'>
            <div className="flex justify-center items-center w-28 h-28">
              <Image 
                src="/dor.png" 
                alt="ToDesktop Logo"
                width={150}
                height={150}
              />
            </div>
            <span className='text-lg font-medium font-display'>ToDesktop</span>
          </a>

          <button className='p-2' onClick={handleMenu}>
            <span className="text-2xl">✖</span> 
          </button>
        </div>

        <div className='mt-6'>
          <Link href="/" className="block mb-4">Home</Link>
          <Link href="/" className="block mb-4">Videos</Link>
          <Link href="/" className="block mb-4">Services</Link>
          <Link href="/" className="block mb-4">Packages</Link>
          <Link href="/" className="block mb-4">Testimonials</Link>
          <Link href="/" className="block mb-4">Contact Us</Link>
        </div>
      </div>

      {/* Mobile Hamburger Menu Icon */}
      <div className="lg:hidden fixed top-5 right-5 z-10">
        <button onClick={handleMenu} className="text-3xl text-white">
          &#9776; {/* Hamburger icon */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
