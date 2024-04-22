'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation'


import * as Unicons from '@iconscout/react-unicons';


export default function Navbar(props) {
    const [isOpen, setMenu] = useState(true);
     const[navbarTop, setNavbarTop] = useState(false); 

     const pathname = usePathname()

    useEffect(() => {
     if (typeof window !== "undefined") {
       window.addEventListener("scroll", windowScroll);
     }
     window.scrollTo(0, 0)
    }, []);
 
     function windowScroll() {
         setNavbarTop(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50)
     }
    const toggleMenu = () => {
        setMenu(!isOpen)
    }

    return (
        <>
            <nav className={`${navbarTop === true ? 'is-sticky' : ''} navbar font-lexend `} id="navbar">
                <div className="container flex flex-wrap items-center justify-end">
                <a className="navbar-brand md:me-8" href="/">
                        <span className="inline-block dark:hidden">
                            <Image src="/images/logo-dark.png" className="l-dark" alt="" width={113} height={28}/>
                            <Image src="/images/logo-light.png" className="l-light" alt="" width={113} height={28}/>
                        </span>
                        <Image src="/images/logo-light.png" className="hidden dark:inline-block" alt="" width={113} height={28}/>
                    </a>

                    <div className="nav-icons flex items-center lg_992:order-2 ms-auto lg:ms-4">
                        <ul className="list-none menu-social mb-0">
                            <li className="inline">
                                 <Link href="/login" onClick={toggleMenu}
                                    className="h-9 w-9 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><Unicons.UilUser width={16}/></Link>
                            </li>
                        </ul>

                        <button data-collapse="menu-collapse" type="button"

                            className=" btn collapse-btn inline-flex items-center ms-3 text-slate-950 dark:text-white lg_992:hidden"
                            aria-controls="menu-collapse" aria-expanded="false">
                            <span className="sr-only">Navigation Menu</span>
                            <i className="mdi mdi-menu text-[24px]"></i>
                        </button>
                    </div>
                    <div className={`${isOpen === true ? 'navigation lg_992:order-1 lg_992:flex hidden ms-auto ' : 'navigation lg_992:order-1 lg_992:flex ms-auto block'}`} id="menu-collapse">

                        <ul className="navbar-nav nav-light sidebar-nav" id="navbar-navlist">
                            <li className={`nav-item navbar-item ${pathname === '' ? 'active' : ''}`}>
                                 <Link href="/" className="nav-link ">Home</Link>
                            </li>
                            <li className={`nav-item navbar-item  ${pathname === '/aboutus' ? 'active' : ''}`}>
                                 <Link href="/aboutus" className="nav-link">About Us</Link>
                            </li>
                            <li className={`nav-item navbar-item ${pathname === '/services' ? 'active' : ''}`}>
                                 <Link href="/services" className="nav-link">Services</Link>
                            </li>
                            <li className={`nav-item navbar-item ${pathname=== '/pricing' ? 'active' : ''}`}>
                                 <Link href="/pricing" className="nav-link">Pricing</Link>
                            </li>
                            <li className={`nav-item navbar-item ${pathname === '/team' ? 'active' : ''}`}>
                                 <Link href="/team" className="nav-link">Team</Link>
                            </li>
                            <li className={`nav-item navbar-item ${pathname === '/blogs' ? 'active' : ''}`}>
                                 <Link href="/blogs" className="nav-link">Blogs</Link>
                            </li>
                            <li className={`nav-item navbar-item ${pathname === '/contactus' ? 'active' : ''}`}>
                                 <Link href="/contactus" className="nav-link">Contact us</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav >

        </>
    )
}


