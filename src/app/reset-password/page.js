'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ArrowLeft } from 'react-feather';
const Switcher = dynamic(()=>import('../components/Switcher'))


export default function Login() {
    return (
        <>
            <body className="font-inter text-base text-slate-950 dark:text-white dark:bg-slate-900">

                <section className="position-relative bg-[url('/images/bg/bg-4.jpg')] bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-slate-950/50"></div>
                    <div className="container-fluid relative">
                        <div className="grid grid-cols-1">
                            <div className="lg:col-span-4">
                                <div className="flex flex-col min-h-screen md:px-12 py-12 px-3">

                                    <div className="text-center mx-auto">
                                        <Link href="/"><Image src="/images/logo-light.png" alt=""  width={113} height={28}/></Link>
                                    </div>

                                    <div className="text-center my-auto">
                                        <div className="w-full max-w-sm m-auto px-6 py-8 bg-white dark:bg-slate-900 rounded-md shadow-lg shadow-slate-500 dark:shadow-gray-800">
                                            <div className="grid grid-cols-1">
                                            <h5 className="mb-8 text-xl dark:text-white font-medium font-lexend">Reset Your Password</h5>
                                                <p className="text-slate-400 mb-6">Please enter your email address. You will receive a link to create a new password via email.</p>
                                                <form className="text-start">
                                                    <div className="grid grid-cols-1">
                                                        <div className="mb-4">
                                                            <label className="form-label font-medium" for="LoginEmail">Email Address:</label>
                                                            <input id="LoginEmail" type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2" placeholder="name@example.com" />
                                                        </div>

                                                        <div className="mb-4">
                                                            <Link href="" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md w-full">Send</Link>
                                                        </div>

                                                        <div className="text-center">
                                                            <span className="text-slate-400 me-2">Remember your password ? </span><Link href="/login" className="text-slate-950 dark:text-white font-bold"> Sign in</Link>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="text-center">
                                        <p className="text-white/80">© {new Date().getFullYear()} Ovaxo. Design & Develop with <i className="mdi mdi-heart text-red-700"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="fixed bottom-3 end-3">
                    <Link href="" className="back-button h-9 w-9 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><ArrowLeft className="h-4 w-4"></ArrowLeft></Link>
                </div>

              
            <Switcher/>
            </body>

        </>
    )
}
