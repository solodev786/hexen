import React from "react";
import logo from "../../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";
import Image from "next/image";
import folder from "../../assets/ABOUT/aboutusfolder.webp";
import cube from "../../assets/ABOUT/diamond.webp";
function SectionOne() {
  return (
    <div className="w-full  h-[1300px] flex justify-center ">
      <div className=" w-[1200px] h-auto]">
        <div className=" flex justify-center w-full">
          <Image src={logo} alt="logo" width={100} />
        </div>
        <div className=" flex flex-col gap-5  w-full ">
          <div className=" flex items-center gap-5 w-full justify-start mt-20">
            <h1 className=" text-5xl font-bold">About Us</h1>
            <div className=" w-3/4 h-[1px] bg-white bg-gradient-to-r from-gray-500"></div>
          </div>
          <h1 className=" w-3/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illo
            iure amet labore fugit quaerat tempore. Laborum iusto, voluptatibus
            impedit, in laboriosam quaerat esse modi ab libero dicta sunt
            voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nisi illo iure amet labore fugit quaerat tempore. Laborum iusto,
            voluptatibus impedit, in laboriosam quaerat esse modi ab libero
            dicta sunt voluptatem?
          </h1>
          <div className=" ">
            <div className=" w-full relative">
              <Image src={folder} alt="folder" className=" relative" />
              <div className=" absolute top-0 left-0 w-full h-full">
                <div className=" w-full h-full  py-10 ">
                  <div className=" w-full h-full  mt-5 flex flex-col gap-4">
                    <div className=" flex items-center justify-between w-full px-10">
                      <div className=" w-1/2 ">
                        <h1 className=" text-7xl uppercase font-bold">
                          tailor-fitted dedicated team service
                        </h1>
                      </div>
                      <div className=" ">
                        <Image
                          src={cube}
                          alt="diamond"
                          width={300}
                          className=""
                        />
                      </div>
                    </div>
                    <hr />
                    <div className=" flex items-center justify-between px-10">
                      <div className=" flex gap-4 items-center w-1/3">
                        <h1 className=" text-6xl font-bold">50+</h1>
                        <div className=" flex flex-col">
                          <h1 className=" text-4xl uppercase">
                            product Designs
                          </h1>
                        </div>
                      </div>
                      <div className=" flex gap-4 items-center w-1/3">
                        <h1 className=" text-6xl font-bold">07</h1>
                        <div className=" flex flex-col">
                          <h1 className=" text-4xl uppercase">
                            years experience
                          </h1>
                        </div>
                      </div>
                      <div className=" flex gap-4 items-center w-1/3">
                        <h1 className=" text-6xl font-bold">200+</h1>
                        <div className=" flex flex-col">
                          <h1 className=" text-4xl uppercase">
                            projects completed
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-52 flex flex-col  gap-10 ">
                      <div className=" justify-between flex w-full">
                        <h1 className="  text-4xl uppercase font-bold w-1/2 ">
                          who we are
                        </h1>
                        <h1 className=" text-2xl w-4/5  font-extralight">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Incidunt nihil voluptatibus ad similique
                          deleniti, deserunt tempora possimus maiores aliquid,
                          in doloremque.{" "}
                          <span className=" text-gray-400">
                            Blanditiis aspernatur vero praesentium natus modi
                            quas aut officia. deserunt tempora possimus maiores
                            aliquid, in doloremque. Blanditiis aspernatur vero
                            praesentium natus modi quas aut officia.
                          </span>
                        </h1>
                      </div>
                      <div className=" w-full h-[1px] bg-white bg-gradient-to-r from-gray-500 mt-10 to-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
