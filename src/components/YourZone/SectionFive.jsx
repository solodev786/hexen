import Image from "next/image";
import React from "react";
import cube from "../../assets/diamondforyou.webp";

function SectionFive() {
  return (
    <div className=" w-full justify-center mt-5 md:mt-72">
      <div className=" w-full flex flex-col gap-8 items-center">
        <div className=" w-3/4 text-center">
          <h1 className="  text-4xl font-medium">
            Meet the first version of
            <span className="text-violet-500 "> Hexen</span>
          </h1>
        </div>
        <Image src={cube} width={300} />
        <div className=" flex flex-col text-2xl  md:text-4xl w-full items-center text-center">
          <h1>Need it simpler and faster?</h1>
          <h1>we have a solution for you!</h1>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
