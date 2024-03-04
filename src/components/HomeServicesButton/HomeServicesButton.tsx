import React from "react";

const HomeServicesButton = () => {
  return (
    <>
      <div
        className="flex flex-column items-center justify-center container mx-auto px-10 -mt-20"
        style={{ height: 250 }}
      >
        <div
          className="w-1/3 h-full text-center font-bold text-white text-2xl"
          style={{
            backgroundImage: "url('/img/balancing1.jpg')",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-opacity-60 bg-black hover:bg-opacity-50 hover:bg-orange-600 p-10 flex flex-column items-center justify-center h-full w-full">
            IRD Balancing
          </div>
        </div>
        <div
          className="w-1/3 h-full text-center font-bold text-white text-2xl"
          style={{
            backgroundImage: "url('/img/balancing2.jpg')",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-opacity-60 bg-black hover:bg-opacity-50 hover:bg-orange-600 p-10 flex flex-column items-center justify-center h-full w-full">
            IRD Products
          </div>
        </div>
        <div
          className="w-1/3 h-full text-center font-bold text-white text-2xl"
          style={{
            backgroundImage: "url('/img/lexceco.jpg')",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-opacity-60 bg-black hover:bg-opacity-50 hover:bg-orange-600 p-10 flex flex-column items-center justify-center h-full w-full">
            Lexseco Products
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeServicesButton;
