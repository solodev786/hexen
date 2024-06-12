import Main from "@/components/Landingpage/Main";
import SectionTwo from "@/components/Landingpage/SectionTwo";
import Image from "next/image";

import SectionThree from "@/components/Landingpage/SectionThree";
import SectionFour from "@/components/Landingpage/SectionFour";
import SectionFive from "@/components/Landingpage/SectionFive";
import SectionSix from "@/components/Landingpage/SectionSix";
import SectionSeven from "@/components/Landingpage/SectionSeven";
import mobileBg from "../assets/HOMEPAGE (2).svg";
import svgBack from "../assets/HOME PAGE.svg";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className=" relative">
      <div className="  h-full  relative">
        <Image
          src={svgBack}
          alt="bg"
          className=" w-full h-full relative hidden md:block"
        />
        <Image
          src={mobileBg}
          alt="bg"
          className="w-full h-full relative block md:hidden"
        />
        <div className=" absolute top-0 h-full left-0 w-full flex justify-center">
          <div className="w-full h-full flex flex-col justify-between items-center">
            <div className=" w-full md:w-[1200px] flex flex-col  justify-center text-white">
              <Main />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <SectionSix />
              <div className=" hidden md:block">
                <SectionSeven />
              </div>
            </div>
            <div className="w-full pb-10 text-white">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
