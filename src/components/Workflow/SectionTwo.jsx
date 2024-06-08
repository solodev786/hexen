"use client";
import React from "react";
import rect from "../../assets/WORKFLOW/rect.png";
import Image from "next/image";
import { TfiReload } from "react-icons/tfi";
import { CiCirclePlus } from "react-icons/ci";
import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import useEmblaCarousel from "embla-carousel-react";
function SectionTwo() {
  const [emblaRef] = useEmblaCarousel();

  const handleprocessLeft = () => {
    document.getElementById("process").scrollLeft -= 500;
    const element = document.getElementById("slider");
    const currentMarginLeft =
      parseInt(window.getComputedStyle(element).marginLeft, 10) || 0;
    element.style.marginLeft = `${currentMarginLeft - 100}px`;
  };

  const handleprocessRight = () => {
    document.getElementById("process").scrollLeft += 500;
    const element = document.getElementById("slider");
    const currentMarginLeft =
      parseInt(window.getComputedStyle(element).marginLeft, 10) || 0;
    element.style.marginLeft = `${currentMarginLeft + 100}px`;
  };
  const handleProcessSlider = () => {};
  return (
    <div className=" w-full flex justify-center mt-32">
      <div className=" flex flex-col gap-20">
        <div
          className=" flex gap-10 items-center overflow-scroll scroll-smooth no-scrollbar"
          id="process"
        >
          <div className=" flex flex-shrink-0">
            <div
              className="  card relative hover:scale-x-[-1] cursor-pointer w-full flex flex-shrink-0"
              style={{ transitionDuration: "0.5s" }}
            >
              <Image src={rect} alt="img" width={400} className="relative" />
              <div className="absolute top-0 left-0 w-full py-10 px-10 h-full flex flex-col items-start justify-between">
                <div className=" hidden-on-hover w-full h-full flex justify-center items-center">
                  <TfiReload className=" text-9xl" />
                </div>
                <div className=" flex items-end justify-between w-full">
                  <h1 className="hidden-on-hover w-2/3 text-2xl font-semibold">
                    Friendly and collaborative team
                  </h1>
                  <div className=" hiddenItem show-on-hover scale-x-[-1] flex flex-col gap-5 w-full items-start pt-5 ">
                    <h1 className=" text-2xl font-medium">
                      Friendly and Collaborative Team
                    </h1>
                    <h1>
                      At HEXEN, we pride ourselves on being approachable and
                      collaborative. Our team is always ready to exchange tips
                      and insights to enhance your project. We believe in
                      building strong relationships with our clients, ensuring
                      your ideas and feedback are integral to the development
                      process.
                    </h1>
                  </div>
                  <CiCirclePlus className=" text-5xl hidden-on-hover" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-shrink-0">
            <div
              className="  card relative hover:scale-x-[-1] cursor-pointer w-full flex flex-shrink-0"
              style={{ transitionDuration: "0.5s" }}
            >
              <Image src={rect} alt="img" width={400} className="relative" />
              <div className="absolute top-0 left-0 w-full py-10 px-10 h-full flex flex-col items-start justify-between">
                <div className=" hidden-on-hover w-full h-full flex justify-center items-center">
                  <TfiReload className=" text-9xl" />
                </div>
                <div className=" flex items-end justify-between w-full">
                  <h1 className="hidden-on-hover w-2/3 text-2xl font-semibold">
                    Agile Development Approach
                  </h1>
                  <div className=" hiddenItem show-on-hover scale-x-[-1] flex flex-col gap-5 w-full items-start pt-5">
                    <h1 className=" text-2xl font-medium">
                      Agile Development Approach
                    </h1>
                    <h1>
                      We primarily follow the Agile development methodology.
                      This iterative approach allows us to be flexible and
                      responsive to changes, ensuring that your project evolves
                      as needed. Agile helps us deliver high-quality results
                      efficiently while keeping you involved and informed
                      throughout the development process.
                    </h1>
                  </div>
                  <CiCirclePlus className=" text-5xl hidden-on-hover" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-shrink-0">
            <div
              className="  card relative hover:scale-x-[-1] cursor-pointer w-full flex flex-shrink-0"
              style={{ transitionDuration: "0.5s" }}
            >
              <Image src={rect} alt="img" width={400} className="relative" />
              <div className="absolute top-0 left-0 w-full py-10 px-10 h-full flex flex-col items-start justify-between">
                <div className=" hidden-on-hover w-full h-full flex justify-center items-center">
                  <TfiReload className=" text-9xl" />
                </div>
                <div className=" flex items-end justify-between w-full">
                  <h1 className="hidden-on-hover w-2/3 text-2xl font-semibold">
                    Effective Communication
                  </h1>
                  <div className=" hiddenItem show-on-hover scale-x-[-1] flex flex-col gap-5 w-full items-start pt-5">
                    <h1 className=" text-2xl font-medium">
                      Effective Communication
                    </h1>
                    <h1>
                      We use a variety of project management tools such as
                      Trello, Slack, and Jira to facilitate seamless
                      communication between our team and our clients. Don’t
                      worry if you’re unfamiliar with these tools – we make sure
                      you’re comfortable using them within minutes, so you can
                      stay updated on the progress of your project without any
                      hassle.
                    </h1>
                  </div>
                  <CiCirclePlus className=" text-5xl hidden-on-hover" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-shrink-0">
            <div
              className="  card relative hover:scale-x-[-1] cursor-pointer w-full flex flex-shrink-0"
              style={{ transitionDuration: "0.5s" }}
            >
              <Image src={rect} alt="img" width={400} className="relative" />
              <div className="absolute top-0 left-0 w-full py-10 px-10 h-full flex flex-col items-start justify-between">
                <div className=" hidden-on-hover w-full h-full flex justify-center items-center">
                  <TfiReload className=" text-9xl" />
                </div>
                <div className=" flex items-end justify-between w-full">
                  <h1 className="hidden-on-hover w-2/3 text-2xl font-semibold">
                    Always There for You
                  </h1>
                  <div className=" hiddenItem show-on-hover scale-x-[-1] flex flex-col gap-5 w-full items-start pt-5">
                    <h1 className=" text-2xl font-medium">
                      Always There for You
                    </h1>
                    <h1>
                      Our commitment to our clients goes beyond regular business
                      hours. We’re always available for you, anytime and
                      anywhere. Whether you have a question, need an update, or
                      want to discuss new ideas, our friendly and simple
                      approach ensures you can reach out to us whenever you
                      need.
                    </h1>
                  </div>
                  <CiCirclePlus className=" text-5xl hidden-on-hover" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-shrink-0">
            <div
              className="  card relative hover:scale-x-[-1] cursor-pointer w-full flex flex-shrink-0"
              style={{ transitionDuration: "0.5s" }}
            >
              <Image src={rect} alt="img" width={400} className="relative" />
              <div className="absolute top-0 left-0 w-full py-10 px-10 h-full flex flex-col items-start justify-between">
                <div className=" hidden-on-hover w-full h-full flex justify-center items-center">
                  <TfiReload className=" text-9xl" />
                </div>
                <div className=" flex items-end justify-between w-full">
                  <h1 className="hidden-on-hover w-2/3 text-2xl font-semibold">
                    Three-Stage Payment Method
                  </h1>
                  <div className=" hiddenItem show-on-hover scale-x-[-1] flex flex-col gap-5 w-full items-start pt-5">
                    <h1 className=" text-2xl font-medium">
                      Three-Stage Payment Method
                    </h1>
                    <h1>
                      Our commitment to our clients goes beyond regular business
                      hours. We’re always available for you, anytime and
                      anywhere. Whether you have a question, need an update, or
                      want to discuss new ideas, our friendly and simple
                      approach ensures you can reach out to us whenever you
                      need.
                    </h1>
                  </div>
                  <CiCirclePlus className=" text-5xl hidden-on-hover" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-5">
          <div className=" flex items-center gap-3">
            <div
              onClick={handleprocessLeft}
              className=" w-10 h-10 rounded-full border flex items-center justify-center"
            >
              <LuChevronLeft className=" text-2xl" />
            </div>
            <div
              onClick={handleprocessRight}
              className=" w-10 h-10 rounded-full border flex items-center justify-center"
            >
              <LuChevronRight className=" text-2xl" />
            </div>
          </div>
          <div className=" w-3/4 h-[2px] bg-white flex items-center ">
            <div
              id="slider"
              className="scroll-smooth w-32 h-[2px] bg-gray-600 overflow-clip overflow-y-hidden"
              style={{ transitionDuration: "0.5s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
