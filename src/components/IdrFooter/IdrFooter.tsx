import React, { useState } from "react";

const IdrFooter = () => {
  const [actualYear] = useState<string>(new Date().getFullYear().toString());

  return (
    <>
      <footer className="bg-zinc-900 flex flex-column font-bold text-white items-center justify-center px-5 p-6">
        {actualYear ? (
          <p>Copyright ©{actualYear} IRD® LLC. All rights reserved.</p>
        ) : (
          <p>Copyright ©{actualYear} IRD® LLC. All rights reserved.</p>
        )}
      </footer>
    </>
  );
};

export default IdrFooter;
