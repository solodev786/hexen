import Image from "next/image";
import React from "react";
import logo from "../../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { TbMenu } from "react-icons/tb";
function SectionOne() {
  return (
    <div className=" w-full h-screen flex justify-center items-center px-5 md:px-0 ">
      <div className=" flex flex-col w-full h-full gap-20 items-center">
        <div className=" w-full flex justify-between gap-10 items-center pt-10 ">
          <div className="w-full hidden md:block">
            <div className=" w-full flex justify-end">
              <div className="w-full flex items-center gap-16 py-3 border-gray-500 border-t border-b  justify-center">
                <Link href={"/"}>
                  <h1 className=" uppercase">Home</h1>
                </Link>
                <Link href={"/aboutus"}>
                  <h1 className=" uppercase">about</h1>
                </Link>
                <Link href={"/service"}>
                  <h1 className=" uppercase">service</h1>
                </Link>
              </div>
            </div>
          </div>
          <Image src={logo} width={100} className=" hidden md:block" />

          <div className="w-full md:hidden flex flex-col gap-5">
            <div className=" w-full flex justify-between items-center">
              <Image src={logo} width={80} className=" block md:hidden " />
              <Link href={"/mobileMenu"}>
                <TbMenu className=" text-5xl" />
              </Link>
            </div>
          </div>

          <div className="w-full hidden md:block">
            <div className=" w-full flex justify-end">
              <div className="w-full flex items-center gap-16 py-3 border-gray-500 border-t border-b  justify-center">
                <Link href={"/bestwork"}>
                  <h1 className=" uppercase">projects</h1>
                </Link>
                <Link href={"/workflow"}>
                  <h1 className=" uppercase">work flow</h1>
                </Link>
                <Link href={"/yourzone"}>
                  <h1 className=" uppercase">for you</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-20 flex flex-col gap-5 items-center text-center">
          <h1 className=" text-5xl md:text-8xl font-extrabold">Your zone</h1>
          <h1 className=" w-full md:w-2/5 text-center">
            Are you new to the world of websites and unsure about how they work
            or what benefits they offer? You're in the right place
          </h1>
          <button className=" px-5 py-2 bg-violet-600 rounded-full bg-opacity-50 backdrop-blur-lg">
            Discover workflows
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
