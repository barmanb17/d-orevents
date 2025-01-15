"use client";

import React, { useEffect, useRef, useState } from "react";


const Companies: React.FC = () => {
  const initialTranslateLTR = -48 * 4;

  const videoReels = [
    "/video5.mp4",
    "/video2.mp4",
    "/video0.mp4",
    "/video3.mp4",
    "/video6.mp4",
    "/video4.mp4",
    "/video1.mp4",
  ];

  const line1Ref = useRef<HTMLDivElement | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to handle screen size detection
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 1024);
  };

  useEffect(() => {
    // Set the initial screen size state
    handleResize();

    // Listen for screen size changes
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!line1Ref.current) return;

    const element = line1Ref.current;

    if (isSmallScreen) {
      // Apply horizontal scrolling for small screens
      element.style.transform = `translateX(0px)`;
    } else {
      // Apply scroll animation for larger screens
      const scrollHandler = () => {
        const translateX =
          (window.innerHeight - element.getBoundingClientRect().top) * 0.15;
        const totalTranslate = translateX + initialTranslateLTR;

        element.style.transform = `translateX(${totalTranslate}px)`;
      };

      // Set up scroll animation for large screens
      const intersectionObserver = new IntersectionObserver((entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
          window.addEventListener("scroll", scrollHandler);
        } else {
          window.removeEventListener("scroll", scrollHandler);
        }
      });

      intersectionObserver.observe(element);

      return () => {
        window.removeEventListener("scroll", scrollHandler);
        intersectionObserver.disconnect();
      };
    }
  }, [isSmallScreen]); // Re-run the effect when screen size changes

  return (
    <div className="overflow-hidden">
      {/* Arrow Banner */}
      <div className="text-center mb-16 mt-10">
        <p className="text-lg text-muted-foreground mb-4">
          Get a Glimpse of What We Offer
        </p>
        <div className="flex items-center justify-center lg:gap-3 ">
 
          <h2 className="text-4xl md:text-5xl font-medium">
            Video Showcase of Our Offerings
          </h2>
        </div>
      </div>

      {/* Companies lines group */}
      <div className="flex flex-col mt-8 p-4">
        {/* Horizontal Scrolling for sm: devices */}
        <div
          className={`flex gap-4 transition-transform ease-linear ${
            isSmallScreen
              ? "overflow-x-auto whitespace-nowrap -webkit-overflow-scrolling-touch scrollbar-hide"
              : "-translate-x-48"
          }`}
          ref={line1Ref}
        >
          {videoReels.map((videoSrc, index) => (
            <div
              key={index}
              className="flex flex-col min-w-[200px] min-h-[350px] items-center justify-center rounded-xl md:min-h-[400px] md:min-w-[300px] sm:inline-block"
            >
              <video
                className="w-full h-full object-cover rounded-xl max-w-full"
                autoPlay
                muted
                loop
                playsInline
                src={videoSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
