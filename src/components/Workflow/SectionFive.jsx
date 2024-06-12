import React from "react";
import { VscIssueReopened } from "react-icons/vsc";

function SectionFive() {
  return (
    <div className=" w-full flex md:justify-center mt-32 px-5 md:px-0">
      <div className="md:w-2/3 flex flex-col gap-10  md:items-center h-auto">
        <h1 className=" w-3/4 text-3xl md:text-6xl md:w-4/6 md:text-center">
          What we can do for you in our{" "}
          <span className=" text-gray-500">life time support</span>
        </h1>
        <h1 className=" md:text-2xl md:text-center md:w-4/6">
          At Hexen, our commitment to your success extends far beyond the
          initial project delivery. We offer free lifetime support to ensure
          your website continues to perform optimally and meets your evolving
          needs. Here’s what we can do for you with our lifelong support:
        </h1>
        <div className=" md:flex gap-10 items-start md:mt-14">
          <div className=" flex flex-col gap-5 ">
            <h1 className=" flex  items-start gap-2 md:w-3/4">
              <VscIssueReopened className=" " />
              <span>
                {" "}
                Alignment Adjustments:{" "}
                <span className=" text-gray-300">
                  We can fix any alignment issues that may arise, ensuring your
                  website maintains its professional appearance and
                  functionality.
                </span>
              </span>
            </h1>
            <h1 className=" flex items-start gap-2 my-5 md:my-0 md:w-3/4">
              <VscIssueReopened />
              <span>
                {" "}
                Static Image Updates{" "}
                <span className=" text-gray-300">
                  Need to update the images on your website? We can change the
                  static images to keep your site fresh and relevant.
                </span>
              </span>
            </h1>
          </div>
          <div className=" flex flex-col gap-5 ">
            <h1 className="md:w-3/4 flex items-start gap-2">
              <VscIssueReopened />
              <span>
                {" "}
                Contact Information Updates{" "}
                <span className=" text-gray-300">
                  Whether you need to change your location, phone number, or
                  address, we’re here to make those updates quickly and
                  efficiently
                </span>
              </span>
            </h1>
            <h1 className=" flex items-start gap-2 my-5 md:my-0 md:w-3/4">
              <VscIssueReopened />
              <span>
                {" "}
                Consulting for New Projects{" "}
                <span className=" text-gray-300">
                  Considering a new project? We offer a bit of free consulting
                  to help you get started on the right track and ensure your new
                  project aligns with your goals.
                </span>
              </span>
            </h1>
          </div>
          <div className=" flex flex-col gap-5 ">
            <h1 className=" flex items-start gap-2">
              <VscIssueReopened />
              <span>
                {" "}
                Technical Advice{" "}
                <span className=" text-gray-300">
                  Our team is available to provide technical advice, helping you
                  make informed decisions about your website and digital
                  presence.
                </span>
              </span>
            </h1>
            {/* <h1 className=" flex items-start gap-2">
              <VscIssueReopened />
              <span>
                {" "}
                Parent and sub-issue. Break{" "}
                <span className=" text-gray-400">
                  larger tasks into smaller issues.
                </span>
              </span>
            </h1> */}
          </div>
        </div>
        <h1 className=" md:text-center text-xl md:w-2/3 text-white font-light mt-10">
          Please note that these lifelong support features are exclusively
          available for projects with a total cost exceeding 45,000 rupees. We
          value our clients and aim to provide continuous support to help you
          achieve long-term success.
        </h1>
      </div>
    </div>
  );
}

export default SectionFive;
