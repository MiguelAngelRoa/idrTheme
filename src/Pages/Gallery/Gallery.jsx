import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const renderItemCustom = (item) => {
    return (
      <>
        <div className="container-items-custom">
          <img
            src={item.original}
            alt={item.description}
            className="image-gallery-image"
          />
          <div className="custom-description-container">
            <span className="image-gallery-description-custom">
              {item.description}
            </span>
          </div>
        </div>
      </>
    );
  };

    const imagesTest = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const images = [
    {
      original: "/galleryImages/Imagen-1.png",
      thumbnail: "/galleryImages/thumbs/Imagen-1.png",
      description: "Carta de Representación de IRD LLC",
      renderItem: renderItemCustom
    },
    {
      original: "/galleryImages/Imagen-2.png",
      thumbnail: "/galleryImages/thumbs/Imagen-2.png",
      description: "Maquina Balanceadora modelo IRD B150-295 de 7 Ton de capacidad, fabricada en 1978 y aún vigente. Turbopre Services, Maracaibo, Venezuela.",
      renderItem: renderItemCustom
    },
    {
      original: "/galleryImages/Imagen-3.png",
      thumbnail: "/galleryImages/thumbs/Imagen-3.png",
      description: "Maquina Balanceadora modelo IRD B500-295 de 23 Ton de capacidad, fabricada en 1991 y aún vigente. Turbopre Services, Maracaibo, Venezuela.",
      renderItem: renderItemCustom
    },
    {
      original: "/galleryImages/Imagen-4.png",
      thumbnail: "/galleryImages/thumbs/Imagen-4.png",
      description: "Maquina Balanceadora modelo B800 de 36 Ton de capacidad. Transportable. Industrias Frigidaire. Barranquilla, Colombia.",
      renderItem: renderItemCustom
    },
    {
      original: "/galleryImages/Imagen-5.png",
      thumbnail: "/galleryImages/thumbs/Imagen-5.png",
      description: "Maquina Balanceadora modelo IRD B150 de 7 Ton de capacidad, fabricada en 1981 y aún vigente. Bauxilum, Puerto Ordaz, Venezuela",
      renderItem: renderItemCustom
    },
    {
      original: "/galleryImages/Imagen-6.png",
      thumbnail: "/galleryImages/thumbs/Imagen-6.png",
      description: "Calibración de Instrumento de Balanceo IRD modelo 295+. Consiste en inyectar señales de amplitud y frecuencia definidas para que el 295+ haga los ajustes requeridos. Luego, la calibración queda registrada en el instrumento mediante un código de seguridad generado por el fabricante.",
      renderItem: renderItemCustom
    },
    {
      original: "/galleryImages/Imagen-7.png",
      thumbnail: "/galleryImages/thumbs/Imagen-7.png",
      description: "Modernización de Máquina Balanceadora DynaBal de 7 Ton con Instrumento IRD Balancing modelo 295+. Central de Bobinados, Bucaramanga, Colombia",
      renderItem: renderItemCustom
    },
    {
      original: "/galleryImages/Imagen-8.png",
      thumbnail: "/galleryImages/thumbs/Imagen-8.png",
      description: "Modernización de Máquina Balanceadora Schenck de 20 Ton con instrumento IRD Balancing modelo 290. Pdvsa La Salina, Cabimas, Venezuela",
      renderItem: renderItemCustom
    },
    {
      original: "/galleryImages/Imagen-9.png",
      thumbnail: "/galleryImages/thumbs/Imagen-9.png",
      description: "Soportes de Balanceo de 22 Ton de capacidad. IRD Suministra los planos de fabricación más accesorios y el usuario fábrica su propia máquina Balanceadora.",
      renderItem: renderItemCustom
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: "url('img/patron.png')",
          backgroundRepeat: "repeat",
          overflowX: 'clip'
        }}
      >
        <div className="flex justify-center items-center bg-opacity-5 bg-black md:p-10 md:h-[900px] xs:h-[600px] xs:p-5">
          <div className="flex-row">
            <ImageGallery items={images} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
