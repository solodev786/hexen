"use client";
import React, { useEffect, useState } from "react";

function SectionFive() {
  const [clickedMenu, setClickedMenu] = useState("frontEnd");
  useEffect(() => {
    console.log(clickedMenu);
  }, [clickedMenu]);
  const techArray = [
    {
      name: "frontEnd",
      technology: [
        "react js",
        "Next js",
        "Tailwind css",
        "js",
        "axios",
        "meterial ui",
        "Redux",
        "Bootstrap",
        "Angular",
      ],
    },
    {
      name: "backend",
      technology: [
        "Node js",
        "Express js",
        "Mongodb",
        "Nest js",
        "koa js",
        "socket io",
        "jwt",
        "feathers js",
        "sails",
      ],
    },
    {
      name: "web design",
      technology: ["react js", "Next js", "Tailwind css", "js", "sass", "html"],
    },
    {
      name: "cms",
      technology: ["wordpress", "hubspot", "drupal", "magento"],
    },
    {
      name: "e-commerce",
      technology: ["shopify", "squarespace", "woocommerce", "opencart"],
    },
  ];
  return (
    <div className=" w-full flex flex-col md:gap-10 mt-20 px-5 md:px-0">
      <div className=" w-full ">
        <div className=" flex flex-col gap-5 items-center">
          <div className=" flex flex-wrap justify-center md:justify-start  items-center gap-4 md:gap-20">
            {techArray.map((items, index) => {
              return (
                <div key={index}
                  onClick={(e) => setClickedMenu(items.name)}
                  className=" flex flex-col gap-10"
                >
                  <h1
                    key={index}
                    className={` uppercase cursor-pointer ${
                      clickedMenu === items.name
                        ? `text-white`
                        : "text-gray-500"
                    } md:text-3xl`}
                  >
                    {items.name}
                  </h1>
                </div>
              );
            })}
          </div>
          <hr className=" w-full border-gray-500" />
          {clickedMenu === "frontEnd" ? (
            <div className=" w-full flex flex-wrap gap-5 md:gap-14 items-center justify-center mt-10">
              {techArray[0].technology.map((items, index) => {
                return (
                  <h1 key={index} className="text-xl md:text-4xl uppercase ">
                    {items}
                  </h1>
                );
              })}
            </div>
          ) : clickedMenu === "backend" ? (
            <div className=" w-full flex flex-wrap gap-5 md:gap-14 items-center justify-center mt-10">
              {techArray[1].technology.map((items, index) => {
                return (
                  <h1 key={index} className=" text-xl md:text-4xl uppercase ">
                    {items}
                  </h1>
                );
              })}
            </div>
          ) : clickedMenu === "web design" ? (
            <div className=" w-full flex flex-wrap gap-5 md:gap-14 items-center justify-center mt-10">
              {techArray[2].technology.map((items, index) => {
                return (
                  <h1 key={index} className=" text-xl md:text-4xl uppercase ">
                    {items}
                  </h1>
                );
              })}
            </div>
          ) : clickedMenu === "cms" ? (
            <div className=" w-full flex flex-wrap gap-5 md:gap-14 items-center justify-center mt-10">
              {techArray[3].technology.map((items, index) => {
                return (
                  <h1 key={index} className=" text-xl md:text-4xl uppercase ">
                    {items}
                  </h1>
                );
              })}
            </div>
          ) : clickedMenu === "e-commerce" ? (
            <div className=" w-full flex flex-wrap gap-5 md:gap-14 items-center justify-center mt-10">
              {techArray[4].technology.map((items, index) => {
                return (
                  <h1 key={index} className=" text-xl md:text-4xl uppercase ">
                    {items}
                  </h1>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
