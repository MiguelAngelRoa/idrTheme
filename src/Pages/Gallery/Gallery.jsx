import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const images = [
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

  return (
    <>
      <div
        style={{
          backgroundImage: "url('img/patron.png')",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="bg-opacity-5 bg-black py-20 px-20">
          <ImageGallery items={images} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
