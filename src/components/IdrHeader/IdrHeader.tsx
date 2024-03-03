import React from "react";

const IdrHeader = () => {
  return (
    <>
      <header className="flex flex-column justify-between bg-white shadow-lg py-6 px-5">
        <span
          id="logoPage"
          className="flex flex-column items-center w-1/2 pl-5"
        >
          <h2>Logo</h2>
        </span>
        <nav className="flex flex-column items-center w-1/2 pl-5 justify-end font-bold">
          <ul className="flex flex-column items-center">
            <li className="mr-4 hover:text-amber-500">
              <p>Home</p>
            </li>
            <li className="mr-4 hover:text-amber-500">
              <p>Service & Calibrations</p>
            </li>
            <li className="mr-4 hover:text-amber-500">
              <p>Training</p>
            </li>
            <li className="mr-4 hover:text-amber-500">
              <p>Contact Us</p>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default IdrHeader;
