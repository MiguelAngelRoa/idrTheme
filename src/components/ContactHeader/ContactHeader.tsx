import React from "react";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/24/solid";

const ContactHeader = () => {
  return (
    <div className="w-full flex md:flex-row justify-between px-10 py-2 bg-zinc-900 text-white xs:flex-col xs:p-2">
      <div className="flex md:flex-row xs:flex-col">
        <span className="flex flex-row items-center md:mr-4 md:mb-0 xs:mr-0 xs:mb-4">
          <DevicePhoneMobileIcon
            color="yellow"
            width={20}
            height={20}
            className="mr-2"
          />
          <p className="text-xs">+44 (0) 151 345 6784</p>
        </span>
        <span className="flex flex-row items-center md:mr-4 md:mb-0 xs:mr-0 xs:mb-4">
          <EnvelopeIcon
            color="yellow"
            width={20}
            height={20}
            className="mr-2"
          />
          <p className="text-xs">info@IRDBalancinguk.co.uk</p>
        </span>
      </div>
      <div className="tlf flex flex-row">
        <span className="flex md:flex-row items-center mr-4 md:mb-0 xs:mr-0 xs:mb-2">
          <MapIcon color="yellow" width={20} height={20} className="mr-2" />
          <p className="text-xs">IRD Balancing UK , 101 Meadow Lane, Ellesmere Port Cheshire, CH65 4TY</p>
        </span>
      </div>
    </div>
  );
};

export default ContactHeader;
