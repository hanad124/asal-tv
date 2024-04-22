'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const NavbarSMallLight = dynamic(()=>import('../components/navbar-small-light'));
const Switcher = dynamic(()=>import('../components/Switcher'));
const Footer = dynamic(()=>import('../components/footer'));
const About = dynamic(()=>import('../components/about'));
const OurServices = dynamic(()=>import('../components/our-services'));
const ComfortablePricing = dynamic(()=>import('../components/comfortable-pricing'));
const ClientSreview = dynamic (()=>import('../components/clientsreview'));
const BlogsNews = dynamic(()=>import('../components/blogs-news'));
const GetInTouch = dynamic(()=>import('../components/get-in-touch'));
import * as Unicons from '@iconscout/react-unicons';

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

export default function IndexTwo() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />
            <NavbarSMallLight />
            <section className="py-36 lg:py-56 w-full table relative bg-[url('/images/bg/bg-2.jpg')] bg-center bg-no-repeat" id="home">
                <div className="absolute inset-0 bg-slate-950/60"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 mt-10">
                        <h3 className="font-medium lg:leading-normal leading-normal lg:text-[40px] text-4xl mb-5 mt-10 text-white">Get Things Done By <br /> Great Remote Team</h3>

                        <p className="text-lg font-medium max-w-xl text-white/60">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>

                        <div className="subcribe-form mt-6">
                            <form className="relative max-w-xl">
                                <input className="rounded-full bg-white/70 h-12 w-full py-3 ps-5 pe-40 text-slate-950 dark:text-white" placeholder="Email Address / Phone Number" />
                                <button type="submit" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full absolute h-11 top-0.5 end-0.5">Register Now <i className="uil uil-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <OurServices title="Our Services" desc="This is just a simple text made for this unique and awesome template, you can replace it with any text."/>
            <section className="relative md:py-24 py-16 md:pt-0 pt-0 bg-gray-50 dark:bg-slate-800">
                <div className="container">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-1">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="relative">
                                        <Image src="/images/cta.jpg" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} />
                                        <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                                             <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="yba7hPeTSjk" className="lightbox lg:h-20 h-16 lg:w-20 w-16 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-violet-600 text-violet-600 hover:text-white duration-500 ease-in-out mx-auto">
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
                                                    <h6 className="text-white/50">Customers needs</h6>
                                                    <h3 className="md:text-2xl text-xl font-medium text-white mt-2">Spaces for every size <br /> and type of need.</h3>
                                                </div>
                                            </div>

                                            <div className="section-title text-md-start">
                                                <p className="text-white/50 max-w-xl mx-auto mb-2">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                                                 <Link href="#" className="text-white inline-flex items-center gap-1">Read More<Unicons.UilArrowRight width={16}/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 end-0 start-0 h-4/5 md:h-2/3 bg-violet-600"></div>
            </section>
            <ComfortablePricing  title="Our Comfortable Pricing" desc="Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page."/>
            <ClientSreview />
            <BlogsNews title="Blogs or News" desc="Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page."/>
            <GetInTouch />
            <Footer />
            <Switcher/>
        </>
    )
}