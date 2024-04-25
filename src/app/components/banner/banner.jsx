import React, { useState } from "react";
import Link from "next/link";
import BannerData from "../../Data/BannerData.json";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiArrowBack } from "react-icons/bi";

import SliderButtons from "../SliderButtons";

const Banner = () => {
  const data = BannerData;
  return (
    <section className="w-full relative bg-rde-500">
      <div className=" h-screen relative">
        <ul className="h-full w-full relative">
          <Swiper
            // navigation
            // pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(({ id, image, tagline, title, buttons }) => (
              <SwiperSlide key={id}>
                <div className="relative h-screen">
                  <div
                    className="h-full w-full absolute left-0 top-0"
                    // style={{
                    //   background: `url(${image}) center center / cover scroll no-repeat`,
                    // }}
                  ></div>
                  <div className="h-full w-full absolute left-0 top-0 bg-black opacity-50"></div>
                  <div className="relative z-10 h-full flex items-center justify-start p-[2rem] md:pl-[6rem]">
                    <div className="text-start">
                      {tagline && (
                        <p className="sm:text-4xl md:text-6xl font-bold text-white mt-16 lowercase">
                          {tagline}
                        </p>
                      )}
                      <p className=" text-4xl md:text-6xl font-bold text-white lowercase mt-3">
                        {title}
                      </p>
                      {buttons.length > 0 ? (
                        <p className=" bg-[#cc3333] inline-block px-9 py-2 rounded-md text-white mt-10 md:mt-20">
                          <SliderButtons buttons={buttons} />
                          <BiArrowBack className="inline-block rotate-180 ml-2" />
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
