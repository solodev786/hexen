import SectionOne from "@/components/Service/SectionOne";
import Image from "next/image";
import React from "react";
import bg from "../../assets/SERVICE (1).svg";
import SectionTwo from "@/components/Service/SectionTwo";
import SectionThree from "@/components/Service/SectionThree";
import SectionFour from "@/components/Service/SectionFour";
import SectionFive from "@/components/Service/SectionFive";
import mobileBg from "../../assets/SERVICE.svg";
import Footer from "@/components/Footer";
function page() {
  return (
    <div className=" w-full h-auto relative text-white">
      <Image src={bg} alt="bg" className=" w-full h-full hidden md:block" />
      <Image
        src={mobileBg}
        alt="bg"
        className=" w-full h-full block md:hidden"
      />
      <div className=" absolute top-0 h-full left-0 w-full flex justify-center">
        <div className="w-full h-full flex flex-col justify-between items-center">
          <div className=" md:w-[1200px] flex flex-col  justify-center">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
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
