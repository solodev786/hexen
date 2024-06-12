import React from "react";
import logo from "../../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";
import Image from "next/image";
import workFlowMainImage from "../../assets/WORKFLOW/Container.webp";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { TbMenu } from "react-icons/tb";

function SectionOne() {
  return (
    <div className=" w-full flex justify-center ">
      <div className=" w-[1200px]  h-auto min-h-screen flex justify-center py-10 px-5 md:px-0">
        <div className=" flex flex-col items-center w-full gap-10">
          <div className=" w-full flex justify-between gap-10 items-center  ">
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
          <div className="h-full w-full justify-center mt-20 flex flex-col items-center relative md:gap-10 gap-5">
            <Image
              src={workFlowMainImage}
              alt="intro image"
              className=" hidden md:block"
            />
            <Image
              src={workFlowMainImage}
              width={700}
              alt="intro image"
              className=" block md:hidden"
            />
            <div className=" absolute w-full h-32 flex justify-center top-[60px] md:top-[-55px]">
              <div className=" md:w-3/6 h-full flex justify-center">
                <h1 className="w-4/5 text-3xl md:text-6xl text-center text-white font-semibold">
                  Our Workflows that make you easy
                </h1>
              </div>
            </div>
            <h1 className=" text-center md:w-3/5 text-xl font-light">
              At Hexen, we follow a well-defined workflow to ensure the success
              of every project we undertake. Our process is designed to deliver
              exceptional results, maintaining high standards of quality and
              client satisfaction.
            </h1>
            <button className=" px-6 py-3 bg-black backdrop-blur-md rounded-full text-xl bg-opacity-30">
              Discover workflows
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
