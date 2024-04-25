import React from "react";
import HomeServicesButton from "../../components/HomeServicesButton/HomeServicesButton.tsx";
import TextAndImage from "../../components/TextAndImage/TextAndImage.tsx";

const Home = () => {
  return (
    <>
      <div
        id="principalBanner"
        className="h-96"
        style={{
          backgroundImage: "url('/img/ird-large-balance-machine.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full bg-opacity-30 bg-black">
          <div className="w-4/5 mx-auto">
            <h1 className="text-amber-500 font-bold md:text-7xl md:mb-4 xs:text-4xl xs:mb-2">
              IRD BALANCING VE
            </h1>
            <p className="font-bold text-white text-2xl">
              Distribuidor autorizado de IRD en Venezuela.
            </p>
          </div>
        </div>
      </div>
      <HomeServicesButton />
      <br />
      <TextAndImage
        title="A cerca de nosotros"
        urlImage={"url('/img/b750rr.jpg')"}
        side="left"
        backgroundSize="cover"
        paragraph={
          <>
            <p className="text-white mb-2 md:text-xl xs:text-sm">
              Bienvenidos a IRD Balancing Ve, aliado en Venezuela de IRD LLC,
              representada por Soporte y Servicios PYH C.A.
            </p>
            <p className="text-white mb-2 md:text-2xl xs:text-sm">
              IRD Balancing con más de 70 años en el mercado fabrica Máquinas
              Balanceadoras de soportes flexibles (Soft Bearing) con capacidades
              que van desde fracciones de 1 Kg hasta 227.000 Kg., además
              suministra los componentes necesarios y planos para que los
              usuarios fabriquen sus propias máquinas o modernicen sus máquinas
              obsoletas sin importar la marca. Cuenta con el instrumento de
              balanceo IRD 295+, de última generación y el más completo del
              mercado que también puede ser usado para modernizar otras máquinas
              balanceadoras de soportes flexibles y máquina semirrígidas.
            </p>
          </>
        }
        backgroundClass="bg-zinc-800"
      />
      <TextAndImage
        title=""
        urlImage={"url('/img/calibracion-295-2.jpg')"}
        side="right"
        backgroundSize="cover"
        backgroundClass="bg-zinc-800"
        paragraph={
          <p className="text-white md:text-2xl xs:text-sm">
            Como distribuidores autorizados de IRD, contamos con la capacidad y
            el soporte de fábrica para ofrecer a los usuarios de IRD Balancing
            toda la gama de productos y servicios disponibles. Para ello
            contamos con el personal técnico con más de 25 años de experiencia y
            en continuo entrenamiento en fábrica. Además, disponemos de los
            procedimientos estandarizados del fabricante y los equipos de
            medición definidos, estables y traceables según las normas.
          </p>
        }
      ></TextAndImage>
    </>
  );
};

export default Home;
