import React from "react";
import { Link } from "react-router-dom";

const IdrHeader = () => {
  return (
    <>
      <header className="flex flex-row justify-between bg-white shadow-lg shadow-xl px-6 py-4">
        <span
          id="logoPage"
          className="flex flex-column items-center w-1/2 pl-5 xs:pl-0"
        >
          <Link to="/">
            <img
              className=""
              src="/img/logoIRD.png"
              alt="logoIRD"
              width={70}
              height={70}
            />
          </Link>
        </span>

        {/* hamburger menu */}
        <button className="space-y-1 group md:hidden">
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
          {/* menu */}
          <ul className="bg-[#252525] w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
            <button className="px-10 py-6 relative ml-auto">
              <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
              <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
            </button>
            <li className="flex justify-center w-full py-8 text-white font-bold text-2xl">
              <Link to="/">Inicio</Link>
            </li>
            <li className="flex justify-center w-full py-8 text-white font-bold text-2xl">
              <Link to="/service-calibration">Servicios</Link>
            </li>
            <li className="flex justify-center w-full py-8 text-white font-bold text-2xl">
              <Link to="/gallery">Galería</Link>
            </li>
            <li className="flex justify-center w-full py-8 text-white font-bold text-2xl">
              <Link to="/contact-us">Contáctanos</Link>
            </li>
          </ul>
        </button>
        <nav className="md:flex flex-row items-center w-1/2 pl-5 justify-end font-bold xs:hidden">
          <ul className="flex flex-row items-center">
            <li className="text-xl mr-6 hover:text-amber-500">
              <Link to="/">Inicio</Link>
            </li>
            <li className="text-xl mr-6 hover:text-amber-500">
              <Link to="/service-calibration">Servicios</Link>
            </li>
            <li className="text-xl mr-6 hover:text-amber-500">
              <Link to="/gallery">Galería</Link>
            </li>
            <li className="text-xl mr-6 hover:text-amber-500">
              <Link to="/contact-us">Contáctanos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default IdrHeader;
