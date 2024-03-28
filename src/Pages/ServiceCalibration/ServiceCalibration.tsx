import React, { useState } from "react";
import BannerTitle from "../../components/BannerTitle/BannerTitle.tsx";
import BigP from "../../components/BigP/BigP.tsx";
import TextAndImage from "../../components/TextAndImage/TextAndImage.tsx";
import TextCenterImage from "../../components/TextCenterImage/TextCenterImage.tsx";

const ServiceCalibration = () => {
  return (
    <>
      <BannerTitle
        title={"Service & Calibrations"}
        urlImage={"url('/img/computer.jpg')"}
        height={"h-[500px]"}
      />
      <div
        style={{
          backgroundImage: "url('/img/patron.png')",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="bg-opacity-5 bg-black py-10">
          <TextCenterImage
            urlImage={"img/calibracion-295-2.jpg"}
            fontColor={"black"}
            side={"left"}
            height={"h-[700px]"}
          >
            <h1 className="text-6xl text-rose-600 font-bold mb-8">
              Calibración
            </h1>
            <p className="text-2xl mb-5">
              Calibración de los Instrumentos Balanceadores modelos IRD 236, IRD
              246, IRD 290, IRD 295 e IRD 295+.
            </p>
            <p className="text-2xl">
              Consiste en el ajuste electrónico mediante la simulación de
              señales de vibración y velocidad, según procedimiento estándar del
              fabricante. Incluye la emisión de un certificado de calibración.
            </p>
          </TextCenterImage>
          <TextCenterImage
            urlImage={"img/Certificacion.jpg"}
            fontColor={"black"}
            side={"right"}
            height={"h-[700px]"}
          >
            <h1 className="text-6xl text-rose-600 font-bold mb-8">
              Inspección y Certificación de Máquina Balanceadora
            </h1>
            <p className="text-2xl">
              Se lleva a cabo una vez calibrado el instrumento balanceador, pero
              no es condición indispensable. Consiste en la inspección
              estructural de la máquina, inspección de soportes, módulos de
              suspensión, rodamientos, consola, sensores, calibradores (si
              existen), cables y correas. Una vez aprobada la inspección se
              certifica la máquina con un rotor patrón o en su defecto con un
              rotor simétrico. La certificación se ejecuta mediante
              procedimiento estándar del fabricante.
            </p>
          </TextCenterImage>
          <TextCenterImage
            urlImage={"img/iso.jpg"}
            fontColor={"black"}
            side={"left"}
            height={"h-[1000px]"}
            widthImage={"w-[600px]"}
          >
            <h1 className="text-6xl text-rose-600 font-bold mb-8">
              Certificación de Máquinas Balanceadoras según Norma ISO 21940-21
            </h1>
            <p className="text-2xl mb-5">
              La norma ISO 21940-21 proporciona los requisitos para la
              evaluación del desempeño y las características de máquinas para
              balancear componentes giratorios, de acuerdo a las
              especificaciones que entrega los fabricantes.
            </p>
            <p className="text-2xl">
              El servicio de certificación, incluye, además de la maquinas
              balanceadoras IRD Balancing; cualquier otra marca, sin importar si
              es rígida o de soportes suaves. Con la certificación se entregan
              los resultados de las pruebas ejecutadas.
            </p>
          </TextCenterImage>
          <TextCenterImage
            urlImage={"img/Entrenamiento.jpg"}
            fontColor={"black"}
            side={"right"}
            height={"h-[1000px]"}
          >
            <h1 className="text-6xl text-rose-600 font-bold mb-8">
              Arranque y capacitación en sitio
            </h1>
            <p className="text-2xl mb-5">
              Una vez que el usuario haya cumplido con sus responsabilidades
              para la instalación de la máquina, como son anclaje en sitio,
              suministro de alimentación y aire (si es necesario), procedemos
              con la inspección, configuración y pruebas dinámicas de la
              máquina, a manera de garantizar la operación segura para los
              usuarios, máquina e instalaciones.
            </p>
            <p className="text-2xl mb-5">
              La capacitación consiste en una parte teórica sobre balanceo
              (definición, causas, consecuencias, tipos, normas, etc.) y una
              parte práctica donde trabajamos con los operadores paso a paso en
              todos los procesos del balanceo para garantizar que queden
              debidamente capacitados y sean capaces de balancear de manera
              segura, rápida y eficiente.
            </p>
            <p className="text-2xl">
              La capacitación no solo se ofrece para una nueva instalación,
              también es necesaria cuando hay rotación de personal,
              actualización de conocimientos o certificación de operadores
            </p>
          </TextCenterImage>
          <TextCenterImage
            urlImage={"img/reparacion.jpg"}
            fontColor={"black"}
            side={"left"}
            height={"h-[700px]"}
          >
            <h1 className="text-6xl text-rose-600 font-bold mb-8">
              Reparación
            </h1>
            <p className="text-2xl">
              Para todos los instrumentos de balanceo ofrecemos reparaciones,
              nuestra única limitación está en los repuestos y su
              disponibilidad. En tal sentido ofrecemos alternativas. Dependiendo
              de la magnitud del problema el cliente puede decidir enviar el
              equipo a reparar a la fábrica (USA), la ventaja de esta opción es
              que las tarifas son fijas, es decir, el cliente sabrá cuánto
              cuesta la reparación antes de enviar su equipo.
            </p>
          </TextCenterImage>
          <br />
          <TextCenterImage
            urlImage={"img/reparacion.jpg"}
            fontColor={"black"}
            side={"right"}
            height={"h-[800px]"}
          >
            <h1 className="text-6xl text-rose-600 font-bold mb-8">
              Calibración, Programa de Intercambio del Medidor de Flujo del
              Probador de Pérdida de Nucleo (CLT) Lexseco
            </h1>
            <p className="text-2xl mb-5">
              Si tienes un medidor de flujo E Meter en tu CLT, puedes participar
              en el programa. Si no lo tienes puedes evaluar una actualización
              de tu CLT que incluye el nuevo E Meter.
            </p>
            <p className="text-2xl mb-5">
              Entendemos la importancia de mantener el CLT en servicio todo el
              tiempo para evitar pérdidas de clientes, ganancias y tiempo. Ahora
              puedes calibrar tu medidor sin necesidad de enviar el CLT a
              fábrica y sin recibir la visita de un técnico que genera costos
              adicionales.
            </p>
            <p className="text-2xl mb-5">
              Solicite el servicio de calibración, luego de terminados los
              trámites administrativos, IRD le enviará un E Meter calibrado. Una
              vez recibe lo recibe, de inmediato debe retornar su E Meter a IRD.
              La instalación es simple. Eso es todo!!!.
            </p>
            <p className="text-2xl">
              La calibración incluye el certificado que cumple con las normas
              NIST.
            </p>
          </TextCenterImage>
          <TextCenterImage
            urlImage={"img/beforeandafter.jpg"}
            fontColor={"black"}
            side={"left"}
            height={"h-[700px]"}
          >
            <h1 className="text-6xl text-rose-600 font-bold mb-8">
              Actualización del Probador de Pérdida de Nucleo (CLT) Lexseco
            </h1>
            <p className="text-2xl mb-5">
              Con el paquete de actualización del CLT Lexseco, el usuario
              obtiene lo último en electrónica y software disponible por la
              mitad del precio de uno nuevo. Desde los primeros CLT construidos
              en los años 70, muchos cambios han sido introducidos para mejorar
              el desempeño y servicio de los CLT. El reóstato ha sido eliminado
              y el medidor de flujo (Meter) fue reemplazado por el nuevo E
              Meter, modular, que permite que las Pruebas de Pérdida de Núcleo y
              Punto caliente sean completamente automatizadas; los más precisos
              de la industria.
            </p>
          </TextCenterImage>
        </div>
      </div>
    </>
  );
};

export default ServiceCalibration;
