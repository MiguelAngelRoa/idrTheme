import React from "react";
import HomeServicesButton from "../../components/HomeServicesButton/HomeServicesButton.tsx";
import AboutHome from "../../components/AboutHome/AboutHome.tsx";

const Home = () => {
  return (
    <>
      <div id="principalBanner" className="bg-zinc-950">
        <div className="container mx-auto py-36 px-5">
          <h1 className="text-amber-500 font-bold text-6xl mb-4">
            IRD Balancing
          </h1>
          <p className="font-bold text-white">
            The UK And Ireland Distributer With 25 Years Experience With IRD
          </p>
        </div>
      </div>
      <HomeServicesButton />
      <br />
      <AboutHome />
    </>
  );
};

export default Home;
