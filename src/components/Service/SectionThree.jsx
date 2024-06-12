"use client";
import Image from "next/image";
import React, { useState } from "react";
import folderTwo from "../../assets/SERVICE/services/folderservice.webp";
import mobilefolderTwo from "../../assets/SERVICE/services/servicefoldertwo (1).png";

function SectionThree() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className=" w-[] h-[1000px] relative mt-10 md:mt-28 px-5 md:px-0">
      <Image
        src={folderTwo}
        alt=" folder"
        width={1100}
        className={`hidden md:block transition-max-height duration-700 ease-in-out ${
          openSection != null ? `h-[900px] ` : "h-[800px]"
        } `}
      />
      <Image
        src={mobilefolderTwo}
        alt=" folder"
        className={`block md:hidden transition-max-height duration-700 ease-in-out ${
          openSection != null ? `h-[800px] ` : "h-[600px]"
        } `}
      />
      <div className=" w-full h-full  absolute top-0 left-0 py-16 md:py-10 px-10 ">
        <div className=" w-full flex flex-col gap-8">
          <div className=" w-1/3">
            <h1 className=" text-7xl uppercase italic font-extrabold">
              tech service
            </h1>
          </div>
          <div className=" flex flex-col gap-5 md:gap-8 w-11/12 md:mt-10">
            <div
              onClick={() => toggleSection("one")}
              className=" flex flex-col "
            >
              <div className=" flex justify-between items-center gap-5 md:gap-0 text-xl md:text-4xl font-medium">
                <h1>Web Design</h1>
                <div className=" h-8 w-8 bg-white rounded-full flex items-center justify-center text-black">
                  -
                </div>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openSection === "one" ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="mt-5 md:w-3/4">
                  Our web designing service focuses on creating visually
                  stunning and user-centric designs. We ensure your website is
                  aesthetically pleasing and offers an intuitive user
                  experience, capturing the essence of your brand.
                </p>
              </div>
            </div>
            <hr />
            <div
              onClick={() => toggleSection("two")}
              className=" flex flex-col "
            >
              <div className=" flex justify-between items-center gap-5 md:gap-0 text-xl md:text-4xl font-medium">
                <h1>Frontend Development</h1>
                <div className=" h-8 w-8 bg-white rounded-full flex items-center justify-center text-black">
                  -
                </div>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openSection === "two" ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="mt-5 md:w-3/4">
                  Our frontend development team crafts responsive,
                  high-performance websites using the latest technologies. We
                  ensure your site is fast, reliable, and provides a seamless
                  and engaging user experience across all devices.
                </p>
              </div>
            </div>
            <hr />
            <div
              onClick={() => toggleSection("three")}
              className=" flex flex-col "
            >
              <div className=" flex justify-between items-center gap-5 md:gap-0 text-xl md:text-4xl font-medium">
                <h1>Backend Development</h1>
                <div className=" h-8 w-8 bg-white rounded-full flex items-center justify-center text-black">
                  -
                </div>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openSection === "three" ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="mt-5 md:w-3/4">
                  Our backend development services create secure and efficient
                  systems that power your website&apos;s functionality. We focus
                  on building scalable backend solutions that support your
                  site&apos;s performance and reliability.
                </p>
              </div>
            </div>
            <hr />
            <div
              onClick={() => toggleSection("four")}
              className=" flex flex-col "
            >
              <div className=" flex justify-between items-center gap-5 md:gap-0 text-xl md:text-4xl font-medium">
                <h1>CMS Solutions</h1>
                <div className=" h-8 w-8 bg-white rounded-full flex items-center justify-center text-black">
                  -
                </div>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openSection === "four" ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="mt-5 md:w-3/4">
                  We implement powerful content management systems that simplify
                  website management. Our CMS solutions allow you to easily
                  update and manage your content, ensuring your site remains
                  dynamic and relevant.
                </p>
              </div>
            </div>
            <hr />
            <div
              onClick={() => toggleSection("five")}
              className=" flex flex-col "
            >
              <div className=" flex justify-between items-center gap-5 md:gap-0 text-xl md:text-4xl font-medium">
                <h1>E - Commerce solution</h1>
                <div className=" h-8 w-8 bg-white rounded-full flex items-center justify-center text-black">
                  -
                </div>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openSection === "five" ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="mt-5 md:w-3/4">
                  Our e-commerce solutions are designed to create seamless,
                  secure online shopping experiences. We build user-friendly
                  e-commerce platforms that drive sales, enhance customer
                  satisfaction, and support your business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
