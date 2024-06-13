import React from "react";
import pone from "../../assets/our best works/Group 58.webp";
import ptwo from "../../assets/our best works/Group 59.webp";
import pthree from "../../assets/our best works/Group 60.webp";
import pfour from "../../assets/our best works/Group 61.webp";
import Image from "next/image";

function SectionTwo() {
  return (
    <div className=" w-full flex flex-wrap gap-10 items-center justify-center px-5 md:px-0">
      <div className=" flex flex-col gap-3 md:w-2/5 ">
        <Image src={pone} alt="pone" width={650} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">e commerce</h1>
          <h1 className="text-xl md:text-3xl ">
            A stunning website for an abaya e-commerce shop
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 md:w-2/5">
        <Image src={ptwo} alt="pone" width={650} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">business website</h1>
          <h1 className="text-xl md:text-3xl ">
            A classic website for a metal work company
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 md:w-2/5">
        <Image src={pthree} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">Business website</h1>
          <h1 className=" text-xl md:text-3xl ">
            A Beautifull website for a windmill company
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 md:w-2/5">
        <Image src={pfour} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase">Business consultancy</h1>
          <h1 className="text-xl md:text-3xl ">
            A dynamci website for a business consultancy
          </h1>
        </div>
      </div>
      {/* <Image src={ptwo} alt="pone" width={550} />
      <Image src={pthree} alt="pone" width={550} />
      <Image src={pfour} alt="pone" width={550} /> */}
    </div>
  );
}

export default SectionTwo;
