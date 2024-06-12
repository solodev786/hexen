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
      <Image src={bg} alt="bg" className=" hidden md:block w-full h-full" />
      <Image
        src={mobileBg}
        alt="bg"
        className=" block md:hidden w-full h-full"
      />
      <div className=" absolute h-full top-0 left-0 w-full flex justify-center">
        <div className="  w-full h-full flex flex-col justify-between items-center">
          <div className=" md:w-[1200px] flex flex-col justify-center">
            <SectionOne />
            <SectionThree />
            <SectionTwo />
          </div>
          <div className="w-full pb-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
