"use client";
import React, { useState } from "react";

function SectionFour() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className=" w-full md:w-full mt-20 flex justify-center px-5 md:px-0">
      <div className=" md:w-4/5 bg-gradient-to-b from-violet-400 to-violet-700 h-auto rounded-3xl py-10">
        <div className=" flex flex-col gap-3">
          <div
            onClick={() => toggleSection("one")}
            className=" flex flex-col md:gap-5 px-5 md:px-20"
          >
            <div className="  flex w-full justify-between">
              <h1 className=" text-3xl md:text-6xl font-semibold">Discovery</h1>
              <h1 className=" text-3xl md:text-6xl font-semibold">01</h1>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-1000 ease-in-out ${
                openSection === "one" ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="mt-5">
                We dive deep into understanding your needs and goals, often
                uncovering insights you might not have considered. By thoroughly
                analyzing your requirements, we ensure that our solutions are
                perfectly aligned with your vision.
              </p>
            </div>
          </div>
          <div
            onClick={() => toggleSection("two")}
            className=" flex flex-col md:gap-5 px-5 md:px-20 border-t rounded-t-3xl pt-5"
          >
            <div className="  flex w-full justify-between">
              <h1 className=" text-3xl md:text-6xl font-semibold">Design</h1>
              <h1 className=" text-3xl md:text-6xl font-semibold">02</h1>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-1000 ease-in-out ${
                openSection === "two" ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="mt-5">
                Our design team translates your ideas into visually compelling
                and user-friendly designs. We focus on creating intuitive
                interfaces that not only look great but also provide an
                exceptional user experience.
              </p>
            </div>
          </div>
          <div
            onClick={() => toggleSection("three")}
            className=" flex flex-col md:gap-5 px-5 md:px-20 border-t rounded-t-3xl pt-5"
          >
            <div className="  flex w-full justify-between">
              <h1 className=" text-3xl md:text-6xl font-semibold">
                Development
              </h1>
              <h1 className=" text-3xl md:text-6xl font-semibold">03</h1>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-1000 ease-in ${
                openSection === "three" ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="mt-5">
                Using the latest technologies, our development team brings your
                designs to life. We build optimized, high-performance solutions
                that are robust and scalable, ensuring your project is ready to
                meet any challenge.
              </p>
            </div>
          </div>
          <div
            onClick={() => toggleSection("four")}
            className=" flex flex-col md:gap-5 px-5 md:px-20 border-t rounded-t-3xl pt-5"
          >
            <div className="  flex w-full justify-between">
              <h1 className=" text-3xl md:text-6xl font-semibold">
                Deployment
              </h1>
              <h1 className=" text-3xl md:text-6xl font-semibold">04</h1>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-1000 ease-in-out ${
                openSection === "four" ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="mt-5">
                We ensure a smooth and efficient deployment process, making your
                product live with minimal disruption. Our meticulous attention
                to detail guarantees that everything works perfectly from day
                one.
              </p>
            </div>
          </div>
          <div
            onClick={() => toggleSection("five")}
            className=" flex flex-col md:gap-5 px-5 md:px-20 border-t rounded-t-3xl pt-5"
          >
            <div className="  flex w-full justify-between">
              <h1 className=" text-3xl md:text-6xl font-semibold">
                Lifelong Support
              </h1>
              <h1 className=" text-3xl md:text-6xl font-semibold">05</h1>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-1000 ease-in-out ${
                openSection === "five" ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="mt-5">
                Our relationship doesn’t end with deployment. We provide free
                lifetime support to keep your product updated, secure, and
                performing at its best. Our team is always available to assist
                with any future needs, ensuring your continued success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
