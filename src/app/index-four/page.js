'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const NavbarSmallLight = dynamic(()=>import('../components/navbar-small-light'));
const Switcher = dynamic(()=>import('../components/Switcher'));
const Footer = dynamic(()=>import('../components/footer'));
const About = dynamic(()=>import('../components/about'));
const OurServices = dynamic(()=>import('../components/our-services'));
const ComfortablePricing = dynamic(()=>import('../components/comfortable-pricing'));
const ClientSreview = dynamic (()=>import('../components/clientsreview'));
const BlogsNews = dynamic(()=>import('../components/blogs-news'));
const GetInTouch = dynamic(()=>import('../components/get-in-touch'));


import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import * as Unicons from '@iconscout/react-unicons';
export default function IndexFour() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <NavbarSmallLight />
            <section className="py-36 lg:py-48 w-full table relative bg-[url('/images/bg/bg-3.jpg')] bg-center bg-no-repeat" id="home">
                <div className="absolute inset-0 bg-slate-950 opacity-80"></div>
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 mt-10 md:grid-cols-2 gap-[30px] items-center">
                        <div className="lg:col-span-7">
                            <h4 className="text-white lg:text-[40px] text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative font-lexend">Bluid your audiance <br /> and sale more</h4>

                            <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                            <div className="relative mt-10">
                                 <Link href="" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md me-1">Get Started</Link>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />
                                 <Link href="#" onClick={() => setOpen(true)}
                                    className="h-9 w-9 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white lightbox"><i className="mdi mdi-play text-xl align-middle"></i></Link>
                                <small className="text-white text-sm uppercase align-middle ms-2">Watch Now</small>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-white dark:bg-slate-900 rounded-xl shadow md:p-10 p-6 lg:ms-10 z-10 relative">
                                <h4 className="mb-5 font-medium text-2xl dark:text-white font-lexend">We are offering to you <br /> 14 days free trial</h4>

                                <form>
                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <label className="dark:text-white font-medium">Name</label>
                                            <input name="name" id="fName" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2" placeholder="Name :" />
                                        </div>
                                        <div className="mb-5">
                                            <label className="dark:text-white font-medium">Email</label>
                                            <input name="email" id="yEmail" type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2" placeholder="Email :" />
                                        </div>
                                        <div className="mb-5">
                                            <label className="dark:text-white font-medium">Phone No.</label>
                                            <input name="number" id="phNumber" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2" placeholder="+12 12458 854" />
                                        </div>
                                         <Link href="#" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md w-full">Free Trial</Link>
                                    </div>
                                </form>
                            </div>
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
                                        <Image src="/images/cta.jpg" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}}/>
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
                                                 <Link href="" className="text-white items-center inline-flex">Read More <Unicons.UilArrowRight width={16}/></Link>
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
};
