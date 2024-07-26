"use client";
import React from "react";
import folder from "../../assets/folder.png";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import sitevido from "../../../videos/3DComposition2.mp4";
import Video from "next-video";
import foldermobile from "../../assets/folderone.png";
import folderImage from "../../assets/work.png";
import one from "../../assets/websitetwo.svg";
import two from "../../assets/websitethree.svg";
import three from "../../assets/websitefour.svg";

function SectionFour() {
  const handleprocessLeft = () => {
    document.getElementById("process").scrollLeft -= 1160;
  };

  const handleprocessRight = () => {
    document.getElementById("process").scrollLeft += 1160;
  };
  const handlemobileprocessLeft = () => {
    document.getElementById("mobileprocess").scrollLeft -= 332;
  };

  const handlemobileprocessRight = () => {
    document.getElementById("mobileprocess").scrollLeft += 332;
  };
  return (
    <div className=" w-full flex justify-center my-10 px-10 md:px-0">
      <div className=" w-[1200px] ">
        <div className=" flex flex-col gap-5 md:gap-10 ">
          <div className=" flex my-10 items-center gap-4 justify-end">
            <h1 className=" font-light text-violet-500">02</h1>
            <div className=" w-[1px] h-[10px] bg-violet-500"></div>
            <h1 className="  uppercase font-light md:w-32 w-32">our works</h1>
            <div className=" w-2/4 md:w-full h-[1px] bg-gradient-to-r from-gray-600 to-gray-200 "></div>
          </div>
          <div className="hidden md:block w-full flex justify-end gap-10">
            <div className=" w-3/4 h-auto flex items-start gap-5">
              <h1 className=" text-xl text-gray-400  ">
                At Hexen, we pride ourselves on delivering world-class quality
                and standards in every project. We don&apos;t just assemble
                websites; we meticulously discover, refine, and tailor each
                element to meet its unique needs. This dedicated approach
                ensures that every website we create is versatile, innovative,
                and perfectly suited to our client&apos;s goals. Our commitment
                to excellence is evident in the diverse range of websites
                we&apos;ve crafted, each one a testament to our expertise and
                attention to detail.
              </h1>
            </div>
          </div>
          <div className=" block md:hidden flex flex-col gap-5">
            <h1 className=" text-3xl font-semibold">Features</h1>
            <h1 className=" text-gray-300">
              {" "}
              At Hexen, we pride ourselves on delivering world-class quality and
              standards in every project. We don&apos;t just assemble websites;
              we meticulously discover, refine, and tailor each element to meet
              its unique needs. This dedicated approach ensures that every
              website we create is versatile, innovative, and perfectly suited
              to our client&apos;s goals. Our commitment to excellence is
              evident in the diverse range of websites we&apos;ve crafted, each
              one a testament to our expertise and attention to detail.
            </h1>
            {/* pending a div */}
          </div>
          <div className=" hidden md:block  mt-10 relative">
            <Image src={folder} alt="folder" className=" relative" />
            <div className=" absolute top-0 left-0 w-full flex h-full items-center px-10">
              <div className=" flex flex-col gap-5 w-full">
                <div className=" w-full flex items-end justify-between">
                  <div className=" flex flex-col gap-1">
                    <h1 className=" text-8xl font-extrabold italic uppercase">
                      our
                    </h1>
                    <h1 className=" text-8xl font-extrabold italic uppercase">
                      works
                    </h1>
                  </div>
                  {/* <h1 className=" w-2/5 font-medium text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Commodi, laborum veritatis atque perspiciatis quis animi
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Commodi,
                  </h1> */}
                </div>
                <div
                  className=" flex items-center gap-10 overflow-scroll scroll-smooth"
                  id="process"
                >
                  <div className=" w-full h-96 bg-black rounded-3xl flex items-center flex-shrink-0">
                    <div
                      className=" w-2/4 h-full bg-black rounded-l-3xl px-10 py-10 flex flex-col gap-5 "
                      style={{ transitionDuration: "0.5s" }}
                    >
                      {/* <h1 className=" uppercase">rolled meals</h1> */}
                      <h1 className=" text-3xl font-semibold">
                        Bringing Imagination to Life
                      </h1>
                      <h1 className=" text-gray-300">
                        Designed and developed a cutting-edge 3D animation
                        website that showcases high-quality animations and
                        interactive visual experiences
                      </h1>
                    </div>
                    {/*  */}
                    <div className=" w-2/4 h-[300px]">
                      <video
                        width="320"
                        height="240"
                        preload="meta"
                        loop
                        playsInline
                        autoPlay
                        muted
                        className="w-full h-full object-cover"
                      >
                        <source src="/assets/vid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  {/* ---------------------------- */}
                  <div className=" w-full h-96 bg-black rounded-3xl flex items-center flex-shrink-0">
                    <div
                      className=" w-2/4 h-full bg-black rounded-l-3xl px-10 py-10 flex flex-col gap-5 "
                      style={{ transitionDuration: "0.5s" }}
                    >
                      <h1 className=" uppercase">rolled meals</h1>
                      <h1 className=" text-3xl font-semibold">
                        Elegant Online Perfume Shop
                      </h1>
                      <h1 className=" text-gray-300">
                        Created a sophisticated and intuitive e-commerce
                        platform for a perfume shop. The site features a curated
                        selection of fragrances, detailed product descriptions,
                        and an elegant design.
                      </h1>
                    </div>
                    {/*  */}
                    <div className=" w-2/4 h-96">
                      <Image
                        src={one}
                        className=" w-full h-full object-cover rounded-r-3xl"
                      />
                    </div>
                  </div>
                  {/* ------------------------------------- */}
                  <div className=" w-full h-96 bg-black rounded-3xl flex items-center flex-shrink-0">
                    <div
                      className=" w-2/4 h-full bg-black rounded-l-3xl px-10 py-10 flex flex-col gap-5 "
                      style={{ transitionDuration: "0.5s" }}
                    >
                      {/* <h1 className=" uppercase">rolled meals</h1> */}
                      <h1 className=" text-3xl font-semibold">
                        Bespoke Travel Agency Portal
                      </h1>
                      <h1 className=" text-gray-300">
                        Developed a comprehensive travel agency website offering
                        personalized travel itineraries and services. The
                        project includes a dynamic search feature, destination
                        guides, customer testimonials, and booking
                        functionalities.
                      </h1>
                    </div>
                    {/*  */}
                    <div className=" w-2/4 h-96">
                      <Image
                        src={two}
                        className=" w-full h-full object-cover rounded-r-3xl"
                      />
                    </div>
                  </div>
                  {/* ---------------------- */}
                  <div className=" w-full h-96 bg-black rounded-3xl flex items-center flex-shrink-0">
                    <div
                      className=" w-2/4 h-full bg-black rounded-l-3xl px-10 py-10 flex flex-col gap-5 "
                      style={{ transitionDuration: "0.5s" }}
                    >
                      {/* <h1 className=" uppercase">rolled meals</h1> */}
                      <h1 className=" text-3xl font-semibold">
                        Versatile E-commerce Platform
                      </h1>
                      <h1 className=" text-gray-300">
                        Engineered a robust e-commerce website catering to a
                        wide range of product categories. Emphasized a seamless
                        shopping experience with features like advanced product
                        filtering, secure checkout, and responsive design.
                      </h1>
                    </div>
                    {/*  */}
                    <div className=" w-2/4 h-96">
                      <Image
                        src={three}
                        className=" w-full h-full object-cover rounded-r-3xl"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex items-center gap-5">
                  <div
                    onClick={handleprocessLeft}
                    className=" w-14 h-14 bg-white rounded-full flex items-center justify-center"
                  >
                    <FaChevronLeft className=" text-2xl text-black" />
                  </div>
                  <div
                    onClick={handleprocessRight}
                    className=" w-14 h-14 bg-white rounded-full flex items-center justify-center"
                  >
                    <FaChevronRight className=" text-2xl text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden block w-full relative mt-5  ">
            <Image src={foldermobile} alt="alt" className=" relative w-full" />

            <div className=" absolute top-0 left-0 w-full flex ">
              <div className="px-5 flex flex-col  w-full ">
                <div className="  py-5 flex w-full items-end justify-between">
                  <div className=" flex flex-col">
                    <h1 className=" text-3xl font-bold uppercase italic">
                      our
                    </h1>
                    <h1 className=" text-3xl font-bold uppercase italic">
                      works
                    </h1>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <div
                      onClick={handlemobileprocessLeft}
                      className=" w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
                    >
                      <FaChevronLeft />
                    </div>
                    <div
                      onClick={handlemobileprocessRight}
                      className=" w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
                    >
                      <FaChevronRight />
                    </div>
                  </div>
                </div>

                <div
                  className=" flex items-center gap-10 overflow-scroll scroll-smooth"
                  id="mobileprocess"
                >
                  <div className=" w-full flex items-center   h-[345px] bg-black  rounded-2xl flex-shrink-0">
                    <div className=" flex flex-col gap-10">
                      <div className="ml-5">
                        <h1 className=" text-white uppercase  ">
                          Innovative 3D Animation Solutions
                        </h1>
                      </div>
                      {/* <Video
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}
                        src={sitevido}
                      /> */}
                      <video
                        width="320"
                        height="240"
                        preload="meta"
                        loop
                        playsInline
                        autoPlay
                        muted
                        // className="w-full h-full object-cover"
                      >
                        <source src="/assets/vid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div className=" w-full flex items-center   h-[345px] bg-black  rounded-2xl flex-shrink-0">
                    <div className=" flex flex-col gap-10">
                      <div className="ml-5">
                        <h1 className=" text-white uppercase  pr-10">
                          Elegant Online Perfume Shop
                        </h1>
                      </div>
                      <Image src={one} />
                    </div>
                  </div>
                  <div className=" w-full flex items-center   h-[345px] bg-black  rounded-2xl flex-shrink-0">
                    <div className=" flex flex-col gap-10">
                      <div className="ml-5">
                        <h1 className=" text-white uppercase  ">
                          Bespoke Travel Agency Portal
                        </h1>
                      </div>
                      <Image src={two} />
                    </div>
                  </div>
                  <div className=" w-full flex items-center   h-[345px] bg-black  rounded-2xl flex-shrink-0">
                    <div className=" flex flex-col gap-10">
                      <div className="ml-5">
                        <h1 className=" text-white uppercase  ">
                          Versatile E-commerce Platform
                        </h1>
                      </div>
                      <Image src={three} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
