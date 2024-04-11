import React, { FC, useState } from "react";

interface BannerTitleProps {
  title: string;
  urlImage: string;
}

const BannerTitle: FC<BannerTitleProps> = ({ title, urlImage }) => {
  return (
    <>
      <div className={" bg-black bg-opacity-90 md:h-[500px] xs:h-[350px]"}>
        <div
          className="flex flex-column items-center h-full w-full"
          style={{ backgroundImage: urlImage, backgroundSize: "cover" }}
        >
          <div className="flex flex-column items-center bg-opacity-50 bg-black md:px-40 xs:px-10 py-10 w-full h-full">
            {title && (
              <h1 className="md:text-6xl xs:text-5xl font-bold text-yellow-400">{title}</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTitle;
