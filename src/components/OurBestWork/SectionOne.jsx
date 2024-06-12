import React from "react";
import logo from "../../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { TbMenu } from "react-icons/tb";
function SectionOne() {
  return (
    <div className=" w-full h-screen flex flex-col   items-center px-5 md:px-0">
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
      <div className="w-full h-full  flex items-center  justify-center">
        <div className="  flex flex-col items-center gap-5 md:w-2/5 mt-[-50px]">
          <h1 className=" text-5xl md:text-7xl font-extrabold uppercase text-center">
            our best works
          </h1>
          <div className=" flex items-center gap-2">
            <h1 className=" text-4xl font-bold">350</h1>
            <h1 className=" text-4xl font-bold">+</h1>
            <h1 className=" uppercase ">projects done</h1>
          </div>
          <h1 className=" text-center md:mt-10 md:w-11/12">
            Welcome to our showcase of exceptional projects at Hexen. Here, we
            highlight some of our most outstanding work, showcasing the
            creativity, innovation, and expertise that define us. Each project
            represents a unique collaboration with our clients,
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
