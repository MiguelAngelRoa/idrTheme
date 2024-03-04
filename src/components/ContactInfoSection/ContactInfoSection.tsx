import React, { useState } from "react";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/24/solid";

const ContactInfoSection = () => {
  const [value, setValue] = useState<undefined>(undefined);

  return (
    <>
      <div className="flex flex-column w-full px-20 py-10">
        <div className="flex flex-row w-1/2 items-center justify-center">
          <ul>
            <li>
              <span className="flex flex-column mb-5 items-center">
                <DevicePhoneMobileIcon className="mr-4" color="orange" width={40} height={40} />
                <p> +44 (0) 151 345 6784</p>
              </span>
            </li>
            <li>
              <span className="flex flex-column mb-5 items-center">
                <EnvelopeIcon className="mr-4" color="orange" width={40} height={40} />
                <p> info@IRDBalancinguk.co.uk</p>
              </span>
            </li>
            <li>
              <span className="flex flex-column mb-5 items-center">
                <MapIcon className="mr-4" color="orange" width={40} height={40} />
                <p>
                  IRD Balancing UK , 101 Meadow Lane, Ellesmere Port Cheshire,
                  CH65 4TY
                </p>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-column items-center justify-center w-1/2">
          <iframe
            title="mapa-google-ird"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19082.951441110974!2d-2.887669!3d53.282926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b271a5579c585%3A0x84e3b0bfe634fc3a!2sCleng!5e0!3m2!1sen!2sin!4v1709587241853!5m2!1sen!2sin"
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
