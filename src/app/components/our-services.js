'use client'
import React from 'react';
import Link from 'next/link';
import { Hexagon } from 'react-feather';
import { services } from '../Data/data';

export default function OurServices({title, desc}) {
    return (
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="features">
            <div className="container lg mx-auto">
                {title || desc ?
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-2xl text-xl font-medium font-lexend">{title}</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">{desc}</p>
                    </div>    
                    :'' }
                

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {services.map((item, index) => {
                        const Icon = item.Icon
                        return(
                            <div key={index} className="group relative lg:px-6 mt-4 rounded-xl overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <Hexagon className="h-28 w-28 fill-violet-600/5 mx-auto rotate-[30deg]"
                                    ></Hexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-violet-600 rounded-xl text-3xl flex align-middle justify-center items-center">
                                        <Icon width={30} height={30}/>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link href="/services" className="font- text-lg h5 hover:text-violet-600 font-lexend" >
                                        {item.title}
                                    </Link>
                                    <p className="text-slate-400 mt-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};