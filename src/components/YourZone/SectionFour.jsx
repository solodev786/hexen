import React from "react";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdOutlineBackup } from "react-icons/md";

function SectionFour() {
  return (
    <div className=" w-full flex justify-start mt-40 px-5 md:px0">
      <div className=" flex flex-col gap-10 w-full">
        <h1 className=" uppercase text-4xl w-2/5 ">
          how to maintain your website{" "}
        </h1>
        <div className=" flex flex-col">
          <div className=" md:flex gap-10 items-center md:border-b pb-5 border-gray-600 ">
            <div className=" md:w-1/2 pr-5 pb-10 md:border-r border-gray-600 ">
              <div className=" flex flex-col gap-5">
                <div className=" w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                  <CgWebsite />
                </div>
                <h1 className=" text-xl font-medium">Regular Updates</h1>
                <p>
                  Keep your website&apos;s software, themes, and plugins
                  up-to-date to ensure security and functionality. Regular
                  updates protect your site from vulnerabilities and enhance
                  performance.
                </p>
              </div>
            </div>
            <div className=" md:w-1/2 pr-5 pb-10 md:border-r border-gray-600 ">
              <div className=" flex flex-col gap-5">
                <div className=" w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                  <MdOutlineContentCopy />
                </div>
                <h1 className=" text-xl font-medium">Content Refresh</h1>
                <h1>
                  Continuously update and add fresh content to your website.
                  This not only keeps your audience engaged but also improves
                  your site&apos;s SEO, helping you rank higher in search engine
                  results.
                </h1>
              </div>
            </div>
            <div className=" md:w-1/2 pr-5 pb-5  ">
              <div className=" w-2/2 pr-5 pb-10  ">
                <div className=" flex flex-col gap-5">
                  <div className=" w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                    <MdOutlineBackup />
                  </div>
                  <h1 className=" text-xl font-medium">Backup Your Data</h1>
                  <h1>
                    Regularly back up your website&apos;s data to prevent data
                    loss. Ensure that backups are stored securely and can be
                    easily restored in case of emergencies.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:flex gap-10 items-center  border-gray-600 ">
            <div className=" md:w-1/2 pr-5 pb-10 md:border-r border-gray-600 ">
              <div className=" flex flex-col gap-5 mt-5">
                <div className=" w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                  <CgWebsite />
                </div>
                <h1 className=" text-xl font-medium">Monitor Performance</h1>
                <h1>
                  Use tools to monitor your website&apos;s performance,
                  including load times, uptime, and broken links. Address any
                  issues promptly to provide a seamless user experience.
                </h1>
              </div>
            </div>
            <div className=" md:w-1/2 pr-5 pb-10 md:border-r border-gray-600 ">
              <div className=" flex flex-col gap-5 mt-5">
                <div className=" w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                  <CgWebsite />
                </div>
                <h1 className=" text-xl font-medium">Security Checks</h1>
                <h1>
                  Conduct routine security audits to identify and fix
                  vulnerabilities. Implement strong passwords, use SSL
                  certificates, and consider additional security measures like
                  firewalls and malware scans.
                </h1>
              </div>
            </div>
            <div className=" md:w-1/2 pr-5 pb-5  ">
              <div className=" w-2/2 pr-5 pb-10  mt-5">
                <div className=" flex flex-col gap-5">
                  <div className=" w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                    <CgWebsite />
                  </div>
                  <h1 className=" text-xl font-medium">User Feedback</h1>
                  <h1>
                    Gather and analyze feedback from your website&apos;s users.
                    This can help you identify areas for improvement and make
                    necessary adjustments to enhance the user experience.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
