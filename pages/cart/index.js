import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Scroll To Top Hook
import useScrollTop from '../../Hooks/useScrollTop';

// React Icons
import { MdStar } from "react-icons/md";
import { BiPlus, BiMinus } from "react-icons/bi";

// Cart Data
import products from '../../components/Cart-Data/data.js';

export default function Cart() {

    useScrollTop();

  return (
    <div>
      <Head>
        <title>Cart - DeliPat</title>
        <meta name="description" content="Responsive, clean and open source food delivery app using Next.js & Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-3 max-w-7xl m-auto">
        <Navbar />
        <div>
            <h1 className="mt-8 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">
                Cart
            </h1>
            <p className="my-5 text-gray-600 text-md leading-9 text-justify sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <div className="mt-8 grid place-items-center grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
                {
                    products ?
                    products.map((product, index) => 
                      <div key={index} className="relative bg-gray-200 rounded-xl overflow-hidden shadow-slate-900 border border-gray-200" title={product.title}>
                        <div className="">
                            <img src={product.image_url} alt="Food-Image" max-height="200px" width="100%" className="ease-in-out duration-300" />
                            <div className="bg-white p-4 px-3 pb-4 ease-in-out duration-300">
                              <h3 className="mb-1">
                                  <Link href={`/${product.route}`}>
                                    <a className="flex justify-between items-center text-xl font-semibold text-black">
                                      <span>{product.title}</span>
                                      <span>${product.price}</span>
                                    </a>
                                  </Link>
                              </h3>
                              <p className="text-sm text-gray-400 mb-2">{product.description}</p>
                              <span className="text-xl text-yellow-600 flex items-center gap-1">
                                {
                                  Array.from({ length: product.rating }).map((_, index) => (
                                    <MdStar key={index}/>
                                  ))
                                }
                              </span>
                              <div className="absolute top-3 left-0 right-0 px-3 flex justify-between items-center gap-2 w-full">
                                  <button className="bg-white text-gray-900 text-xl h-10 w-10 flex justify-center items-center rounded-md font-normal active:scale-95" title="Decrease">
                                    <BiMinus />
                                  </button>
                                  <button className="bg-white text-gray-900 text-xl h-10 w-10 flex justify-center items-center rounded-md font-normal active:scale-95" title="Increase">
                                    <BiPlus />
                                  </button>
                              </div>
                            </div>
                        </div>
                      </div>
                    )
                : null
                }
            </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
