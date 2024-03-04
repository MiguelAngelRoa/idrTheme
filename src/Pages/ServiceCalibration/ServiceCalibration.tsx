import React, { useState } from "react";
import BannerTitle from "../../components/BannerTitle/BannerTitle.tsx";
import BigP from "../../components/BigP/BigP.tsx";
import TextAndImage from "../../components/TextAndImage/TextAndImage.tsx";

const ServiceCalibration = () => {
  return (
    <>
      <BannerTitle title={"El título"} />
      <BigP
        title="Balancing Machine System Service & Calibration"
        parrafo={
          <>
            <p className="mb-5">
              Any company that uses a Balancing Machine to either provide a
              balancing service or for in-house maintenance understands the
              value of having a well serviced and calibrated machine. IRD
              Balancing UK engineers are specialists in the principles and
              application of Balancing Machine Systems. As the IRD agents we are
              specialists in IRD soft bearing machines but can also calibrate
              any manufacturer of Hard bearing machines.
            </p>
            <p className="mb-5">
              By having your Balancing Machine System calibrated by CLENG Ltd
              you ensure
            </p>
            <ul className="pl-5 mb-5">
              <li className="list-disc">
                The optimum performance from your Balancing Machine System.
              </li>
              <li className="list-disc">
                All IRD parts fitted are direct from IRD Balancing.
              </li>
              <li className="list-disc">
                Confidence that your system is giving precise, accurate results.
              </li>
              <li className="list-disc">
                Your ISO accreditation requirements are satisfied.
              </li>
              <li className="list-disc">
                Traceability with a full calibration report and certificate.
              </li>
            </ul>
            <p className="mb-5">
              At CLENG Ltd we believe that the success of your Balancing
              Department is not just based on the Balancing Machine itself but
              also the quality of you Balancing Engineers. That is why a CLENG
              Ltd service and calibration includes the yearly calibration of
              your Balancing Machine System and operator refresher training on
              the day of the visit.
            </p>
            <p className="font-bold mb-5">
              This continuous training will benefit you by including
            </p>
            <ul className="pl-5 mb-5">
              <li className="list-disc">
                Refresher training on the operation of your Balancing Machine
                System.
              </li>
              <li className="list-disc">
                Refresher training on the principles of Balancing.
              </li>
              <li className="list-disc">
                Analysis and discussions on any ongoing balancing application
                issues that your operators may be experiencing.
              </li>
            </ul>
            <p className="mb-5">
              This development of your operator skill-set can not only improve
              the efficiency of your balancing department but could also
              possibly expand its capabilities into new areas of balancing
              service.
            </p>
          </>
        }
      />
      <TextAndImage
        title="Portable Data collectors – Bench repair and calibration"
        paragraph={
          <>
            <p className="text-white mb-4">
              As with all instrumentation they can periodically drift out of
              calibration, at our facility we have a dedicated repair and
              calibration department.
            </p>
            <p className="text-white mb-4">
              This service is provided for a wide range of manufacturers and a
              12 month ISO calibration certificate is issued to ensure that your
              ISO accreditation audit is satisfied.
            </p>
            <p className="text-white mb-4">
              We understand the value this asset has to your company and the
              financial impact this can have when you send the unit away for
              weeks at a time. Therefore, our goal is to turn the unit around
              within 5 days including return shipping.
            </p>
          </>
        }
        heightNumber={540}
        backgroundClass="bg-zinc-700"
      />
      <TextAndImage
        title="Lexsceco E-meter calibration"
        paragraph={
          <>
            <p className="text-black mb-4">
              Here at IRD Balancing UK, we understand that not having your
              equipment for even a day can cut profits and productivity. That's
              why we created the Flux Meter Exchange program. This service
              allows minimum downtime for your CLT by us sending you calibrated
              E Meter with simple instructions on how to swop the unit out. Your
              existing unit is then returned to us.
            </p>
            <p className="text-black mb-4">
              Unfortunately, many of the old meters are now obsolete, meaning we
              can only perform limited repairs and those repairs are going to
              take some time. You can set yourself up for the Flux Meter
              Exchange program by Upgrading your Core Loss Tester. The new Core
              Loss Tester system not only comes with a bunch of new components
              and the eligibility for the Flux Meter Exchange program, but
              additionally comes with the MP 7.0TM software upgrade.
            </p>
          </>
        }
        heightNumber={720}
        backgroundClass="bg-white"
      />
    </>
  );
};

export default ServiceCalibration;
