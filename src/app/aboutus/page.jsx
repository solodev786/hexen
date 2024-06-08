import Image from "next/image";
import React from "react";
import deskBg from "../../assets/ABOUT/aboutusbg.png";
import SectionOne from "@/components/Aboutus/SectionOne";
import SectionTwo from "@/components/Aboutus/SectionTwo";

function page() {
  return (
    <div className=" w-full h-[100%] relative">
      <div className=" h-full w-full relative">
        <Image src={deskBg} alt="bg" className=" relative h-[100%]" />
        <div className=" w-full h-full absolute top-0 left-0 text-white py-10">
          <SectionOne />
          <SectionTwo />
        </div>
      </div>
    </div>
  );
}

export default page;
