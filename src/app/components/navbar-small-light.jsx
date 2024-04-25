"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Link1 } from "react-scroll";
import * as Unicons from "@iconscout/react-unicons";

export default function NavbarSmallLight() {
  const [isOpen, setMenu] = useState(true);
  const [navbarTop, setNavbarTop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
    window.scrollTo(0, 0);
  }, []);

  function windowScroll() {
    setNavbarTop(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
    );
  }
  const toggleMenu = () => {
    setMenu(!isOpen);
  };
  console.log(navbarTop, "navbarTop");
  return (
    <>
      <nav
        className={`${
          navbarTop
            ? "sticky z-10 top-0 left-0 w-full bg-white"
            : navbarTop === false
            ? "bg-transparent"
            : ""
        } font-lexend`}
        id="navbar"
      >
        <div className=" flex items-center justify-between bg-none">
          <a className="" href="/">
            {" "}
            <Image
              src="/images/asal-logo.png"
              className="l-light"
              alt=""
              width={113}
              height={28}
            />
          </a>
          <div className="flex flex-wrap">
            <li className={`nav-item`}>
              <Link1 to="/home" activeClass="active" className="nav-link">
                Home
              </Link1>
            </li>

            <li className={`nav-item`}>
              <Link href="/about" activeClass="active" className="nav-link">
                About Us
              </Link>
            </li>

            <li className={`nav-item`}>
              <Link href="/service" activeClass="active" className="nav-link">
                Service
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link href="/pricing" activeClass="active" className="nav-link">
                Pricing
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link href="/shop" activeClass="active" className="nav-link">
                Shop
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
