import React from "react";
import logo from "../../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";
import Image from "next/image";
import workFlowMainImage from "../../assets/WORKFLOW/Container.webp";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { TbMenu } from "react-icons/tb";
import Navbar from "../Navbar";

function SectionOne() {
  return (
    <div>
      <div className=" px-5 md:px-0">
        <Navbar />
      </div>
      <div className=" w-full flex justify-center ">
        <div className=" md:w-[1200px]  h-auto min-h-screen flex flex-col  justify-center pb-10 px-5 md:px-0">
          <div className=" flex flex-col items-center w-full gap-10">
            <div className="h-full w-full justify-center mt-20 flex flex-col items-center relative md:gap-10 gap-5">
              <Image
                src={workFlowMainImage}
                alt="intro image"
                className=" hidden md:block"
              />
              <Image
                src={workFlowMainImage}
                width={1000}
                alt="intro image"
                className=" block md:hidden"
              />
              <div className=" absolute w-full h-32 flex justify-center top-[-100px] md:top-[60px] ">
                <div className=" md:w-3/6 h-full flex justify-center">
                  <h1 className="w-4/5 text-3xl md:text-6xl text-center text-white font-semibold">
                    Our Workflows that make you easy
                  </h1>
                </div>
              </div>
              <h1 className=" text-center md:w-3/5 text-xl font-light">
                At Hexen, we follow a well-defined workflow to ensure the
                success of every project we undertake. Our process is designed
                to deliver exceptional results, maintaining high standards of
                quality and client satisfaction.
              </h1>
              <button className=" px-6 py-3 bg-black backdrop-blur-md rounded-full text-xl bg-opacity-30">
                Discover workflows
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
