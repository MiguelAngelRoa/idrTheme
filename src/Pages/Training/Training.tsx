import React, { useState } from "react";
import BannerTitle from "../../components/BannerTitle/BannerTitle.tsx";

const Training = () => {
  const [value, setValue] = useState<undefined>(undefined);

  return (
    <>
      <BannerTitle title="Training" urlImage={"url('/img/maquinaria.jpg')"} />
      <div className="font-bold text-center text-6xl flex flex-column items-center justify-center p-20"><h1>COMING SOON</h1></div>
    </>
  );
};

export default Training;
