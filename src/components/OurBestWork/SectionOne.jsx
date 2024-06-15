import React from "react";
import logo from "../../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { TbMenu } from "react-icons/tb";
import Navbar from "../Navbar";
function SectionOne() {
  return (
    <div className=" md:w-full flex flex-col items-center">
      <div className=" md:w-[1200px]">
        <div className=" px-5 md:px-0">
          <Navbar />
        </div>
        <div className=" w-full h-screen flex flex-col   items-center px-5 md:px-0">
          <div className="w-full h-3/4 md:h-full  flex items-center  justify-center">
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
                Welcome to our showcase of exceptional projects at Hexen. Here,
                we highlight some of our most outstanding work, showcasing the
                creativity, innovation, and expertise that define us. Each
                project represents a unique collaboration with our clients,
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
