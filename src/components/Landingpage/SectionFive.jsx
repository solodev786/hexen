import React from "react";
import men from "../../assets/men.webp";
import Image from "next/image";
function SectionFive() {
  return (
    <div className=" w-full flex justify-center py-10 md:pt-32 px-10 md:px-0">
      <div className=" flex flex-col gap-20 md:w-[1200px] ">
        <div className=" flex items-center gap-4">
          <h1 className=" text-white font-light">03</h1>
          <div className=" w-[1px] h-[10px] bg-white"></div>
          <h1 className=" uppercase font-light">testimonials</h1>
          <div className=" w-4/5 h-[1px] bg-gradient-to-r from-white to-blue-400"></div>
        </div>
        <div className=" md:flex gap-10 items-center justify-between">
          <div className=" flex flex-col  text-white">
            <h1 className=" text-4xl font-semibold md:text-6xl md:font-bold">
              Read from our
            </h1>
            <h1 className=" text-violet-500 text-4xl font-semibold md:font-bold md:text-6xl">
              Clients
            </h1>
            <div className=" my-5 md:my-0 md:mt-10 text-gray-400 ">
              Our client&apos;s satisfaction is the cornerstone of our success
              at Hexen. We take immense pride in the glowing feedback we&apos;ve
              received from those we&apos;ve had the pleasure to work with.
            </div>
          </div>
          <div className=" flex flex-col gap-5">
            <div className=" md:flex gap-5 items-center">
              <div className=" my-5 md:my-0 w-full md:w-80 h-56 bg-black rounded-2xl px-5 py-5 backdrop-blur-lg bg-opacity-30 border border-blue-900">
                <div className=" flex flex-col h-full justify-between gap-5">
                  <h1 className=" text-sm">
                    &quot;Hexen transformed our vision into a stunning website
                    that exceeded our expectations. Their attention to detail
                    and commitment to quality is unmatched. We couldn&apos;t be
                    happier with the results!&quot;
                  </h1>
                  <div className=" flex items-center gap-4">
                    <div>
                      <h1 className=" font-semibold">Richard Philippe</h1>
                      <h1 className=" text-xs">CEO of easy tuition</h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className=" w-80 h-44 bg-slate-700 rounded-2xl px-5 py-5"></div> */}
              <div className=" w-full md:w-80 h-56 bg-black rounded-2xl px-5 py-5 backdrop-blur-lg bg-opacity-30 border border-blue-900">
                <div className=" flex flex-col h-full justify-between gap-5">
                  <h1 className=" text-sm">
                    &quot;Working with Hexen was a delightful experience. They
                    truly listened to our needs and delivered a product that
                    brought our ideas to life. Their expertise and dedication
                    made all the difference.&quot;
                  </h1>
                  <div className=" flex items-center gap-4">
                    <div>
                      <h1 className=" font-semibold">Richard Philippe</h1>
                      <h1 className=" text-xs">CEO of easy tuition</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:flex gap-5 items-center">
              <div className="w-full md:w-80 h-56 bg-black rounded-2xl px-5 py-5 backdrop-blur-lg bg-opacity-30 border border-blue-900">
                <div className=" flex flex-col h-full justify-between gap-5">
                  <h1 className=" text-sm">
                    &quot;The team at Hexen went above and beyond to ensure our
                    website was perfect. Their innovative approach and high
                    standards set them apart.the website is a part of my
                    business&quot;
                  </h1>
                  <div className=" flex items-center gap-4">
                    <div>
                      <h1 className=" font-semibold">Richard Philippe</h1>
                      <h1 className=" text-xs">CEO of easy tuition</h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className=" w-80 h-44 bg-slate-700 rounded-2xl px-5 py-5"></div> */}
              <div className="hidden md:block w-80 h-56 bg-black rounded-2xl px-5 py-5 backdrop-blur-lg bg-opacity-30 border border-blue-900">
                <div className=" flex flex-col h-full justify-between gap-5">
                  <h1 className=" text-sm">
                    &quot;From start to finish, Hexen provided exceptional
                    service and delivered a website that our customers love.
                    Their ability to understand our requirements and create a
                    user-friendly site was impressive.&quot;
                  </h1>
                  <div className=" flex items-center gap-4">
                    <div>
                      <h1 className=" font-semibold">Richard Philippe</h1>
                      <h1 className=" text-xs">CEO of easy tuition</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:flex gap-5 items-center">
              <div className=" hidden md:block w-80 h-56 bg-black rounded-2xl px-5 py-5 backdrop-blur-lg bg-opacity-30 border border-blue-900">
                <div className=" flex flex-col h-full justify-between gap-5">
                  <h1 className=" text-sm">
                    &quot;We are thrilled with the website Hexen developed for
                    us. Their team&apos;s creativity and technical expertise
                    resulted in a site that is both functional and visually
                    appealing. They exceeded our expectations!&quot;
                  </h1>
                  <div className=" flex items-center gap-4">
                    <div>
                      <h1 className=" font-semibold">Richard Philippe</h1>
                      <h1 className=" text-xs">CEO of easy tuition</h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className=" w-80 h-44 bg-slate-700 rounded-2xl px-5 py-5"></div> */}
              <div className=" hidden md:block w-80 h-56 bg-black rounded-2xl px-5 py-5 backdrop-blur-lg bg-opacity-30 border border-blue-900">
                <div className=" flex flex-col gap-5 h-full justify-between">
                  <h1 className=" text-sm">
                    &quot;Hexen&apos;s work is nothing short of extraordinary.
                    They created a versatile, beautiful website that truly
                    represents our brand. Their dedication and professionalism
                    were evident every step of the way.&quot;
                  </h1>
                  <div className=" flex items-center gap-4">
                    <div>
                      <h1 className=" font-semibold">Richard Philippe</h1>
                      <h1 className=" text-xs">CEO of easy tuition</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full h-[1px] bg-gradient-to-r from-white to-gray-500"></div>
      </div>
    </div>
  );
}

export default SectionFive;
