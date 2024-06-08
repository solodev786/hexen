import React from "react";
import logo from "../../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";
import Image from "next/image";
import workFlowMainImage from "../../assets/WORKFLOW/Container.webp";

function SectionOne() {
  return (
    <div className=" w-full h-auto min-h-screen flex justify-center py-10">
      <div className=" flex flex-col items-center w-full gap-10">
        <div className="  flex justify-center">
          <Image src={logo} alt="logo" width={100} />
        </div>
        <div className=" mt-20 flex flex-col items-center relative gap-10">
          <Image src={workFlowMainImage} alt="intro image" />
          <div className=" absolute w-full h-32 flex justify-center top-[-55px]">
            <div className=" w-3/6 h-full flex justify-center">
              <h1 className=" text-6xl text-center text-white font-semibold">
                Our Workflows that make you easy
              </h1>
            </div>
          </div>
          <h1 className=" text-center w-2/5 text-xl font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            iure exercitationem, corrupti tempora id aliquam quas harum nisi
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
