import Image from "next/image";
import React from "react";
import deskBg from "../../assets/ABOUT US (1).svg";
import SectionOne from "@/components/Aboutus/SectionOne";
import SectionTwo from "@/components/Aboutus/SectionTwo";
import mobileBg from "../../assets/aboutmobile.svg";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className=" w-full h-auto md:h-auto relative">
      <div className=" h-full w-full relative flex flex-col justify-between">
        {/* <Image
          src={deskBg}
          alt="bg"
          className=" relative w-full h-[100%] hidden md:block"
        />
        <Image
          src={mobileBg}
          alt="bg"
          className="w-full relative h-full block md:hidden"
        /> */}

        <div className=" w-full h-full bg-gradient-to-b from-blue-800 via-black to-violet-600 flex flex-col justify-between  text-white py-10 ">
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
