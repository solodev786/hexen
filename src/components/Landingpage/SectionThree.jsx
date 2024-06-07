import React from "react";
import icon from "../../assets/HEXEN WEBSITE ASSETS/second_logo.png";
import Image from "next/image";
import divone from "../../assets/HEXEN WEBSITE ASSETS/divone.png";
import divtwo from "../../assets/HEXEN WEBSITE ASSETS/divtwo.png";
import divthree from "../../assets/HEXEN WEBSITE ASSETS/divthree.png";
import divfour from "../../assets/HEXEN WEBSITE ASSETS/divfour.png";
import divfive from "../../assets/HEXEN WEBSITE ASSETS/divfive.png";
const SectionThree = () => {
  return (
    <div className=" px-10 md:px-0 w-full md:h-screen flex justify-center py-5 md:py-10">
      <div className=" md:w-[1200px] ">
        <div className=" flex flex-col gap-5 ">
          <div className=" flex items-center gap-4">
            <h1 className=" text-sm text-violet-500">01</h1>
            <div className=" w-[1px] h-[10px] bg-violet-500"></div>
            <h1 className=" uppercase font-extralight">Who we are</h1>
            <div className=" block md:hidden w-1/3 h-[1px] bg-white"></div>
          </div>
          <div className="  md:flex md:items-start md:gap-5">
            <Image
              src={icon}
              alt="logo"
              width={100}
              className=" ml-[-25px] animate-pulse"
            />
            <div className=" flex flex-col gap-10">
              <h1 className=" text-4xl font-semibold mt-[25px] md:w-[800px]">
                We are a{" "}
                <span className=" text-violet-500 ">group of experts</span>{" "}
                looking to help companies leverage technology to do than they
                ever though possible
              </h1>
              <h1 className=" md:w-[800px] text-xl font-light text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto ex fugiat inventore delectus eligendi molestiae? Est
                nostrum accusantium illo, quis cupiditate veritatis nulla beatae
                repellendus nam libero neque reprehenderit eligendi!
              </h1>

              {/* <div className=" flex gap-2 items-end bg-white">
                <div
                  className="w-[500px] h-96 bg-blue-500 rounded-3xl"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 0, 100% 41%, 65% 42%, 65% 72%, 0 72%, 0 0)",
                  }}
                ></div>
                <div className=" w-80 h-32 bg-blue-500 ml-[-170px] mt-[-170px]"></div>
              </div> */}
              <div className=" hidden md:flex md:items-start md:gap-5 ">
                <Image
                  src={divone}
                  alt="divpne"
                  width={500}
                  className=" hover:w-[520px] "
                  style={{ transitionDuration: "0.5s" }}
                />
                <div className=" flex flex-col gap-7">
                  <div
                    className=" w-64 h-32  rounded-3xl  hover:w-[276px]"
                    style={{ transitionDuration: "0.5s" }}
                  >
                    <Image src={divtwo} alt="divtwo" />
                  </div>
                  <div
                    className=" w-[380px] h-36  rounded-3xl ml-[-120px] hover:w-[400px] "
                    style={{ transitionDuration: "0.5s" }}
                  >
                    <Image src={divthree} alt="divthree" />
                  </div>
                </div>
                <div className=" flex flex-col gap-5">
                  <div
                    className=" w-80 h-48 bg-blue-500 flex items-center justify-center  rounded-3xl hover:w-[340px]"
                    style={{ transitionDuration: "0.5s" }}
                  >
                    <Image
                      src={divfour}
                      alt="divfour"
                      className=" w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div
                    className=" w-80 h-20 0 rounded-3xl hover:w-[340px]"
                    style={{ transitionDuration: "0.5s" }}
                  >
                    <Image src={divfive} alt="divfive" />
                  </div>
                </div>
              </div>
              <div className="block md:hidden w-full flex flex-col gap-2">
                <div className=" h-44 w-full bg-white rounded-2xl border-4 border-yellow-500">
                  <Image src={divone} className=" w-full h-full object-cover" />
                </div>
                <div className=" flex gap-2 items-center w-full">
                  <div className=" w-2/3 h-32 bg-white rounded-2xl">
                    <Image
                      src={divtwo}
                      className=" w-full h-full object-cover"
                    />
                  </div>
                  <div className=" w-1/3 h-32 bg-white rounded-2xl">
                    <Image
                      src={divthree}
                      className=" w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className=" w-full h-16 rounded-2xl bg-white ">
                  <Image
                    src={divfour}
                    className=" w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
