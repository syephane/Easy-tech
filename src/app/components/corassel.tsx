/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
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
          <span className="bg-blue-400 p-2">EASY</span>
          TECH
          <span className="bg-green-400 p-2 -rotate-2">SERVICE</span>
          SARL
        </div>
        <p className="text-lg justify-center">ENSEMBLE CONNECTÉS À L'AVENIR</p>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-4">
        <div ref={carouselRef} className="carousel w-full h-75 rounded-box">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="/images/cablage_structure_reseaux_2019.jpg"
              className="w-full object-cover"
              alt="Tailwind CSS slide 1"
            />
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="/images/cora1.jpeg"
              className="w-full object-cover"
              alt="Tailwind CSS slide 2"
            />
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="/images/secu1.jpg"
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
