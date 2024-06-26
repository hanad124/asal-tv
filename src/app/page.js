"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const NavbarSmallLight = dynamic(() =>
  import("./components/navbar-small-light")
);
const Switcher = dynamic(() => import("./components/Switcher"));
const Footer = dynamic(() => import("./components/footer"));
const About = dynamic(() => import("./components/about"));
const OurServices = dynamic(() => import("./components/our-services"));
const ComfortablePricing = dynamic(() =>
  import("./components/comfortable-pricing")
);
const ClientSreview = dynamic(() => import("./components/clientsreview"));
const BlogsNews = dynamic(() => import("./components/blogs-news"));
const GetInTouch = dynamic(() => import("./components/get-in-touch"));

import * as Unicons from "@iconscout/react-unicons";

import "../../node_modules/react-modal-video/css/modal-video.css";
import Banner from "./components/banner/banner";

export default function Index() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <NavbarSmallLight />
      <Banner />
      <About />
      <OurServices
        title="Our Services"
        desc="This is just a simple text made for this unique and awesome template, you can replace it with any text."
      />
      <section className="relative md:py-24 py-16 md:pt-0 pt-0 bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 justify-center">
            <div className="relative z-1">
              <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                <div className="lg:col-start-2 lg:col-span-10">
                  <div className="relative">
                    <Image
                      src="/images/cta.jpg"
                      className="rounded-md shadow-lg"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                      <Link
                        href="#"
                        onClick={() => setOpen(true)}
                        data-type="youtube"
                        data-id="yba7hPeTSjk"
                        className="lightbox lg:h-20 h-16 lg:w-20 w-16 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-[#cc3333] text-[#cc3333] hover:text-white duration-500 ease-in-out mx-auto"
                      >
                        <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content md:mt-8">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                  <div className="lg:col-start-2 lg:col-span-10">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px]">
                      <div>
                        <div className="section-title text-md-start">
                          <h6 className="text-white/50 font-lexend">
                            Customers needs
                          </h6>
                          <h3 className="md:text-2xl text-xl font-medium text-white mt-2 font-lexend">
                            Spaces for every size <br /> and type of need.
                          </h3>
                        </div>
                      </div>

                      <div className="section-title text-md-start">
                        <p className="text-white/50 max-w-xl mx-auto mb-2">
                          This is just a simple text made for this unique and
                          awesome template, you can replace it with any text.
                        </p>
                        <Link
                          href=""
                          className="text-white inline-flex items-center gap-1"
                        >
                          Read More <Unicons.UilArrowRight width={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 end-0 start-0 h-4/5 md:h-2/3 bg-[#cc3333]"></div>
      </section>
      <ComfortablePricing
        title="Our Comfortable Pricing"
        desc="Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page."
      />
      <ClientSreview className="lg:py-24 py-16" />
      <BlogsNews
        title="Blogs or News"
        desc="Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page."
      />
      <GetInTouch />
      <Footer />
      <Switcher />
    </>
  );
}
