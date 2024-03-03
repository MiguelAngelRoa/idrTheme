import React from "react";

const AboutHome = () => {
  return (
    <>
      <div className="flex flex-column bg-zinc-900" style={{ height: 400 }}>
        <div className="bg-lime-600 w-1/2">
          <p>aquí debería estar la imagen</p>
        </div>
        <div className="flex flex-column items-center justify-center bg-orange-600 w-1/2 px-7 py-6 bg-zinc-700">
          <div className="container mx-auto">
            <h2 className="text-4xl text-amber-600 font-bold mb-4">
              About IRD Balancing UK
            </h2>
            <p className="text-white">
              Welcome to the IRD Balancing UK home page. With over 70 years of
              experience, IRD Balancing offers products and services designed to
              meet all of your soft-bearing balancing needs. IRD Balancing
              machines accommodate a range of rotor weights from a fraction of a
              kilogram to over 225,000 kilograms. IRD’s knowledge of precision
              balancing allows us to recommend the best Balancing Machine and
              Instrumentation solution for your specific application. IRD
              Balancing UK is the UK & Ireland partner of the business, our
              engineers are have 25 years of the IRD product range. We are able
              to provide high level Balancing knowledge, IRD product application
              and training, be it on IRD Balancing Machines or Lexseco Core Loss
              Testers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
