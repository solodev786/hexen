import React from "react";

import SectionOne from "@/components/Workflow/SectionOne";
import SectionTwo from "@/components/Workflow/SectionTwo";
import SectionThree from "@/components/Workflow/SectionThree";
import SectionFour from "@/components/Workflow/SectionFour";
import SectionFive from "@/components/Workflow/SectionFive";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function page() {
  return (
    <div className=" w-full h-[100%] relative text-white">
      <div className=" bg-black h-full w-full flex justify-center">
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
