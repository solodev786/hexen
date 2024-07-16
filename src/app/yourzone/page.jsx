import React from "react";
import bg from "../../assets/thoughts.svg";
import Homebg from "../../assets/FOR YOU.svg";
import Image from "next/image";
import SectionOne from "@/components/YourZone/SectionOne";
import SectionTwo from "@/components/YourZone/SectionTwo";
import SectionThree from "@/components/YourZone/SectionThree";
import SectionFour from "@/components/YourZone/SectionFour";
import SectionFive from "@/components/YourZone/SectionFive";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className=" w-full  relative text-white">
      {/* <Image src={Homebg} alt="bg" className=" w-full h-full hidden md:block" />
      <Image src={bg} alt="bg" className=" w-full h-full  block md:hidden" /> */}
      <div className="  h-full bg-gradient-to-b from-[#202020] via-black to-[#202020] w-full flex justify-center">
        <div className="w-full h-full flex flex-col justify-between items-center">
          <div className=" md:w-[1200px] flex flex-col  justify-center">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
          </div>
          <div className="w-full pb-10 mt-32 md:mt-[300px]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
