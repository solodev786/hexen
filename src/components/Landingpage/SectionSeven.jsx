import React from "react";
import roundOne from "../../assets/round-one.png";
import roundTwo from "../../assets/round-two.png";
import Image from "next/image";
import logo from "../../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";

function SectionSeven() {
  return (
    <div className=" w-full flex flex-col items-center gap-20">
      <div className=" w-full flex justify-center mt-20 md:mt-48">
        <div className=" w-[1200px] h-auto relative  ">
          <div className=" absolute w-full h-96 top-0 left-0 ">
            <div className=" flex flex-col gap-5 w-full h-full items-center">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={roundOne}
                  alt="round one"
                  width={150}
                  className=" hidden md:block hover:scale-110 hover:rotate-12  absolute left-64 top-48 "
                  style={{ transitionDuration: "0.5s" }}
                />
                <Image
                  src={roundOne}
                  alt="round one"
                  width={100}
                  className=" block md:hidden hover:scale-110 hover:rotate-12  absolute left-64 top-48 "
                  style={{ transitionDuration: "0.5s" }}
                />
                <h1 className=" text-4xl md:text-7xl text-center md:w-4/6 z-10">
                  The future of your industry{" "}
                  <span className=" text-violet-500 ">starts here</span>
                </h1>
                <Image
                  src={roundTwo}
                  alt="round one"
                  width={200}
                  className=" hidden md:block hover:scale-110 hover:rotate-12  ml-10 absolute top-[-30px] right-52"
                  style={{ transitionDuration: "0.5s" }}
                />
                <Image
                  src={roundTwo}
                  alt="round one"
                  width={150}
                  className=" block md:hidden hover:scale-110 hover:rotate-12  ml-10 absolute top-[10px] right-52"
                  style={{ transitionDuration: "0.5s" }}
                />
              </div>
              <button className=" w-32 h-14 flex items-center justify-center bg-gradient-to-b from-gray-800 backdrop-blur-lg border border-gray-400 bg-opacity-50 to-violet-900 rounded-2xl">
                Book a demo
              </button>
            </div>
          </div>
          {/* <div className=" flex justify-center w-full">
          <div className=" w-full justify-center ">
            <div className=" flex w-full justify-between">
              <Image
                src={roundOne}
                alt="round one"
                width={200}
                className=" hover:scale-150 hover:rotate-12  ml-10"
                style={{ transitionDuration: "0.5s" }}
              />
              <Image
                src={roundTwo}
                alt="round one"
                width={200}
                className=" hover:scale-150 hover:rotate-12  ml-10"
                style={{ transitionDuration: "0.5s" }}
              />
            </div>
            <div className=" absolute top-0 left-0">
              <h1 className=" text-7xl text-center w-2/3">
                The future of your industry{" "}
                <span className=" text-violet-500">start here.</span>
              </h1>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default SectionSeven;
