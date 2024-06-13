import Image from "next/image";
import React from "react";

const SectionTwo = () => {
  return (
    <div className=" px-10 md:px-0 py-10 w-full md:h-screen flex  justify-center">
      <div className=" flex flex-col gap-20 items-center">
        <div className="   flex flex-col gap-1 md:gap-4 items-center  w-full">
          <h1 className="text-gray-400 text-xl text-center font-light md:text-gray-400">
            Grow together with HEXEN
          </h1>
          <h1 className="w-5/6 text-3xl md:text-5xl  font-normal md:w-2/5 text-center">
            We Craft brands from scratch
          </h1>
          <h1 className=" text-8xl md:text-[200px] font-extrabold text-white">
            &quot;0&quot;
          </h1>
        </div>

        <div className=" flex flex-col gap-5  w-full">
          <div className=" flex items-center md:justify-between gap-4 md:gap-0 ">
            <div className="hidden md:block w-1/2 md:w-1/3 h-[2px] bg-gradient-to-r from-white to-slate-600"></div>
            <h1 className=" text-3xl md:text-5xl   font-bold text-gray-200">
              Who we are
            </h1>
            <div className=" md:w-1/3 w-2/5 h-[2px] bg-gradient-to-r from-white to-slate-600"></div>
          </div>
          <div className=" w-full md:w-[1200px] h-auto md:text-xl  md:text-center text-gray-400">
            Welcome to Hexen, where we transform the web development landscape.
            With a proven track record of successful projects for numerous
            companies, we help businesses grow and thrive online. Unlike others,
            we don&apos;t just claim that &quot;the customer is king&quot; — we live it. Our
            actions speak louder than words, as our experienced experts
            consistently deliver exceptional results that leave our clients
            satisfied and our connections strong. At Hexen, your success is our
            mission.
          </div>
          <div className="hidden md:block w-full h-[2px] bg-gradient-to-l from-white to-gray-700 mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
