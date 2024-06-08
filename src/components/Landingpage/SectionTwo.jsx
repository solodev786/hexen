import Image from "next/image";
import React from "react";


const SectionTwo = () => {
  return (
    <div className=" px-10 md:px-0 py-10 w-full md:h-screen flex  justify-center">
      <div className=" flex flex-col gap-20 items-center">
        <h1 className=" text-2xl font-light text-gray-400 hidden md:block">
          Welcome to the world of HEXEN
        </h1>
        <div className="  md:hidden flex flex-col gap-4 items-center  w-full">
          <h1 className=" text-xl text-center font-light text-gray-400">
            Welcome to the world of HEXEN
          </h1>
          <h1 className=" text-4xl font-normal w-4/4 text-center">
            We Craft brands from scratch
          </h1>
          <h1 className=" text-8xl md:text-[200px] font-extrabold text-white">
            &quot;0&quot;
          </h1>
        </div>
        <h1 className=" hidden md:block text-[200px] font-extrabold text-white">
          &quot;0&quot;
        </h1>
        <div className=" flex flex-col gap-8  w-full">
          <div className=" flex items-center md:justify-between gap-4 md:gap-0 ">
            <div className="hidden md:block w-1/2 md:w-1/3 h-[2px] bg-gradient-to-r from-white to-slate-600"></div>
            <h1 className=" text-3xl md:text-5xl   font-bold text-gray-200">
              Who we are
            </h1>
            <div className=" md:w-1/3 w-2/5 h-[2px] bg-gradient-to-r from-white to-slate-600"></div>
          </div>
          <div className=" w-full md:w-[1200px] h-auto md:text-2xl  md:text-center text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero
            quis fugit nihil, dignissimos incidunt. Soluta, cumque similique
            suscipit ex, harum aliquid, obcaecati quasi iusto repudiandae ut
            laudantium mollitia exercitationem. suscipit ex, harum aliquid,
            obcaecati quasi iusto repudiandae ut laudantium mollitia
            exercitationem.
          </div>
          <div className="hidden md:block w-full h-[2px] bg-gradient-to-l from-white to-gray-700 mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
