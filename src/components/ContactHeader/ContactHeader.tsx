import React from "react";
import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/solid";

const ContactHeader = () => {
  return (
    <div className="flex flex-column justify-between w-full px-10 py-2 bg-zinc-900 text-white">
      <div className="tlf flex flex-column">
        <span className="flex flex-column items-center mr-4">
          <DevicePhoneMobileIcon color="yellow" width={20} height={20} className="mr-2"/>
          +44 (0) 151 345 6784
        </span>
        <span className="flex flex-column items-center mr-4">
          <EnvelopeIcon color="yellow" width={20} height={20} className="mr-2"/>
          info@IRDBalancinguk.co.uk
        </span>
      </div>
      <div className="tlf flex flex-column">
        <span className="flex flex-column items-center mr-4">
          <MapIcon color="yellow" width={20} height={20} className="mr-2"/>
          IRD Balancing UK , 101 Meadow Lane, Ellesmere Port Cheshire, CH65 4TY
        </span>
      </div>
    </div>
  );
};

export default ContactHeader;
