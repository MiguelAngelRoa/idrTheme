import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {

  const images = [
    {
      original: "/galleryImages/b750rr.jpg",
      thumbnail: "/galleryImages/b750rr.jpg",
    },
    {
      original: "/galleryImages/balancing2.jpg",
      thumbnail: "/galleryImages/balancing2.jpg",
    },
    {
      original: "/galleryImages/Certificacion.jpg",
      thumbnail: "/galleryImages/Certificacion.jpg",
    },
  ];

  // const images = [
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

  return (
    <>
      <div
        style={{
          backgroundImage: "url('img/patron.png')",
          backgroundRepeat: "repeat",
        }}
      >

        <div className="flex justify-center items-center bg-opacity-5 bg-black md:p-10 md:h-[900px] xs:h-[600px] xs:p-5">
          <ImageGallery items={images} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
