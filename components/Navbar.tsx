import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center'>
        {/* <div className="w-full py-1 px-4 text-left md:text-center font-medium font-sans  text-sm bg-gradient-to-r text-white from-gray-800 to-purple-500 overflow-hidden">
     <p className="animate-slideInFromRight ease-linear repeat-infinite whitespace-nowrap lg:animate-none"> Planning an event should be exciting, not stressful. At D'or, we take care of every detail, offering stunning décor, gourmet catering, and seamless management. Whatever your event, we’re here to ensure it’s executed flawlessly from start to finish.</p>
    </div> */}
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