import React from "react";
import bg from "../../assets/WORKFLOW (1).svg";
import Image from "next/image";
import SectionOne from "@/components/Workflow/SectionOne";
import SectionTwo from "@/components/Workflow/SectionTwo";
import SectionThree from "@/components/Workflow/SectionThree";
import SectionFour from "@/components/Workflow/SectionFour";
import SectionFive from "@/components/Workflow/SectionFive";
import mobileBg from "../../assets/workflow.svg";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className=" w-full h-[100%] relative text-white">
      {/* <Image src={bg} alt="bg" className=" w-full h-full hidden md:block" />
      <Image
        src={mobileBg}
        alt="bg"
        className=" w-full h-full block md:hidden"
      /> */}
      <div className=" bg-gradient-to-b from-blue-800 via-black to-violet-600 h-full w-full flex justify-center">
        <div className=" w-full flex flex-col h-full justify-between pb-5">
          <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
          </div>
          <div className=" mt-32 pb-10 md:mt-[300px]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
