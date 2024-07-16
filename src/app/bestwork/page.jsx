import Image from "next/image";
import React from "react";
import bg from "../../assets/PROJECTS.svg";
import SectionOne from "@/components/OurBestWork/SectionOne";
import SectionTwo from "@/components/OurBestWork/SectionTwo";
import SectionThree from "@/components/OurBestWork/SectionThree";
import mobileBg from "../../assets/best works.svg";
import Footer from "@/components/Footer";



function page() {
  return (
    <div className=" w-full h-[100%] relative text-white">
      <div className=" h-full bg-gradient-to-b from-[#202020] via-black to-[#202020] w-full flex justify-center">
        <div className="  w-full h-full flex flex-col justify-between items-center">
          <div className=" md:w-full flex flex-col justify-center">
            <SectionOne />
            <SectionThree />
            <SectionTwo />
          </div>
          <div className="w-full mt-32 md:mt-[300px] pb-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
