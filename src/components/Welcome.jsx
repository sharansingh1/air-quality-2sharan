"use client";
import React from "react";
import Image from "next/image";
import Waves from "@/public/svg/landingWaves.svg";
import { FaChevronDown } from "react-icons/fa";
import Navigation from "@/components/Navigation";

const Welcome = () => {
  const ChevronClick = () => {
    const section = document.getElementById("public-view-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen w-full overflow-hidden">
      <Navigation />
      <div className="w-full h-full absolute top-0 left-0">
        <Image
          src={Waves}
          className="absolute top-0 left-0 -z-10 object-cover w-full h-full"
          alt="Home Page Waves"
        />
      </div>
      <div className="w-full md:w-11/12 lg:w-3/4 xl:w-2/3 relative flex flex-col items-center justify-center text-center">
        <p className="text-8xl font-bold mb-10 text-air-black-100">OMEGA.</p>
        <p className="text-3xl font-base text-air-black-100">
          OMEGA Initiative: Objective Measurement / Monitoring / Mitigation of
          Emissions from Goods Movement and Impacts on Air Quality.
        </p>
      </div>

      <div className="flex flex-col items-center mb-10">
        <p className="text-3xl font-base text-air-black-100">Access Data</p>
        <FaChevronDown
          onClick={ChevronClick}
          className="transition-transform transform hover:scale-125 hover:cursor-pointer text-air-black-100 text-4xl pt-2"
        />
      </div>
    </div>
  );
};

export default Welcome;
