import React from "react";
import bg from "../../assets/WORKFLOW/workflowas.png";
import Image from "next/image";
import SectionOne from "@/components/Workflow/SectionOne";
import SectionTwo from "@/components/Workflow/SectionTwo";

function page() {
  return (
    <div className=" w-full h-[100%] relative text-white">
      <Image src={bg} alt="bg" className=" w-full h-full" />
      <div className=" absolute top-0 left-0 w-full flex justify-center">
        <div className=" w-[1200px] flex flex-col justify-center">
          <SectionOne />
          <SectionTwo />
        </div>
      </div>
    </div>
  );
}

export default page;
