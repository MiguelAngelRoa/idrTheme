import React from "react";
import HomeServicesButton from "../../components/HomeServicesButton/HomeServicesButton.tsx";
import TextAndImage from "../../components/TextAndImage/TextAndImage.tsx";

const Home = () => {
  return (
    <>
      <div
        id="principalBanner"
        style={{
          backgroundImage: "url('/img/rotor.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-black bg-opacity-50">
          <div className="container mx-auto py-36 px-5">
            <h1 className="text-amber-500 font-bold text-6xl mb-4">
              IRD Balancing
            </h1>
            <p className="font-bold text-white">
              The UK And Ireland Distributer With 25 Years Experience With IRD
            </p>
          </div>
        </div>
      </div>

      <HomeServicesButton />
      <br />
      <TextAndImage
        title="About IRD Balancing UK"
        urlImage={"url('/img/calibrando.jpg')"}
        heightNumber={600}
        paragraph={
          <>
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
          </>
        }
        backgroundClass="bg-zinc-800"
      />
    </>
  );
};

export default Home;
