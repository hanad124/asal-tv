import React from "react";
import Link from "next/link";
import Image from "next/image";
import handleSmoothScroll from "../handleSmoothScroll";

const SingleBanner = ({ banner }) => {
  const {
    sliderClass,
    thumb,
    animation,
    subTitle,
    title1,
    title2,
    text,
    btnText,
    btnIcon,
  } = banner;

  return (
    <>
      <div className={`slide-item ${sliderClass}`}>
        <div className="image-layer">
          <Image
            alt="Mountains"
            src={`/images/slider/${thumb}`} // Assuming the images folder is located in the public directory
            quality={100}
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="container">
          <div className={`slider-content style-two ${animation}`}>
            <div className="slider-sub-title">
              <h4>{subTitle}</h4>
            </div>
            <div className="slider-main-title">
              <h1>{title1}</h1>
              <h1>{title2}</h1>
            </div>
            <div className="slider-discripton">
              <p>{text}</p>
            </div>
            <div className="eulding-btn">
              <Link href="#" onClick={handleSmoothScroll}>
                {btnText} <i className={btnIcon}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBanner;
