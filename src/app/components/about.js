"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import * as Unicons from "@iconscout/react-unicons";

export default function About() {
  return (
    <>
      <section className="relative md:py-24 py-16" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src="/images/about.jpg"
                  className="rounded-lg shadow-lg relative"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ height: "auto", width: "100%" }}
                />
                <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center"></div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h3 className="mb-4 md:text-2xl text-xl font-medium font-lexend">
                  About Us: Ovaxo
                </h3>

                <p className="text-slate-400 dark:text-slate-300 max-w-2xl font-inter mx-auto">
                  Start working with Ovaxo that can provide everything you need
                  to generate awareness, drive traffic, connect. Dummy text is
                  text that is used in the publishing industry or by web
                  designers to occupy the space which will later be filled with
                  &apos;real&apos; content. This is required when, for example,
                  the final text is not yet available. Dummy texts have been in
                  use by typesetters since the 16th century.
                </p>

                <div className="relative mt-8">
                  <Link
                    href="/aboutus"
                    className="py-2 px-5 font-inter  font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[#cc3333] hover:bg-[#cc3333] border-[#cc3333] hover:border-[#cc3333] text-white rounded-md inline-flex items-center gap-1"
                  >
                    Read More
                    <Unicons.UilArrowRight width={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
