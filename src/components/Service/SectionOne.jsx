import React from "react";
import Image from "next/image";
import logo from "../../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";
import folder from "../../assets/SERVICE/services/folderservicemain.webp";
import website from "../../assets/SERVICE/services/website.webp";
import mobilefolderone from "../../assets/SERVICE/services/servicefolderone (1).png";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { TbMenu } from "react-icons/tb";
function SectionOne() {
  return (
    <div className=" flex md:h-[1000px] flex-col gap-10 px-5 md:px-0">
      <div className=" w-full flex justify-center ">
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
      </div>
      <div className=" flex flex-col gap-5">
        <h1 className=" text-4xl md:text-6xl font-semibold">Service</h1>
        <h1 className=" md:w-2/3">
          At Hexen, we offer a comprehensive suite of web development services
          designed to bring your digital vision to life. Whether you&apos;re
          looking to build a stunning website from scratch, revamp your existing
          site, or implement cutting-edge web technologies, our expert team is
          here to help.
        </h1>
        <div className=" w-full h-96 relative hidden md:block">
          <Image src={folder} alt="folder" />
          <div className=" w-full h-full absolute top-0 left-0 pb-10 pt-24 px-10 ">
            <div className=" w-full flex flex-col gap-10">
              <div className=" w-full flex justify-between items-center">
                <h1 className=" w-1/2 text-7xl font-semibold uppercase">
                  End- to-end product development
                </h1>
                <div className=" w-72 rounded-3xl h-52 bg-white">
                  <Image src={website} alt="website" />
                </div>
              </div>
              <hr />
              <div className=" w-full justify-between flex items-center">
                <div className=" flex w-3/5 gap-10">
                  <div className=" flex items-center gap-5 w-3/4">
                    <h1 className=" text-6xl font-semibold">30+</h1>
                    <h1 className=" uppercase text-4xl">Efficient developers</h1>
                  </div>
                  <div className=" flex items-center gap-5 w-1/2">
                    <h1 className=" text-6xl font-semibold">5+</h1>
                    <h1 className=" uppercase text-4xl">collaboration around the world</h1>
                  </div>
                </div>
                <div className=" px-8 py-2 bg-white rounded-full text-black">
                  <h1>Let&apos;s Discuss</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full relative block md:hidden">
          <Image src={mobilefolderone} alt="folder" className="" />
          <div className=" absolute top-0 left-0 flex flex-col gap-5  pt-16  px-5 w-full">
            <h1 className=" text-4xl font-semibold uppercase">
              end-to-end product development
            </h1>
            <hr />
            <div className=" flex items-center gap-10 justify-between">
              <h1 className=" text-5xl font-bold">30+</h1>
              <h1 className=" uppercase text-xl">Efficient developers</h1>
            </div>
            <hr />
            <div className=" flex items-center gap-16">
              <h1 className=" text-5xl font-bold">5+</h1>
              <h1 className=" uppercase text-xl">Collaboration around the world</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
