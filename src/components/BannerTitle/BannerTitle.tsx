import React, { FC, useState } from "react";

interface BannerTitleProps {
  title: string;
  urlImage: string;
  height?: string;
}

const BannerTitle: FC<BannerTitleProps> = ({ title, urlImage, height }) => {
  return (
    <>
      <div className={height ? height + " bg-black bg-opacity-90" : "bg-black bg-opacity-90"}>
        <div
          className="flex flex-column items-center h-full w-full"
          style={{ backgroundImage: urlImage, backgroundSize: "cover" }}
        >
          <div className="flex flex-column items-center bg-opacity-50 bg-black px-40 py-10 w-full h-full">
            {title && (
              <h1 className="text-6xl font-bold text-yellow-400">{title}</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTitle;
