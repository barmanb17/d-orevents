"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function OnlinePackage() {
  
  type Category = "Haldi" | "Reception" | "Wedding" | "Mehendi";

  const [activeCategory, setActiveCategory] = useState<Category>("Haldi");

  
  const categories: Record<Category, { src: string; title: string }[]> = {
    Haldi: [
      { src: "/p3.png", title: "Haldi Catalog 1" },
      { src: "/p4.png", title: "Haldi Catalog 2" },
      { src: "/p5.png", title: "Haldi Catalog 3" },
    ],
    Reception: [
      { src: "/", title: "Reception Catalog 1" },
      { src: "/", title: "Reception Catalog 2" },
      { src: "/", title: "Reception Catalog 3" },
    ],
    Wedding: [
      { src: "/", title: "Wedding Catalog 1" },
      { src: "/", title: "Wedding Catalog 2" },
      { src: "/", title: "Wedding Catalog 3" },
    ],
    Mehendi: [
      { src: "/", title: "Mehendi Catalog 1" },
      { src: "/", title: "Mehendi Catalog 2" },
      { src: "/", title: "Mehendi Catalog 3" },
    ],
  };

  const mainImages: Record<Category, string> = {
    Haldi: "/image.png",
    Reception: "/",
    Wedding: "/", 
    Mehendi: "/", 
  };

  // Background color mapping
  const bgColorMap: Record<Category, string> = {
    Haldi: "bg-yellow-100",
    Reception: "bg-violet-100",
    Wedding: "bg-red-100",
    Mehendi: "bg-green-100",
  };

  return (
    <section className="py-20 mx-10 lg:mx-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-purple-600">Online Package</h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium italic text-purple-600 font-serif">
                Get a customized package
              </h2>
              <p className="text-3xl md:text-4xl font-medium text-gray-800 leading-tight">
                Customized to your design preferences and budget.
              </p>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
              Get Started
            </Button>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div
              className={`rounded-3xl p-6 shadow-xl ${bgColorMap[activeCategory]} bg-gradient-to-tl from-white`}
            >
              <div className="space-y-4">
                {/* Tabs */}
                <div className="flex gap-4 border-b pb-4">
                  {Object.keys(categories).map((category) => (
                    <span
                      key={category}
                      className={`cursor-pointer text-lg font-medium ${
                        activeCategory === category
                          ? "text-purple-600 border-b-2 border-purple-600"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveCategory(category as Category)}
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Main Image */}
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src={mainImages[activeCategory]}
                    alt={`${activeCategory} Package`}
                    className="w-full h-64 object-cover"
                    width={500}
                    height={300}
                  />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-4">
                  {categories[activeCategory].map((item, index) => (
                    <Card className="p-2" key={index}>
                      <Image
                        src={item.src}
                        alt={item.title}
                        className="w-full aspect-square object-cover rounded"
                        width={200}
                        height={200}
                      />
                      <p className="text-sm text-center mt-2">{item.title}</p>
                    </Card>
                  ))}
                </div>

                {/* Enquire Now */}
                <div className="bg-purple-600 text-white rounded-xl p-4 flex justify-center items-center font-bold">
                  <span>Enquire Now</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-l from-purple-200 to-purple-100 blur-3xl transform translate-x-8 translate-y-8 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
