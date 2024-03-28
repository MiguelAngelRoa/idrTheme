import React, { FC, ReactNode } from "react";

interface TextCenterImageProps {
  urlImage: string;
  children: ReactNode;
  side: string;
  height?: string;
  backgroundColor?: string;
  fontColor?: string;
  heightImage?: string;
  widthImage?: string;
}

const TextCenterImage: FC<TextCenterImageProps> = ({
  urlImage,
  children,
  side,
  height,
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
              ? backgroundColor + " w-full flex flex-row "
              : "w-full flex flex-row"
          }
        >
          <div
            id={"imagen-text"}
            className={height ? height + " w-1/2 flex flex-col items-center justify-center p-10" : "w-1/2 flex flex-col items-center justify-center p-10" }
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
          <div
            id={"parrafoText"}
            className={
              fontColor
                ? fontColor +
                  " text-black w-1/2 p-10 w-1/2 flex flex-col items-center justify-center"
                : "text-black w-1/2 p-10 flex flex-col items-center justify-center"
            }
          >
            <div>{children}</div>
          </div>
        </div>
      ) : (
        <div
          className={
            backgroundColor
              ? backgroundColor + " w-full flex flex-row "
              : "w-full flex flex-row"
          }
        >
          <div
            id={"parrafoText"}
            className={
              fontColor
                ? fontColor +
                  " text-black w-1/2 p-10 pl-24 w-1/2 flex flex-col items-center justify-center"
                : "text-black w-1/2 p-10 pl-24 flex flex-col items-center justify-center"
            }
          >
            <div>{children}</div>
          </div>
          <div
            id={"imagen-text"}
            className="w-1/2 flex flex-col items-center justify-center p-10"
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
