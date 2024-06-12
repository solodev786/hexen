import React from "react";
import logo from "../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";
import Image from "next/image";
function Footer() {
  return (
    <div className=" w-full px-10 flex flex-col gap-5 h-full justify-end ">
      <div className=" md:flex  md:items-start justify-center w-full md:justify-between">
        <Image src={logo} alt="logo" width={150} className=" hidden md:block" />
        <div className=" md:hidden w-full flex justify-center">
          <Image
            src={logo}
            alt="logo"
            width={100}
            className=" block md:hidden"
          />
        </div>
        <div className=" flex flex-col gap-5 md:gap-10 mt-10 md:mt-0">
          <hr className=" md:hidden" />
          <div className=" flex flex-col gap-5 md:gap-2 w-full  md:items-end md:text-right text-center">
            <h1 className=" font-semibold md:text-xl">
              Specialized Web Designing Agency
            </h1>
            <h1 className=" md:w-2/3 md:text-right text-center">
              High level experience in web development and designing knowledge,
              producing quality work
            </h1>
          </div>
        </div>
      </div>
      <hr />
      <div className=" w-full flex justify-between items-center text-sm text-center md:text-left">
        <div className=" flex items-center gap-4">
          <h1 className=" uppercase">privacy policy</h1>
          <h1 className=" uppercase">terms & condition</h1>
        </div>
        <div className=" flex items-center gap-4">
          <h1 className=" uppercase">@hexen all right reserved</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
