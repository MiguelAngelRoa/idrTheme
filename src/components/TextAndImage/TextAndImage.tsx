import React, { FC, useState } from "react";

interface TextAndImageProps {
  title: string;
  paragraph: React.ReactNode;
  backgroundClass: string;
  urlImage: string;
  side?: string;
  backgroundSize?: string;
}

const TextAndImage: FC<TextAndImageProps> = ({
  title,
  paragraph,
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
              "flex md:flex-row xs:flex-col items-center justify-center h-fit " + backgroundClass
            }

          >
            <div className="md:w-1/2 md:h-[38rem] xs:w-full xs:h-96">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: urlImage,
                  backgroundSize: backgroundSize ? backgroundSize : "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
              </div>
            </div>
            <div className="md:w-1/2 md:px-8 h-full xs:w-full xs:px-6 xs:py-4">
              {title && (
                <h1 className="md:text-4xl xs:text-2xl font-bold text-amber-600 md:mb-4 xs:mb-2">
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
                "flex flex-column items-center justify-center h-fit " +
                backgroundClass
              }
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
