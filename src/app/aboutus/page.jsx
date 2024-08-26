import Image from "next/image";
import React from "react";
import deskBg from "../../assets/ABOUT US (1).svg";
import SectionOne from "@/components/Aboutus/SectionOne";
import SectionTwo from "@/components/Aboutus/SectionTwo";
import mobileBg from "../../assets/aboutmobile.svg";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className="  h-auto md:h-auto relative">
      <div className=" h-full w-full relative flex flex-col justify-between">
        <div className="  h-full bg-black flex flex-col justify-between  text-white pb-10 ">
          <div>
            <SectionOne />
            <SectionTwo />
          </div>
          <div className=" mt-32 md:mt-[400px]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
