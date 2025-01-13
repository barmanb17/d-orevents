"use client";

import React, { useEffect, useRef } from 'react';

const Companies: React.FC = () => {
  const initialTranslateLTR = -48 * 4;
  const initialTranslateRTL = 36 * 4;

  // Define the video sources (array of URLs or video file paths)
  const videoReels = [
    "/video5.mp4",
    "/video2.mp4",  
    "/video1.mp4",  
    "/video3.mp4",  
    "/video6.mp4",  
    "/video4.mp4",
    "/video1.mp4"  
  ];

  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const line3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const setupIntersectionObserver = (element: HTMLDivElement | null, isLTR: boolean, speed: number) => {
      if (!element) return;

      const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
          window.addEventListener('scroll', scrollHandler);
        } else {
          window.removeEventListener('scroll', scrollHandler);
        }
      };

      const intersectionObserver = new IntersectionObserver(intersectionCallback);
      intersectionObserver.observe(element);

      const scrollHandler = () => {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if (isLTR) {
          totalTranslate = translateX + initialTranslateLTR;
        } else {
          totalTranslate = -(translateX + initialTranslateRTL);
        }

        // Update transform style safely
        element.style.transform = `translateX(${totalTranslate}px)`;
      };

      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    };

    // Setup the observers for the lines
    if (line1Ref.current) setupIntersectionObserver(line1Ref.current, true, 0.15);
    if (line2Ref.current) setupIntersectionObserver(line2Ref.current, false, 0.15);
    if (line3Ref.current) setupIntersectionObserver(line3Ref.current, true, 0.15);

    return () => {
      // Clean up any resources on unmount
    };
  }, []);

  return (
    <div>
      {/* Arrow Banner */}
      <div className="text-center mb-16 mt-10">
        <p className="text-lg text-muted-foreground mb-4">
        Get a Glimpse of What We Offer
        </p>
        <div className='flex items-center justify-center gap-3 '>
        <img className='translate-y-4' src="/asset 2.svg" alt="arrow" />
        <h2 className="text-4xl md:text-5xl font-medium">
        Video Showcase of Our Offerings
        </h2>
        <img className='translate-y-4 -scale-x-100' src="/asset 2.svg" alt="arrow" />
        </div>
      </div>

      {/* Companies lines group */}
      <div className="flex flex-col mt-8 overflow-hidden p-4">
        <div
          className="flex w-screen gap-4 -translate-x-48 transition-transform ease-linear"
          ref={line1Ref}
        >
          {videoReels.map((videoSrc, index) => (
            <div
              key={index}
              className="flex flex-col min-w-[200px] min-h-[350px] items-center justify-center rounded-xl md:min-h-[400px] md:min-w-[300px]"
            >
              <video
                className="w-full h-full object-cover rounded-xl"
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
