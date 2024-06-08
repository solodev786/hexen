import React from "react";
import logo from "../../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";
import intro from "../../assets/HEXEN WEBSITE ASSETS/homepage_quote.png";
import { PiMouseSimpleThin } from "react-icons/pi";
import { BsMouse } from "react-icons/bs";
import mobileImage from "../../assets/Mindset.png";

import Image from "next/image";
const Main = () => {
  return (
    <div className=" w-full  md:h-screen py-10 flex justify-center">
      <div className=" flex flex-col  md:gap-10 items-center">
        <Image src={logo} alt="bg" width={100} />
        <Image src={mobileImage} alt="image" width={300} className=" block md:hidden" />
        <div className=" flex flex-col gap-1 items-center">
          <Image src={intro} alt="intro" width={900} />
          <h1 className=" w-2/5 text-center md:w-full md:text-2xl font-light  underline">
            Lets start discussing about your project
          </h1>
        </div>
        <div className=" flex flex-col gap-3 items-center mt-20 md:mt-5 animate-bounce">
          <BsMouse className=" text-3xl font-thin" />
          <h1 className=" uppercase text-lg font-thin">Scroll down</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
