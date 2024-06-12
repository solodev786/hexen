"use client";
import React, { useState } from "react";
import logo from "../../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";
import intro from "../../assets/HEXEN WEBSITE ASSETS/homepage_quote.png";
import { PiMouseSimpleThin } from "react-icons/pi";
import { BsMouse } from "react-icons/bs";
import mobileImage from "../../assets/Mindset.png";
import { IoMdMenu } from "react-icons/io";
import { TbMenu } from "react-icons/tb";

import Image from "next/image";
import Link from "next/link";
const Main = () => {
  return (
    <div className=" w-full  md:h-screen py-10 flex justify-center">
      <div className="w-full flex flex-col  md:gap-10 items-center">
        <div className=" w-4/5 flex justify-between gap-10 items-center  ">
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

        <Image
          src={mobileImage}
          alt="image"
          width={300}
          className=" block md:hidden"
        />
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
