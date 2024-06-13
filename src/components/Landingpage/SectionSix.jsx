import React from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdFacebook, MdWhatsapp } from "react-icons/md";
import { TextField } from "@mui/material";
function SectionSix() {
  return (
    <div className=" w-full flex  justify-center mt-20 px-10 md:px-0">
      <div className=" md:w-[1200px] md:h-auto md:flex border md:border-gray-500 rounded-l-3xl md:rounded-3xl ">
        <div className=" hidden md:block w-full md:w-3/5 md:h-full bg-gradient-to-b from-violet-500 to-violet-800 rounded-l-3xl md:rounded-l-3xl px-10 py-10 flex flex-col justify-between ">
          <div className=" flex flex-col gap-5 ">
            <h1 className=" text-5xl font-semibold w-2/3">
              Every project starts with a plan
            </h1>
            <h1 className=" md:w-2/3 font-light text-gray-200">
              Let&apos;s start a project schedule a talk or just say hello!
            </h1>
          </div>
          <div className=" w-full h-32 md:h-52 ">
            <div className=" w-full h-full flex items-end ">
              <div className=" flex flex-col gap-2">
                <h1 className=" uppercase">social media</h1>
                <div className=" flex items-center gap-2 text-3xl">
                  <MdWhatsapp />
                  <MdFacebook />
                  <FaInstagram />
                  <FaTwitter />
                  <FaDiscord />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-2/5 h-auto bg-black rounded-3xl md:rounded-l-none md:rounded-r-3xl px-10 py-10">
          <div className=" w-full h-full flex flex-col ">
            <h1 className=" text-3xl ">How can we help you</h1>
            <div className=" flex flex-col gap-3 mt-10 ">
              <input
                type="text"
                placeholder="Your name"
                className=" border-b-2 bg-black text-white py-2"
                style={{ outline: "none" }}
              />
              <input
                type="text"
                placeholder="Email"
                className=" border-b-2 bg-black text-white py-2"
                style={{ outline: "none" }}
              />
              <input
                type="text"
                placeholder="Phone"
                className=" border-b-2 bg-black text-white py-2"
                style={{ outline: "none" }}
              />
              <input
                type="text"
                placeholder="Message"
                className=" border-b-2 bg-black text-white py-2"
                style={{ outline: "none" }}
              />
              <button className="mt-5 w-full h-10 bg-white rounded-xl flex items-center justify-center font-medium text-black">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
