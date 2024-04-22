"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import * as Unicons from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-slate-950 relative text-gray-200 dark:text-gray-200">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="py-[60px] px-0">
                <div className="grid grid-cols-1">
                  <div className="text-center">
                    <Image
                      src="/images/asal-logo.png"
                      className="block mx-auto"
                      alt=""
                      width={114}
                      height={114}
                    />
                    <p className="max-w-xl mx-auto text-slate-400 mt-8">
                      Launch your campaign and benefit from our expertise on
                      designing and managing conversion centered Tailwind CSS
                      html page.
                    </p>
                  </div>

                  <ul className="list-none footer-list text-center mt-8">
                    <li className="inline px-2">
                      {" "}
                      <Link
                        href="/services"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="inline px-2 mt-[10px]">
                      {" "}
                      <Link
                        href="/aboutus"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="inline px-2 mt-[10px]">
                      {" "}
                      <Link
                        href="/blogs"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li className="inline px-2 mt-[10px]">
                      {" "}
                      <Link
                        href="/team"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2"
                      >
                        Team
                      </Link>
                    </li>
                    <li className="inline px-2 mt-[10px]">
                      {" "}
                      <Link
                        href="/pricing"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="inline px-2 mt-[10px]">
                      {" "}
                      <Link
                        href="/contactus"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-slate-800">
          <div className="container text-center">
            <div className="grid md:grid-cols-12 items-center">
              <div className="md:col-span-6">
                <div className="md:text-start text-center">
                  <p className="text-gray-400">
                    ©{new Date().getFullYear()} Ovaxo. Design & Develop with{" "}
                    <i className="mdi mdi-heart text-red-700"></i> by{" "}
                    <Link href="" target="_blank" className="text-reset">
                      Shreethemes
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="md:col-span-6 md:mt-0 mt-8">
                <ul className="list-none md:text-end text-center">
                  <li className="inline">
                    {" "}
                    <Link
                      href=""
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-[#cc3333] dark:hover:border-[#cc3333] hover:bg-[#cc3333] dark:hover:bg-[#cc3333]"
                    >
                      <Unicons.UilShoppingCart width={16} />
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    {" "}
                    <Link
                      href=""
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-[#cc3333] dark:hover:border-[#cc3333] hover:bg-[#cc3333] dark:hover:bg-[#cc3333]"
                    >
                      <Unicons.UilDribbble width={16} />
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    {" "}
                    <Link
                      href=""
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-[#cc3333] dark:hover:border-[#cc3333] hover:bg-[#cc3333] dark:hover:bg-[#cc3333]"
                    >
                      <Unicons.UilBehance width={16} />
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    {" "}
                    <Link
                      href=""
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-[#cc3333] dark:hover:border-[#cc3333] hover:bg-[#cc3333] dark:hover:bg-[#cc3333]"
                    >
                      <Unicons.UilLinkedin width={16} />
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    {" "}
                    <Link
                      href=""
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-[#cc3333] dark:hover:border-[#cc3333] hover:bg-[#cc3333] dark:hover:bg-[#cc3333]"
                    >
                      <Unicons.UilFacebookF width={16} />
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    {" "}
                    <Link
                      href=""
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-[#cc3333] dark:hover:border-[#cc3333] hover:bg-[#cc3333] dark:hover:bg-[#cc3333]"
                    >
                      <Unicons.UilInstagram width={16} />
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    {" "}
                    <Link
                      href=""
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-[#cc3333] dark:hover:border-[#cc3333] hover:bg-[#cc3333] dark:hover:bg-[#cc3333]"
                    >
                      <Unicons.UilTwitter width={16} />
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    {" "}
                    <Link
                      href="mailto:support@shreethemes.in"
                      className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-[#cc3333] dark:hover:border-[#cc3333] hover:bg-[#cc3333] dark:hover:bg-[#cc3333]"
                    >
                      <Unicons.UilEnvelope width={16} />
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    {" "}
                    <Link
                      href=""
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-[#cc3333] dark:hover:border-[#cc3333] hover:bg-[#cc3333] dark:hover:bg-[#cc3333]"
                    >
                      <Unicons.UilFile width={16} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
