import React from "react";
import { TiMinusOutline } from "react-icons/ti";
function MobileMenu() {
  return (
    <div className="block md:hidden">
      <div className=" w-full h-screen bg-[#202020] text-white flex py-10 px-10">
        <div className=" flex flex-col h-full justify-between">
          <div className=" flex flex-col gap-10">
            <div className=" w-full flex justify-end">
              <TiMinusOutline className=" text-4xl" />
            </div>
            <div className=" flex flex-col gap-5 uppercase">
              <h1>Home</h1>
              <h1>About</h1>
              <h1>Service</h1>
              <h1>projects</h1>
              <h1>workflow</h1>
              <h1>your zone</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default MobileMenu;
