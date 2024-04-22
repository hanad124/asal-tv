"use client";
import React from "react";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";

export default function ComfortablePricing({ title, desc }) {
  return (
    <>
      <section className="relative md:py-24 py-16" id="pricing">
        <div className="container">
          {title || desc ? (
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-4 md:text-2xl text-xl font-medium font-lexend">
                {title}
              </h3>

              <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
                {desc}
              </p>
            </div>
          ) : (
            ""
          )}

          <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px] items-center">
            <div className="shadow rounded-md p-6 bg-gradient-to-t bg-[#cc3333]">
              <div className="pb-8">
                <h3 className="mb-6 text-xl font-medium text-white font-lexend">
                  Business
                </h3>
                <div className="mb-6 text-white/50 font-lexend">
                  <span className="relative h6 -top-5 text-xl">$</span>
                  <span className="text-5xl h6 font-bold text-white">10</span>
                  <span className="inline-block h6 ms-1">/ month</span>
                </div>
                <p className="mb-6 text-white">
                  Basic features for up to 10 users.
                </p>
                <Link
                  href=""
                  className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full"
                >
                  Started Now
                </Link>
              </div>
              <div className="border-b border-slate-200/10"></div>
              <ul className="self-start pt-8">
                <li className="flex items-center mb-1 text-white/80">
                  <Unicons.UilCheckCircle
                    width={16}
                    className="text-orange-600 me-2"
                  />
                  <span>Complete documentation</span>
                </li>
                <li className="flex items-center my-1 text-white/80">
                  <Unicons.UilCheckCircle
                    width={16}
                    className="text-orange-600 me-2"
                  />
                  <span>Working materials in Figma</span>
                </li>
                <li className="flex items-center my-1 text-white/80">
                  <Unicons.UilCheckCircle
                    width={16}
                    className="text-orange-600 me-2"
                  />
                  <span>100GB cloud storage</span>
                </li>
                <li className="flex items-center my-1 text-white/80">
                  <Unicons.UilCheckCircle
                    width={16}
                    className="text-orange-600 me-2"
                  />
                  <span>500 team members</span>
                </li>
                <li className="flex items-center my-1 text-white/80">
                  <Unicons.UilCheckCircle
                    width={16}
                    className="text-orange-600 me-2"
                  />
                  <span>Free Support</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <div className="pb-8">
                <h3 className="mb-6 text-xl font-medium dark:text-white font-lexend">
                  Free
                </h3>
                <div className="mb-6 dark:text-white/50 font-lexend">
                  <span className="relative h6 -top-5 text-xl">$</span>
                  <span className="text-5xl h6 font-medium dark:text-white">
                    00
                  </span>
                  <span className="inline-block h6 ms-1">/ month</span>
                </div>
                <p className="mb-6 text-slate-400">
                  Free features for your business.
                </p>
                <Link
                  href=""
                  className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[#cc3333]/5 hover:bg-[#cc3333] border-[#cc3333]/10 hover:border-[#cc3333] text-[#cc3333] hover:text-white rounded-md w-full"
                >
                  Redeem Now
                </Link>
              </div>
              <div className="border-b border-slate-200 dark:border-slate-200/5"></div>
              <ul className="self-start pt-8">
                <li className="flex items-center mb-1 text-slate-400">
                  <Unicons.UilCheckCircle
                    width={16}
                    className="text-green-600 me-2"
                  />
                  <span>Complete documentation</span>
                </li>
                <li className="flex items-center my-1 text-slate-400">
                  <Unicons.UilCheckCircle
                    width={16}
                    className="text-green-600 me-2"
                  />
                  <span>Working materials in Figma</span>
                </li>
                <li className="flex items-center my-1 text-slate-400">
                  <Unicons.UilCheckCircle
                    width={16}
                    className="text-green-600 me-2"
                  />
                  <span>100GB cloud storage</span>
                </li>
                <li className="flex items-center my-1 text-slate-400">
                  <Unicons.UilCheckCircle
                    width={16}
                    className="text-green-600 me-2"
                  />
                  <span>500 team members</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <div className="pb-8">
                <h3 className="mb-6 text-xl font-medium dark:text-white font-lexend">
                  Corporate
                </h3>
                <div className="mb-6 dark:text-white/50 font-lexend">
                  <span className="relative h6 -top-5 text-xl">$</span>
                  <span className="text-5xl h6 font-medium dark:text-white">
                    49
                  </span>
                  <span className="inline-block h6 ms-1">/ month</span>
                </div>
                <p className="mb-6 text-slate-400">
                  Corporate features for up to 100 users.
                </p>
                <Link
                  href=""
                  className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[#cc3333] hover:bg-[#cc3333] border-[#cc3333] hover:border-[#cc3333] text-white rounded-md w-full"
                >
                  Signup Now
                </Link>
              </div>
              <div className="border-b border-slate-200 dark:border-slate-200/5"></div>
              <ul className="self-start pt-8">
                <li className="flex items-center mb-1 text-slate-400">
                  <Unicons.UilCheckCircle
                    width={16}
                    className="text-green-600 me-2"
                  />
                  <span>Complete documentation</span>
                </li>
                <li className="flex items-center my-1 text-slate-400">
                  <Unicons.UilCheckCircle
                    width={16}
                    className="text-green-600 me-2"
                  />
                  <span>Working materials in Figma</span>
                </li>
                <li className="flex items-center my-1 text-slate-400">
                  <Unicons.UilCheckCircle
                    width={16}
                    className="text-green-600 me-2"
                  />
                  <span>100GB cloud storage</span>
                </li>
                <li className="flex items-center my-1 text-slate-400">
                  <Unicons.UilCheckCircle
                    width={16}
                    className="text-green-600 me-2"
                  />
                  <span>500 team members</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
