import React, { FC, useState } from "react";

interface TextAndImageProps {
  title: string;
  paragraph: React.ReactNode;
  heightNumber: number;
  backgroundClass: string;
  urlImage: string;
  side?: string;
  backgroundSize?: string;
}

const TextAndImage: FC<TextAndImageProps> = ({
  title,
  paragraph,
  heightNumber,
  backgroundClass,
  urlImage,
  side,
  backgroundSize
}) => {
  return (
    <>
      {side === "left" ? (
        <>
          <div
            className={
              "flex flex-column items-center justify-center " + backgroundClass
            }
            style={{ height: heightNumber }}
          >
            <div className="w-1/2 h-full">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: urlImage,
                  backgroundSize: backgroundSize ? backgroundSize : "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="bg-opacity-10 bg-black w-full h-full"></div>
              </div>
            </div>
            <div className="w-1/2 px-10 text-2xl py-10">
              {title && (
                <h1 className="text-4xl font-bold text-amber-600 mb-4">
                  {title}
                </h1>
              )}
              {paragraph && <div className="">{paragraph}</div>}
            </div>
          </div>
        </>
      ) : (
        <>
          <>
            <div
              className={
                "flex flex-column items-center justify-center " +
                backgroundClass
              }
              style={{ height: heightNumber }}
            >
              <div className="w-1/2 px-10 text-2xl py-10">
                {title && (
                  <h1 className="text-4xl font-bold text-amber-600 mb-4">
                    {title}
                  </h1>
                )}
                {paragraph && <div className="">{paragraph}</div>}
              </div>
              <div className="w-1/2 h-full">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: urlImage,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="bg-opacity-10 bg-black w-full h-full"></div>
                </div>
              </div>
            </div>
          </>
        </>
      )}
    </>
  );
};

export default TextAndImage;
