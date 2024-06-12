import React from "react";
import logo from "../../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";
import Image from "next/image";
import folder from "../../assets/ABOUT/aboutusfolder.webp";
import folderMobile from "../../assets/ABOUT/aboutusfolder (3).png";
import cube from "../../assets/ABOUT/diamond.webp";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { TbMenu } from "react-icons/tb";

function SectionOne() {
  return (
    <div className="w-full  md:h-[1200px] flex justify-center px-5 md:px-0">
      <div className=" md:w-[1200px] h-auto]">
        <div className=" flex justify-center w-full">
          <div className=" w-full flex justify-between gap-10 items-center  ">
            <div className="w-full hidden md:block">
              <div className=" w-full flex justify-end">
                <div className="w-full flex items-center gap-16 py-3 border-gray-500 border-t border-b  justify-center">
                  <Link href={"/"}>
                    <h1 className=" uppercase">Home</h1>
                  </Link>
                  <Link href={"/aboutus"}>
                    <h1 className=" uppercase">about</h1>
                  </Link>
                  <Link href={"/service"}>
                    <h1 className=" uppercase">service</h1>
                  </Link>
                </div>
              </div>
            </div>
            <Image src={logo} width={100} className=" hidden md:block" />

            <div className="w-full md:hidden flex flex-col gap-5">
              <div className=" w-full flex justify-between items-center">
                <Image src={logo} width={80} className=" block md:hidden " />
                <Link href={"/mobileMenu"}>
                  <TbMenu className=" text-5xl" />
                </Link>
              </div>
            </div>

            <div className="w-full hidden md:block">
              <div className=" w-full flex justify-end">
                <div className="w-full flex items-center gap-16 py-3 border-gray-500 border-t border-b  justify-center">
                  <Link href={"/bestwork"}>
                    <h1 className=" uppercase">projects</h1>
                  </Link>
                  <Link href={"/workflow"}>
                    <h1 className=" uppercase">work flow</h1>
                  </Link>
                  <Link href={"/yourzone"}>
                    <h1 className=" uppercase">for you</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-5  w-full ">
          <div className=" flex items-center gap-5 w-full justify-start mt-20">
            <h1 className=" text-5xl font-bold">About Us</h1>
            <div className="hidden md:block w-3/4 h-[1px] bg-white bg-gradient-to-r from-gray-500"></div>
          </div>
          <h1 className=" md:w-3/5 ">
            Welcome to Hexen, where innovation meets excellence in web
            development. We are a passionate team of experts dedicated to
            transforming your ideas into reality. With years of experience and a
            portfolio of successful projects, we have helped numerous companies
            grow and thrive in the digital world. At Hexen, we believe in making
            the impossible possible, ensuring that our clients are not just
            satisfied but delighted with the results. Our commitment to quality,
            creativity, and client satisfaction sets us apart, making us a
            trusted partner in your digital journey.
          </h1>
          <div className="hidden md:block ">
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
                    {/* <div className=" mt-52 flex flex-col  gap-10 ">
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" block my-10 md:hidden">
            <div className=" w-full relative">
              <Image src={folderMobile} alt="mobile" />
              <div className=" w-full h-full absolute top-0 left-0  py-20 px-5">
                <div className=" w-full flex flex-col gap-5">
                  <h1 className=" text-4xl uppercase font-semibold w-5/6">
                    tailor-fitted dedicated team service
                  </h1>
                  <hr />
                  <div className=" w-full flex items-center gap-20 ">
                    <h1 className=" text-5xl font-bold">50+</h1>
                    <h1 className=" text-3xl uppercase">product designs</h1>
                  </div>
                  <hr />
                  <div className=" w-full flex items-center gap-20 ">
                    <h1 className=" text-5xl font-bold">50+</h1>
                    <h1 className=" text-3xl uppercase">product designs</h1>
                  </div>
                  <hr />
                  <div className=" w-full flex items-center gap-20 ">
                    <h1 className=" text-5xl font-bold">50+</h1>
                    <h1 className=" text-3xl uppercase">product designs</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:mt-32 flex flex-col  gap-10 ">
            <div className=" md:justify-between md:flex w-full">
              <h1 className="  text-4xl uppercase font-bold md:w-1/2 my-5 md:my-0">
                Why choose us
              </h1>
              <h1 className=" text-xl md:w-4/5  font-extralight">
                Our team is a unique blend of youthful energy and seasoned
                expertise. We&apos;re not just a startup; we&apos;re a powerhouse of
                talent, with fresh perspectives from young minds and invaluable
                wisdom from experienced professionals. This dynamic combination
                results in unparalleled products that set new standards in the
                industry.
              </h1>
            </div>
            <div className=" w-full h-[1px] bg-white bg-gradient-to-r from-gray-500 md:mt-10 to-white"></div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
