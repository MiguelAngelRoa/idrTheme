import React, { useState } from "react";
import BannerTitle from "../../components/BannerTitle/BannerTitle.tsx";
import ContactInfoSection from "../../components/ContactInfoSection/ContactInfoSection.tsx";

const ContactUs = () => {
  const [value, setValue] = useState<undefined>(undefined);

  return (
    <>
      <BannerTitle title="Contact Us" urlImage={"url('/img/maquinaria.jpg')"} />
      <ContactInfoSection />
    </>
  );
};

export default ContactUs;
