import Main from "@/components/Landingpage/Main";
import SectionTwo from "@/components/Landingpage/SectionTwo";
import Image from "next/image";
import bg from "../assets/homebg.png";
import SectionThree from "@/components/Landingpage/SectionThree";
import SectionFour from "@/components/Landingpage/SectionFour";
import SectionFive from "@/components/Landingpage/SectionFive";
import SectionSix from "@/components/Landingpage/SectionSix";
import SectionSeven from "@/components/Landingpage/SectionSeven";
import SevenEight from "@/components/Landingpage/SevenEight";
import mobileBg from "../assets/HOMEPAGE (2).png";
export default function Home() {
  return (
    <div className=" relative">
      <div className=" hidden md:block   relative">
        <Image src={bg} alt="bg" className=" h-[100%] relative" />
        <div className=" absolute top-0 left-0 text-white w-full">
          <Main />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
          <SevenEight />
        </div>
      </div>
      <div className=" block md:hidden   relative">
        <Image src={mobileBg} alt="bg" className=" h-auto relative" />
        <div className=" absolute top-0 left-0 text-white w-full">
          <Main />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
          <SevenEight />
        </div>
      </div>
    </div>
  );
}
