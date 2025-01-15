// FlipWordsDemo.js
import React from "react";
import { FlipWords } from "@/components/ui/flip-word";

export function FlipWordsDemo() {
  const words = ["Events", "Cattering", "Events", "Cattering"];

  return (
    <div className="relative   sm:text-sm  flex">
      <div className="text-6xl font-bold leading-snug text-white ">
        Create Unforgettable Moments with <br />
        <span> D`or </span>
        <FlipWords words={words} /> <br />
        
      </div>
    </div>
  );
}
