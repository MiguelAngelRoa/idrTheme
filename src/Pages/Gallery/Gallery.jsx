import * as React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderItemCustom = (item) => {
    const getResponsiveStyle = () => {
      if (windowWidth <= 480) {
        return { height: "300px", marginBottom: "10px" }; // Teléfonos pequeños
      } else if (windowWidth <= 768) {
        return { height: "400px", marginBottom: "15px" }; // Móviles grandes
      } else if (windowWidth <= 1024) {
        return { height: "600px", marginBottom: "20px" }; // Tablets y laptops pequeñas
      } else {
        return { height: "760px", marginBottom: "20px" }; // Pantallas grandes
      }
    };

    return (
      <div className="container-items-custom">
        <img
          src={item.original}
          alt={item.description}
          className="image-gallery-image"
          style={getResponsiveStyle()}
        />
        <div className="custom-description-container">
          <span className="image-gallery-description-custom">
            {item.description}
          </span>
        </div>
      </div>
    );
  };

  //   const imagesTest = [
  //   {
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1018/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/",
  //   },
  // ];

  const images = [
    {
      original: "/galleryImages/Imagen-1.jpg",
      thumbnail: "/galleryImages/thumbs/Imagen-1.png",
      description: "Carta de Representación de IRD LLC",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/Imagen-2.png",
      thumbnail: "/galleryImages/thumbs/Imagen-2.png",
      description:
        "Maquina Balanceadora modelo IRD B150-295 de 7 Ton de capacidad, fabricada en 1978 y aún vigente. Turbopre Services, Maracaibo, Venezuela.",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/Imagen-3.png",
      thumbnail: "/galleryImages/thumbs/Imagen-3.png",
      description:
        "Maquina Balanceadora modelo IRD B500-295 de 23 Ton de capacidad, fabricada en 1991 y aún vigente. Turbopre Services, Maracaibo, Venezuela.",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/Imagen-4.png",
      thumbnail: "/galleryImages/thumbs/Imagen-4.png",
      description:
        "Maquina Balanceadora modelo B800 de 36 Ton de capacidad. Transportable. Industrias Frigidaire. Barranquilla, Colombia.",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/Imagen-5.png",
      thumbnail: "/galleryImages/thumbs/Imagen-5.png",
      description:
        "Maquina Balanceadora modelo IRD B150 de 7 Ton de capacidad, fabricada en 1981 y aún vigente. Bauxilum, Puerto Ordaz, Venezuela",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/Imagen-6.png",
      thumbnail: "/galleryImages/thumbs/Imagen-6.png",
      description:
        "Calibración de Instrumento de Balanceo IRD modelo 295+. Consiste en inyectar señales de amplitud y frecuencia definidas para que el 295+ haga los ajustes requeridos. Luego, la calibración queda registrada en el instrumento mediante un código de seguridad generado por el fabricante.",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/Imagen-7.png",
      thumbnail: "/galleryImages/thumbs/Imagen-7.png",
      description:
        "Modernización de Máquina Balanceadora DynaBal de 7 Ton con Instrumento IRD Balancing modelo 295+. Central de Bobinados, Bucaramanga, Colombia",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/Imagen-8.png",
      thumbnail: "/galleryImages/thumbs/Imagen-8.png",
      description:
        "Modernización de Máquina Balanceadora Schenck de 20 Ton con instrumento IRD Balancing modelo 290. Pdvsa La Salina, Cabimas, Venezuela",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/Imagen-9.png",
      thumbnail: "/galleryImages/thumbs/Imagen-9.png",
      description:
        "Soportes de Balanceo de 22 Ton de capacidad. IRD Suministra los planos de fabricación más accesorios y el usuario fábrica su propia máquina Balanceadora.",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/PEEMP.png",
      thumbnail: "/galleryImages/thumbs/PEEMP.png",
      description:
        "Puesta en marcha y capacitación máquina B150-295 + Refinería El Palito",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/PEEMPA.png",
      thumbnail: "/galleryImages/thumbs/PEEMPA.png",
      description:
        "Puesta en marcha y capacitación máquina B150-295 + Refinería El Palito A",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/PEEMPB.png",
      thumbnail: "/galleryImages/thumbs/PEEMPB.png",
      description:
        "Puesta en marcha y capacitación máquina B150-295 + Refinería El Palito B",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/PEEMPC.png",
      thumbnail: "/galleryImages/thumbs/PEEMPC.png",
      description:
        "Puesta en marcha y capacitación máquina B150-295 + Refinería El Palito C",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/Imagen-10.png",
      thumbnail: "/galleryImages/thumbs/Imagen-10.png",
      description:
        "Calibración 2 x 295 con B50F y B750, Frigidal Barranquilla Colombia.",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/Imagen-11.jpg",
      thumbnail: "/galleryImages/thumbs/Imagen-11.png",
      description:
        "Calibración 295+ con B100, Pdvsa Petropiar, Jose, Anzoategui",
      renderItem: renderItemCustom,
    },
    {
      original: "/galleryImages/Imagen-12.jpg",
      thumbnail: "/galleryImages/thumbs/Imagen-12.png",
      description:
        "Visita técnica en Asmar Valparaíso Chile.",
      renderItem: renderItemCustom,
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: "url('img/patron.png')",
          backgroundRepeat: "repeat",
          overflowX: "clip",
        }}
      >
        <div className="flex justify-center items-center bg-opacity-5 bg-black md:p-10 md:h-[900px] xs:h-[600px] xs:p-5">
          <div className="flex-row p-10">
            <ImageGallery items={images} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
