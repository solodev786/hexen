import React from "react";
import pone from "../../assets/our best works/Group 58.webp";
import ptwo from "../../assets/our best works/Group 59.webp";
import pthree from "../../assets/our best works/Group 60.webp";
import pfour from "../../assets/our best works/Group 61.webp";
import Image from "next/image";
import five from "../../assets/websitefive.svg";
import six from "../../assets/websitesixx.svg";
import seven from "../../assets/websiteseven.svg";
import eight from "../../assets/websiteight.svg";
import nine from "../../assets/websitenine.svg";
import ten from "../../assets/websiteten.svg";

function SectionTwo() {
  return (
    <div className="  md:w-full md:flex md:flex-wrap md:gap-10 items-center justify-center px-5 md:px-0 ">
      <div className=" flex flex-col gap-3 md:w-1/4 mb-10 md:mb-0">
        <Image src={pone} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">e commerce</h1>
          <h1 className="text-xl md:text-2xl ">
            A stunning website for an abaya e-commerce shop
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 md:w-1/4 mb-10 md:mb-0">
        <Image src={ptwo} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">business website</h1>
          <h1 className="text-xl md:text-2xl ">
            A classic website for a metal work company
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 md:w-1/4 mb-10 md:mb-0">
        <Image src={pthree} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">Business website</h1>
          <h1 className=" text-xl md:text-2xl ">
            A Beautifull website for a windmill company
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 md:w-1/4 mb-10 md:mb-0">
        <Image src={pfour} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">Business consultancy</h1>
          <h1 className="text-xl md:text-2xl ">
            A dynamci website for a business consultancy
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 md:w-1/4 mb-10 md:mb-0">
        <Image src={five} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">Travel agency</h1>
          <h1 className="text-xl md:text-2xl ">
            A dynamci website for a travel agency
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 md:w-1/4 mb-10 md:mb-0">
        <Image src={six} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">Art website</h1>
          <h1 className="text-xl md:text-2xl ">
            A static website for an artist
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 md:w-1/4 mb-10 md:mb-0">
        <Image src={seven} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">E banking</h1>
          <h1 className="text-xl md:text-2xl ">
            A dynamci website for a payment solution company
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 md:w-1/4 mb-10 md:mb-0">
        <Image src={eight} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">Travel blogging</h1>
          <h1 className="text-xl md:text-2xl ">
            A dynamci website for travel blogging
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 md:w-1/4 mb-10 md:mb-0">
        <Image src={nine} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">event management</h1>
          <h1 className="text-xl md:text-2xl ">
            A static website for an event management company
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 md:w-1/4 mb-10 md:mb-0">
        <Image src={ten} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">real estate</h1>
          <h1 className="text-xl md:text-2xl ">
            A static website for a real estate company
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
