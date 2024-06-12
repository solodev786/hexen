"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaMinus } from "react-icons/fa6";
function MobileMenu() {
  const router = useRouter();
  return (
    <div className="block md:hidden">
      <div className=" w-full h-screen bg-violet-950 text-white flex py-10 px-10">
        <div className="w-full flex flex-col h-full justify-between">
          <div className="w-full flex flex-col gap-10">
            <div
              onClick={() => {
                router.back();
              }}
              className=" w-full flex justify-end"
            >
              <FaMinus className=" text-4xl" />
            </div>
            <div className=" flex flex-col gap-5 uppercase">
              <Link href={"/"}>
                <h1 className=" text-2xl">Home</h1>
              </Link>
              <hr />
              <Link href={"/aboutus"}>
                <h1 className=" text-2xl">About</h1>
              </Link>
              <hr />
              <Link href={"/service"}>
                <h1 className=" text-2xl">Service</h1>
              </Link>
              <hr />
              <Link href={"/bestwork"}>
                <h1 className=" text-2xl">projects</h1>
              </Link>
              <hr />
              <Link href={"/workflow"}>
                <h1 className=" text-2xl">workflow</h1>
              </Link>
              <hr />
              <Link href={"/yourzone"}>
                <h1 className=" text-2xl">your zone</h1>
              </Link>
            </div>
          </div>
          <h1 className=" text-xl uppercase">get in touch</h1>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
