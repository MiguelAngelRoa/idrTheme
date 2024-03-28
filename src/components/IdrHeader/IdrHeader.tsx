import React from "react";
import { Link } from "react-router-dom";

const IdrHeader = () => {
  return (
    <>
      <header className="flex flex-column justify-between bg-white shadow-lg py-4 px-5 shadow-xl">
        <span
          id="logoPage"
          className="flex flex-column items-center w-1/2 pl-5"
        >
          <Link to="/">
          <img className="ml-10" src="/img/logoIRD.png" alt="logoIRD" width={70} height={70} />
          </Link>
          
        </span>
        <nav className="flex flex-column items-center w-1/2 pl-5 justify-end font-bold">
          <ul className="flex flex-column items-center">
            <li className="mr-6 hover:text-amber-500">
              <Link to="/">Inicio</Link>
            </li>
            <li className="mr-6 hover:text-amber-500">
              <Link to="/service-calibration">Servicios</Link>
            </li>
            <li className="mr-6 hover:text-amber-500">
              <Link to="/gallery">Galería</Link>
            </li>
            <li className="mr-6 hover:text-amber-500">
              <Link to="/contact-us">Contáctanos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default IdrHeader;
