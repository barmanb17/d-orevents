"use client";

import React, { useRef, useEffect } from 'react';

const FeatureLine: React.FC = () => {
  const initialTranslateLTR = -48 * 4;
  const initialTranslateRTL = 36 * 4;

  const line1Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll handler function for the animation
    const scrollHandler = (element: HTMLDivElement | null, isLTR: boolean, speed: number) => {
      if (!element) return;
      
      const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
      let totalTranslate = 0;
      
      if (isLTR) {
        totalTranslate = translateX + initialTranslateLTR;
      } else {
        totalTranslate = -(translateX + initialTranslateRTL);
      }
      
      element.style.transform = `translateX(${totalTranslate}px)`;
      element.style.transition = 'transform 0.1s ease-out'; // Add smooth animation
    };

    // Set up the intersection observer
    const setupIntersectionObserver = (
      element: HTMLDivElement | null,
      isLTR: boolean,
      speed: number
    ) => {
      if (!element) return;

      const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
          window.addEventListener('scroll', () => scrollHandler(element, isLTR, speed));
        } else {
          window.removeEventListener('scroll', () => scrollHandler(element, isLTR, speed));
        }
      };

      const intersectionObserver = new IntersectionObserver(intersectionCallback);
      intersectionObserver.observe(element);

      // Cleanup on unmount or when the element goes out of view
      return () => {
        window.removeEventListener('scroll', () => scrollHandler(element, isLTR, speed));
        intersectionObserver.disconnect();
      };
    };

    if (line1Ref.current) {
      const cleanup = setupIntersectionObserver(line1Ref.current, true, 0.2); // Adjust speed here
      return cleanup; // Cleanup function
    }
  }, []); // Only run once when the component mounts

  return (
    <div className="px-6 py-12 max-w-8xl mx-auto lg:px-8">
      <div className="border-2 rounded-lg overflow-hidden flex justify-center p-4">
        <div className="flex gap-8 p-6" ref={line1Ref}>
          <h3 className="my-0 whitespace-nowrap mx-2 text-2xl font-semibold">Wedding Decor</h3>
          <span> ● </span>
          <h3 className="my-0 whitespace-nowrap mx-2 text-2xl font-semibold">Catering</h3>
          <span> ● </span>
          <h3 className="my-0 whitespace-nowrap mx-2 text-2xl font-semibold">Custom Venue</h3>
          <span> ● </span>
          <h3 className="my-0 whitespace-nowrap mx-2 text-2xl font-semibold">Private Party</h3>
          <span> ● </span>
          <h3 className="my-0 whitespace-nowrap mx-2 text-2xl font-semibold">Decoration</h3>
          <span> ● </span>
          <h3 className="my-0 whitespace-nowrap mx-2 text-2xl font-semibold">Consultation</h3>
          <span> ● </span>
          <h3 className="my-0 whitespace-nowrap mx-2 text-2xl font-semibold">Download Analytics</h3>
          <span> ● </span>
          <h3 className="my-0 whitespace-nowrap mx-2 text-2xl font-semibold">Catering</h3>
          <span> ● </span>
          <h3 className="my-0 whitespace-nowrap mx-2 text-2xl font-semibold">Custom Venue</h3>
          <span> ● </span>
          <h3 className="my-0 whitespace-nowrap mx-2 text-2xl font-semibold">Private Party</h3>
          <span> ● </span>
          <h3 className="my-0 whitespace-nowrap mx-2 text-2xl font-semibold">Decoration</h3>
          <span> ● </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureLine;
