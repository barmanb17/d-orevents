import React from 'react';
import Link from 'next/link';  // Import Link from next/link
import Image from 'next/image'; // Import Image from next/image

const Navbar = () => {
  return (
    <div className='flex justify-center'>
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
  );
};

export default Navbar;
