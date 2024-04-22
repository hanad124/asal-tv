'use client'
import React from 'react'
import Link from 'next/link';
import { Hexagon } from 'react-feather';

import { Contact } from '../Data/data';

export default function ContactData() {

    
    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    {Contact.map((item, index) => {
                        const Icon = item.Icon
                        return(
                            <div className="text-center px-6" key={index}>
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <Hexagon className="h-28 w-28 fill-violet-600/5 mx-auto rotate-[30deg]"></Hexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-violet-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                       <Icon width={36} height={36}/>
                                    </div>
                                </div>
    
                                <div className="content mt-7">
                                    <h5 className="title h5 text-xl font-medium font-lexend">{item.title}</h5>
                                    <p className="text-slate-400 mt-3">{item.detail}</p>
    
                                    <div className="mt-5">
                                         <Link href="tel:+152534-468-854" className="text-violet-600 hover:text-violet-600 after:bg-violet-600 transition duration-500">{item.type}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
