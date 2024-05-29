import React from "react";
import { ImOmega } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-2 px-16 py-8 bg-white border-t-2 border-white-200">
      <div className="flex flex-col">
        <p className="text-air-black-100 text-xl flex items-center">
          <ImOmega className="mr-2" />
          <span className="font-bold">OMEGA</span>
          <span className="font-light">INITIATIVE</span>
        </p>
        <p className="text-sm font-light">Ontario, California</p>
      </div>
    </div>
  );
};

export default Footer;
