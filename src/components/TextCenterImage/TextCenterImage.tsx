import React, { FC, ReactNode } from "react";

interface TextCenterImageProps {
  urlImage: string;
  children: ReactNode;
  side: string;
  backgroundColor?: string;
  fontColor?: string;
  heightImage?: string;
  widthImage?: string;
}

const TextCenterImage: FC<TextCenterImageProps> = ({
  urlImage,
  children,
  side,
  backgroundColor,
  fontColor,
  heightImage,
  widthImage,
}) => {
  return (
    <>
      {side === "left" ? (
        <div
          className={
            backgroundColor
              ? backgroundColor + " w-full flex md:flex-row xs:flex-col items-center"
              : "w-full flex md:flex-row xs:flex-col items-center"
          }
        >
          {/* Image */}
          <div
            className={"md:h-fit md:w-1/2 xs:w-full flex md:flex-col xs:flex-row items-center justify-center md:p-10 xs:p-5"}
          >
            <img
              src={urlImage}
              alt=""
              className={
                heightImage || widthImage
                  ? (heightImage ? heightImage : "") +
                    " " +
                    (widthImage ? widthImage : "") +
                    " border-2 border-stone-800 rounded-md w-4/5 shadow-2xl m-auto"
                  : "border-2 border-stone-800 rounded-md w-4/5 shadow-2xl m-auto"
              }
            />
          </div>
          {/* Texto */}
          <div
            id={"parrafoText"}
            className={
              fontColor
                ? fontColor +
                  " text-black md:w-1/2 xs:w-full md:p-10 xs:p-6 flex md:flex-col xs:flex-row items-center justify-center"
                : "text-black md:w-1/2 xs:w-full md:p-10 xs:p-6 flex md:flex-col xs:flex-row items-center justify-center"
            }
          >
            <div>{children}</div>
          </div>
        </div>
      ) : (
        <div
          className={
            backgroundColor
              ? backgroundColor + " w-full flex md:flex-row xs:flex-col-reverse items-center"
              : "w-full flex md:flex-row xs:flex-col-reverse items-center"
          }
        >
          {/* Text */}
          <div
            id={"parrafoText"}
            className={
              fontColor
                ? fontColor +
                  " text-black md:w-1/2 xs:w-full md:p-10 xs:p-6 flex md:flex-col xs:flex-row items-center justify-center"
                : "text-black md:w-1/2 xs:w-full md:p-10 xs:p-6 flex md:flex-col xs:flex-row items-center justify-center"
            }
          >
            <div>{children}</div>
          </div>
          {/* Image */}
          <div
            id={"imagen-text"}
            className="md:h-fit md:w-1/2 xs:w-full flex md:flex-col xs:flex-row items-center justify-center md:p-10 xs:p-5"
          >
            <img
              src={urlImage}
              alt=""
              className={
                heightImage || widthImage
                  ? (heightImage ? heightImage : "") +
                    " " +
                    (widthImage ? widthImage : "") +
                    " border-2 border-stone-800 rounded-md w-4/5 shadow-2xl m-auto"
                  : "border-2 border-stone-800 rounded-md w-4/5 shadow-2xl m-auto"
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TextCenterImage;
