"use client"; // This is a client component

import React, { useEffect, useRef } from "react";

function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const newScrollLeft =
          scrollLeft + clientWidth >= scrollWidth
            ? 0
            : scrollLeft + clientWidth;
        carouselRef.current.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-6 rounded-lg bg-gray-200 py-4 px-4">
      <div className="space-y-4 text-center md:text-left md:w-1/2">
        <div className="text-5xl sm:text-6xl font-bold flex flex-col w-fit gap-2 mx-auto md:mx-0">
          <span className="bg-white p-2">LET'S</span>
          EXPLORE
          <span className="bg-yellow-400 p-2 -rotate-2">UNIQUE</span>
          CLOTHES.
        </div>
        <p className="text-lg">Live for Influential and Innovative fashion!</p>
        <button className="bg-black text-white font-bold py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-4">
        <div ref={carouselRef} className="carousel w-full h-75 rounded-box">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full object-cover"
              alt="Tailwind CSS slide 1"
            />
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full object-cover"
              alt="Tailwind CSS slide 2"
            />
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full object-cover"
              alt="Tailwind CSS slide 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
