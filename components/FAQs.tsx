"use client";
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What services does D’or provide?", 
        answer: "D’or crafts personalized wedding designs, manages seamless planning, and creates stunning decor to bring your vision to life." },
    { question: "How much does D’or’s Wedding Decor start at?", 
        answer: "Our pricing varies based on your requirements and customization. Reach out to us for a personalized quote!" },
    { question: "Why should I hire a D’or Wedding Designer?", 
        answer: "A D’or Wedding Designer transforms your ideas into reality, ensuring every detail is expertly handled for your special day." },
    { question: "Does D’or handle execution or just planning and design?", 
        answer: "We take care of everything—from ideation to flawless execution—so you can enjoy your big day stress-free." },
    { question: "Can D’or help with Destination Weddings?", 
        answer: "Absolutely! D’or curates unforgettable destination wedding experiences tailored to your dream location." },
    { question: "Does D’or do decor for events other than weddings?", 
        answer: "Yes! From corporate events to private parties, D’or creates breathtaking decor for all occasions." },
    { question: "I love a design from your Instagram! Can you recreate it for my wedding?", 
        answer: "Share the design with us, and we’ll adapt it to perfectly suit your wedding theme and style." },
  ];

  return (
    <div className="bg-gradient-to-br from-[#f9f9f9] to-[#ececec] px-6  mb-24 py-12 sm:px-10 sm:py-16 md:px-12 md:py-20 max-w-5xl mx-auto rounded-xl shadow-lg">
      <h2 className="text-center text-4xl sm:text-4xl font-semibold text-gray-800 mb-10">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-6">
          <button
            onClick={() => toggleFAQ(index)}
            className={`flex justify-between items-center w-full text-left px-5 py-4 text-xl font-normal rounded-xl shadow-sm transition-transform transform focus:ring-2 focus:ring-indigo-400 ${
              activeIndex === index ? 'bg-indigo-100' : 'bg-white'
            }`}
          >
            <span className="text-gray-800 text-lg">{faq.question}</span>
            {activeIndex === index ? (
              <FiChevronUp className="text-indigo-600" />
            ) : (
              <FiChevronDown className="text-gray-500" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="mt-4 px-5 py-4 bg-white text-gray-700 text-base shadow-inner">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

