import Main from "@/components/Landingpage/Main";
import SectionTwo from "@/components/Landingpage/SectionTwo";
import SectionThree from "@/components/Landingpage/SectionThree";
import SectionFour from "@/components/Landingpage/SectionFour";
import SectionFive from "@/components/Landingpage/SectionFive";
import SectionSix from "@/components/Landingpage/SectionSix";
import SectionSeven from "@/components/Landingpage/SectionSeven";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className=" relative">
      <div className="  h-full">
        {/* <Image
          src={svgBack}
          alt="bg"
          className=" w-full h-full relative hidden md:block"
        /> */}
  
        <div className=" top-0 h-full left-0 w-full flex justify-center">
          <div className="w-full h-auto  bg-gradient-to-b from-blue-800 via-black to-violet-600 flex flex-col justify-between items-center ">
            <div className=" w-full  md:w-[1200px] flex flex-col  justify-center text-white">
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
            <div className="w-full  text-white mt-32 md:mt-[600px] pb-20">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
