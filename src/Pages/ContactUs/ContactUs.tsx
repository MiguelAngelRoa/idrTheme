import React from "react";
import BannerTitle from "../../components/BannerTitle/BannerTitle.tsx";
import ContactInfoSection from "../../components/ContactInfoSection/ContactInfoSection.tsx";


const ContactUs = () => {
  return (
    <>
      <BannerTitle
        title="Contáctanos"
        urlImage={"url('/img/maquinaria.jpg')"}
      />
      <ContactInfoSection />
      {/* <ContactForm /> */}
    </>
  );
};

export default ContactUs;
