"use client";
import React from "react";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";

export default function GetInTouch() {
  return (
    <>
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="contact"
      >
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-2xl text-xl font-medium">
              Get In Touch !
            </h3>
            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS html page.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
            <div className="lg:col-span-8">
              <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                <form>
                  <div className="grid lg:grid-cols-12 lg:gap-[30px]">
                    <div className="lg:col-span-6 mb-5">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-[#cc3333]/50 dark:focus:border-[#cc3333]/50 focus:ring-0"
                        placeholder="Name :"
                      />
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-[#cc3333]/50 dark:focus:border-[#cc3333]/50 focus:ring-0"
                        placeholder="Email :"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <input
                        name="subject"
                        id="subject"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-[#cc3333]/50 dark:focus:border-[#cc3333]/50 focus:ring-0"
                        placeholder="Subject :"
                      />
                    </div>

                    <div className="mb-5">
                      <textarea
                        name="comments"
                        id="comments"
                        className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-[#cc3333]/50 dark:focus:border-[#cc3333]/50 focus:ring-0 h-28"
                        placeholder="Message :"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[#cc3333] hover:bg-violet-700 border-[#cc3333] hover:border-violet-700 text-white rounded-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="lg:ms-8">
                <div className="flex">
                  <div className="icons text-center mx-auto">
                    <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0" />
                  </div>

                  <div className="flex-1 ms-6">
                    <h5 className="text-lg dark:text-white mb-2 font-medium">
                      Phone
                    </h5>
                    <Link href="tel:+152534-468-854" className="text-slate-400">
                      +152 534-468-854
                    </Link>
                  </div>
                </div>

                <div className="flex mt-4">
                  <div className="icons text-center mx-auto">
                    <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0" />
                  </div>

                  <div className="flex-1 ms-6">
                    <h5 className="text-lg dark:text-white mb-2 font-medium">
                      Email
                    </h5>
                    <Link
                      href="mailto:contact@example.com"
                      className="text-slate-400"
                    >
                      contact@example.com
                    </Link>
                  </div>
                </div>

                <div className="flex mt-4">
                  <div className="icons text-center mx-auto">
                    <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0" />
                  </div>

                  <div className="flex-1 ms-6">
                    <h5 className="text-lg dark:text-white mb-2 font-medium">
                      Location
                    </h5>
                    <p className="text-slate-400 mb-2">
                      C/54 Northwest Freeway, Suite 558, Houston, USA 485
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
