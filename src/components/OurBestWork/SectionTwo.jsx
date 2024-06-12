import React from "react";
import pone from "../../assets/our best works/Group 58.webp";
import ptwo from "../../assets/our best works/Group 59.webp";
import pthree from "../../assets/our best works/Group 60.webp";
import pfour from "../../assets/our best works/Group 61.webp";
import Image from "next/image";

function SectionTwo() {
  return (
    <div className=" w-full flex flex-wrap gap-10 items-center justify-center px-5 md:px-0">
      <div className=" flex flex-col gap-3 ">
        <Image src={pone} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
            <h1 className=" uppercase">e commerce</h1>
            <h1 className=" text-3xl w-11/12">A stunning website for your abaya shop</h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 ">
        <Image src={ptwo} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
            <h1 className=" uppercase">e commerce</h1>
            <h1 className=" text-3xl w-11/12">A stunning website for your abaya shop</h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 ">
        <Image src={pthree} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
            <h1 className=" uppercase">e commerce</h1>
            <h1 className=" text-3xl w-11/12">A stunning website for your abaya shop</h1>
        </div>
      </div>
      <div className=" flex flex-col gap-3 ">
        <Image src={pfour} alt="pone" width={550} />
        <div className=" flex flex-col gap-2">
            <h1 className=" uppercase">e commerce</h1>
            <h1 className=" text-3xl w-11/12">A stunning website for your abaya shop</h1>
        </div>
      </div>
      {/* <Image src={ptwo} alt="pone" width={550} />
      <Image src={pthree} alt="pone" width={550} />
      <Image src={pfour} alt="pone" width={550} /> */}
    </div>
  );
}

export default SectionTwo;
