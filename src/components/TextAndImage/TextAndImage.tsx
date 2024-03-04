import React, { FC, useState } from "react";

interface TextAndImageProps {
  title: string;
  paragraph: React.ReactNode;
  heightNumber: number;
  backgroundClass: string
}

const TextAndImage: FC<TextAndImageProps> = ({
  title,
  paragraph,
  heightNumber,
  backgroundClass
}) => {
  const [value, setValue] = useState<undefined>(undefined);

  return (
    <>
      <div
        className={
          "flex flex-column items-center justify-center " + backgroundClass
        }
        style={{height: heightNumber}}
      >
        <div className="w-1/2 h-full">
          <div className="bg-orange-500 h-full w-full"></div>
        </div>
        <div className="w-1/2 px-10 text-2xl py-10">
          {title && (
            <h1 className="text-4xl font-bold text-amber-600 mb-4">{title}</h1>
          )}
          {paragraph && <div className="">{paragraph}</div>}
        </div>
      </div>
    </>
  );
};

export default TextAndImage;
