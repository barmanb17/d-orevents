// FlipWordsDemo.js
import React from "react";
import { FlipWords } from "@/components/ui/flip-word";

export function FlipWordsDemo() {
  const words = ["Events", "Cattering", "Management", "Events"];

  return (
    <div className="relative sm:text-sm h-[40rem] flex justify-start items-center px-4">
      <div className="text-6xl font-bold items-start leading-snug text-white ">
        Create Unforgettable Moments <br />
        with <span> D`or </span>
        <FlipWords words={words} /> <br />
        <button className="bg-transparent no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 border-2 text-white inline-block hover:translate-x-2 transition-all">
  <span className="absolute inset-0 overflow-hidden">
    <span className="absolute inset-0  bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-sm bg-transparent py-3 px-8 ring-1 ring-white/10 text-lg font-bold ">
    <span>
      Contact Us
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
      </div>
    </div>
  );
}
