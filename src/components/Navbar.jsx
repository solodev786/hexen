"use client";
import Link from "next/link";
import React from "react";
import logo from "../assets/HEXEN WEBSITE ASSETS/Hexen_logo.png";
import { TbMenu } from "react-icons/tb";
import Image from "next/image";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathname = usePathname();
  const menus = [
    { name: "home", link: "/" },
    { name: "about", link: "aboutus" },
    { name: "service", link: "service" },
    { name: "best work", link: "bestwork" },
    { name: "workflow", link: "workflow" },
    { name: "for you", link: "yourzone" },
  ];
  const firstThree = menus.slice(0, 3);
  const secondThree = menus.slice(3, 6);
  return (
    <div className=" flex flex-col gap-2">
      <div className="  flex justify-between gap-10 items-center  mt-10">
        <div className="w-full hidden md:block">
          <div className=" w-full flex justify-end">
            <div className="w-full flex items-center gap-16 py-3 border-gray-500 border-t border-b  justify-center">
              {firstThree.map((items, index) => {
                const isActive = pathname.startsWith(`/${items.link}`);

                return (
                  <div key={index} className=" flex flex-col gap-2">
                    <Link href={`/${items.link}`}>
                      <div
                        className={
                          isActive
                            ? "uppercase  text-white underline"
                            : "uppercase"
                        }
                      >
                        <h1>{items.name}</h1>
                      </div>
                    </Link>
                  </div>
                );
              })}
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
              {secondThree.map((items, index) => {
                const isActive = pathname.startsWith(`/${items.link}`);

                return (
                  <div key={index} className=" flex flex-col gap-2">
                    <Link href={`/${items.link}`}>
                      <div
                        className={
                          isActive
                            ? "uppercase  text-white underline"
                            : "uppercase"
                        }
                      >
                        <h1>{items.name}</h1>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
