import React, { FC, useState } from "react";

interface BigPProps {
  title: string;
  parrafo: React.ReactNode;
}

const BigP: FC<BigPProps> = ({ title, parrafo }) => {
  const [value, setValue] = useState<undefined>(undefined);

  return (
    <>
      <div className="px-40 bg-white my-10">
        {title && (
            <h1 className="text-4xl mb-5 font-bold">{title}</h1>
        )}
        {parrafo && (
            <div className="text-2xl">{parrafo}</div>
        )}
      </div>
    </>
  );
};

export default BigP;
