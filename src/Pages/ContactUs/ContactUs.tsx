import React, { useState } from "react";
import BannerTitle from "../../components/BannerTitle/BannerTitle.tsx";
import ContactInfoSection from "../../components/ContactInfoSection/ContactInfoSection.tsx";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";

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
