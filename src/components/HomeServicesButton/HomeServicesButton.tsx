import React from "react";

const HomeServicesButton = () => {
  return (
    <>
      <div
        className="flex flex-column items-center justify-center container mx-auto px-10 -mt-20 mb-10"
        style={{ height: 250 }}
      >
        <div className="bg-white w-1/3 h-full border">
          <div
            className="bg-center w-full h-full text-center font-bold text-white text-2xl cursor-pointer"
            style={{
              backgroundImage: "url('/img/irdbalancinglogo.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="https://irdproducts.com/ird-balancing">
              <div className="bg-opacity-0 bg-black transition duration-300 hover:bg-opacity-50 hover:bg-orange-600 p-10 flex flex-column items-center justify-center h-full w-full" />
            </a>
          </div>
        </div>
        <div className="bg-white w-1/3 h-full border">
          <div
            className="bg-center w-full h-full text-center font-bold text-white text-2xl cursor-pointer"
            style={{
              backgroundImage: "url('/img/ird-bal-lexseco-logos.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="https://irdproducts.com/ird-balancing-products">
              <div className="bg-opacity-0 bg-black transition duration-300 hover:bg-opacity-50 hover:bg-orange-600 p-10 flex flex-column items-center justify-center h-full w-full" />
            </a>
          </div>
        </div>
        <div className="bg-white w-1/3 h-full border">
          <div
            className="bg-center w-full h-full text-center font-bold text-white text-2xl cursor-pointer"
            style={{
              backgroundImage: "url('/img/lexsecologo2.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="https://irdproducts.com/ird-balancing-products">
              <div className="bg-opacity-0 bg-black transition duration-300 hover:bg-opacity-50 hover:bg-orange-600 p-10 flex flex-column items-center justify-center h-full w-full" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeServicesButton;
