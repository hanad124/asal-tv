'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { clientData } from '../Data/data';

export default function ClientSreview() {
    return (
        <>
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="testi">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-2xl text-xl font-medium font-lexend">Client&apos;s Review</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome
                            template, you can replace it with any text.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {clientData.map((item,index)=>{
                            return(
                                <ul className="space-y-8" key={index}>
                                <li className="rounded-lg shadow-lg dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <Image src={item.image} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" width={64} height={64} />
    
                                        <div className="ps-4">
                                             <Link href="" className="text-lg h5 hover:text-violet-600 duration-500 ease-in-out font-lexend">{item.name}</Link>
                                            <p className="text-slate-400">{item.designation}</p>
                                        </div>
                                    </div>
    
                                    <div className="mt-6">
                                        <p className="text-slate-400">{item.description}</p>
                                        <ul className="list-none mb-0 text-amber-400 mt-2">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </li>
    
                                <li className="rounded-lg shadow-lg dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <Image src={item.image1} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" width={64} height={64} />
    
                                        <div className="ps-4">
                                             <Link href="" className="text-lg h5 hover:text-violet-600 duration-500 ease-in-out font-lexend">{item.name1}</Link>
                                            <p className="text-slate-400">{item.designation1}</p>
                                        </div>
                                    </div>
    
                                    <div className="mt-6">
                                        <p className="text-slate-400">{item.description1}</p>
                                        <ul className="list-none mb-0 text-amber-400 mt-2">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
