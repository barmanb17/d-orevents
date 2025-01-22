import React from "react";
import { FlipWords } from "@/components/ui/flip-word";

export function FlipWordsDemo() {
  const words = ["Events", "Cattering", "Events", "Cattering"];

  return (
    <div className="relative flex">
      <div className="lg:text-6xl text-[3.2rem] font-bold leading-snug text-white lg:leading-[1.4]">
        Create Unforgettable Moments with <br />
        <span className="lg:mt-8"> D`or </span>
        <FlipWords words={words} />
      </div>
    </div>
  );
}
