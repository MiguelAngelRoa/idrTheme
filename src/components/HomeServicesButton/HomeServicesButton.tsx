import React from "react";

const HomeServicesButton = () => {
  return (
    <>
      <div className="flex flex-column items-center justify-center container mx-auto px-10 -mt-20">
        <div className="w-1/3 py-20 text-center font-bold text-white text-2xl bg-zinc-600 hover:bg-orange-400">IRD Balancing</div>
        <div className="w-1/3 py-20 text-center font-bold text-white text-2xl bg-zinc-600 hover:bg-orange-400">IRD Products</div>
        <div className="w-1/3 py-20 text-center font-bold text-white text-2xl bg-zinc-600 hover:bg-orange-400">Lexseco Products</div>
      </div>
    </>
  );
};

export default HomeServicesButton;
