import React from 'react';
import Head from 'next/head';

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Scroll To Top Hook
import useScrollTop from '../../Hooks/useScrollTop';

// React Icons
import { BiSend } from "react-icons/bi";

export default function ContactUs() {
    
    useScrollTop();

    return (
        <div>
        <Head>
            <title>Contact Us - DeliPat</title>
            <meta name="description" content="Responsive, clean and open source food delivery app using Next.js & Tailwind CSS." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="p-3 max-w-7xl m-auto">
            <Navbar />
            <div>
                <div className="title-banner my-6 py-24 bg-red-500 text-center rounded-lg sm:my-10">
                    <h1 className="text-3xl font-bold text-white mx-6 md:text-5xl sm:text-4xl">
                        24/7 Full Support
                    </h1>
                </div>
                <h1 className="mt-8 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">
                    Get in touch with us
                </h1>
                <p className="my-5 text-gray-600 text-md leading-9 text-justify sm:text-left">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    This last been the industrys standard dummy text ever since the 1500s,
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    This last been the industrys standard dummy text ever since the 1500s,
                </p>
                <form className="my-10 flex flex-col justify-start items-center max-w-xl m-auto" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                        <div className="text-left flex flex-col gap-2 w-full">
                            <label className="font-semibold">Full Name</label>
                            <input className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500" type="text" placeholder="Ismail Boularbah" required />
                        </div>
                        <div className="text-left flex flex-col gap-2 w-full">
                            <label className="font-semibold">Email</label>
                            <input className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500" type="email" placeholder="boularbahismail01@gmail.com" required />
                        </div>
                    </div>
                    
                    <div className="text-left mb-6 flex flex-col gap-2 w-full">
                        <label className="font-semibold">Message</label>
                        <textarea className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 pb-16 px-4 md:py-3 md:pb-16 md:px-4 md:mb-0 focus:border-red-500" placeholder="Type a message..." required></textarea>
                    </div>
                    <div className="w-full text-left">
                        <button className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-sm font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:w-max md:px-6" title="Send">
                            <span>Send</span>
                            <BiSend />
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
        </div>
    )
}

