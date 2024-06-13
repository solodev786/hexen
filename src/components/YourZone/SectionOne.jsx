import React from "react";
import Navbar from "../Navbar";
function SectionOne() {
  return (
    <div>
      <div className=" px-5 md:px-0">
        <Navbar />
      </div>
      <div className=" w-full h-screen flex justify-center items-center px-5 md:px-0 ">
        <div className=" flex flex-col w-full h-full gap-20 items-center">
          <div className=" mt-20 flex flex-col gap-5 items-center text-center">
            <h1 className=" text-5xl md:text-8xl font-extrabold">Your zone</h1>
            <h1 className=" w-full md:w-2/5 text-center">
              Are you new to the world of websites and unsure about how they
              work or what benefits they offer? You&apos;re in the right place
            </h1>
            <button className=" px-5 py-2 bg-violet-600 rounded-full bg-opacity-50 backdrop-blur-lg">
              Discover workflows
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
