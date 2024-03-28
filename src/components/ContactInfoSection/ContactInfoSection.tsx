import React, { useState } from "react";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/24/solid";

const ContactInfoSection = () => {
  return (
    <>
      <div className="flex flex-column w-full px-20 py-10">
        <div className="flex flex-row w-1/2 items-center justify-center">
          <ul>
            <li>
              <span className="flex flex-column mb-5 items-center">
                <DevicePhoneMobileIcon
                  className="mr-4"
                  color="orange"
                  width={40}
                  height={40}
                />
                <p>
                  <b>Móvil: </b> +58 416-3901966{" "}
                </p>
              </span>
            </li>
            <li>
              <span className="flex flex-column mb-5 items-center">
                <EnvelopeIcon
                  className="mr-4"
                  color="orange"
                  width={40}
                  height={40}
                />
                <p>info@IRDBalancingve.com</p>
              </span>
            </li>
            <li>
              <span className="flex flex-column mb-5 items-center">
                <MapIcon
                  className="mr-4"
                  color="orange"
                  width={40}
                  height={40}
                />
                <p>
                  Urb. Rio Aro, Residencias Caroní Plaza Puerto Ordaz Bolívar
                  Venezuela, <b>8050</b>.
                </p>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-column items-center justify-center w-1/2">
          <iframe
            title="mapa-google-ird"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1974.1702843280832!2d-62.75125359524536!3d8.26885988864358!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTYnMDkuMCJOIDYywrA0NScwMC44Ilc!5e0!3m2!1ses!2sve!4v1710277045822!5m2!1ses!2sve"
            width="600"
            height="450"
            loading="lazy"
            className="border-none"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactInfoSection;
