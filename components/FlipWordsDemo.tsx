
import React from "react";
import { FlipWords } from "@/components/ui/flip-word";

export function FlipWordsDemo() {
  const words = ["Events", "Cattering", "Events", "Cattering"];

  return (
    <div className="relative   sm:text-sm  flex">
      <div className="text-6xl font-bold leading-snug text-white ">
        Create Unforgettable Moments with <br />
        <div className="">
        <span className=""> D`or </span>
        <FlipWords words={words}/>
        </div>
      </div>
    </div>
  );
}
