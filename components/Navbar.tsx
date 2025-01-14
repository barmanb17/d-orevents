import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center'>
    <div className="absolute pt-2 w-full z-10 px-12 py-6 flex justify-between items-center bg-transparent text-white max-w-7xl ">
      <div className="gap-12 flex flex-1 text-xl ">
        <a href="/">Home</a>
        <a href="/">Videos</a>
        <a href="/">Services</a>
      </div>
      <div className="flex justify-center items-center w-28 h-28">
        <img src="/dor.png" alt="Logo" />
      </div>
      <div className="flex flex-1 gap-12 text-xl  justify-end  ">
        <a href="/">Packages</a>
        <a href="/">Testimonials</a>
        <a href="/">Contact Us</a>
      </div>
    </div>
    </div>
  )
}

export default Navbar