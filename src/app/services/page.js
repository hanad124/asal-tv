'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Navbar = dynamic(()=>import('../components/navbar'));
const Switcher = dynamic(()=>import('../components/Switcher'));
const Footer = dynamic(()=>import('../components/footer'));
const ClientReview2 = dynamic (()=>import('../components/clientReview2'));
const OurServices = dynamic(()=>import('../components/our-services'));
import * as Unicons from '@iconscout/react-unicons';
export default function Services() {
    return (
        <>
            <Navbar />
            <section className="py-28 w-full table relative bg-[url('/images/bg/bg-5.jpg')] bg-bottom bg-no-repeat" id="home">
                <div className="absolute inset-0 bg-slate-950/80"></div>

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="font-medium leading-normal text-3xl mt-10 text-white font-lexend">Our Services</h3>
                    </div>
                </div>
            </section>
            <section >
                <OurServices />
            </section>

            <section className="relative  bg-gray-50 dark:bg-slate-800">
                <ClientReview2/>
                <div className="container lg:py-24 py-16">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 md:text-2xl text-xl font-medium">Have Question ? Get in touch!</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>

                        <div className="mt-6">
                             <Link href="/contactus" className="py-2 px-5 font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md items-center inline-flex gap-1"><Unicons.UilPhone width={16}/> Contact us</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}
