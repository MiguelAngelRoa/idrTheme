import React, { FC, useState } from "react";

interface BannerTitleProps {
  title: string;
}

const BannerTitle: FC<BannerTitleProps> = ({ title }) => {
  const [value, setValue] = useState(title);

  return (
    <>
      <div className="px-8 py-10 bg-black bg-opacity-80" style={{ height: 300 }}>
        <div className="container mx-auto flex flex-column items-center h-full">
          {title && (
            <h1 className="p-10 text-6xl font-bold text-amber-600 text-amber-600">
              {title}
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default BannerTitle;
