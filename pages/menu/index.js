import React from 'react';
import Head from "next/head";
import Link from "next/link";

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Scroll To Top Hook
import useScrollTop from '../../Hooks/useScrollTop';

// Featured Food
import foods from '../../components/Featured-Food/data/data.js';

// Menu's
import menus from '../../components/Menus-Data/data.js';

// React Icons
import { MdStar, MdOutlineAddShoppingCart } from "react-icons/md";

export default function Menu() {

    useScrollTop();

  return (
    <div>
      <Head>
        <title>Menu - DeliPat</title>
        <meta name="description" content="Responsive, clean and open source food delivery app using Next.js & Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-3 max-w-7xl m-auto">
        <Navbar />
        <div>
            <div className="title-banner my-6 py-24 bg-red-500 text-center rounded-lg sm:my-10">
                <h1 className="text-3xl font-bold text-white mx-6 md:text-5xl sm:text-4xl">
                    Sweet, Salty or Spicy, Whatever you want
                </h1>
            </div>
            <h1 className="mt-8 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">
                Our Featured Food
            </h1>
            <p className="my-5 text-gray-600 text-md leading-9 text-justify sm:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                This last been the industrys standard dummy text ever since the 1500s,
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                This last been the industrys standard dummy text ever since the 1500s,
            </p>
            <div className="my-12 grid place-items-center grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
                {
                    foods ? 
                    foods.map((food, index) =>
                        <div key={index} className="card relative bg-gray-200 rounded-xl overflow-hidden shadow-slate-900" title={food.title}>
                        <div className="absolute top-3 right-0 px-3 z-50">
                            <button className="bg-white text-gray-900 text-xl h-10 w-10 flex justify-center items-center rounded-md font-normal active:scale-95" title="Add To Cart">
                              <MdOutlineAddShoppingCart />
                            </button>
                        </div>
                        <Link href={`/${food.route}`}>
                            <a>
                            <div className="relative">
                                <img src={food.image_url} alt="Food-Image" max-height="200px" width="100%" className="meal-img ease-in-out duration-300" />
                                <div className="info absolute left-0 bottom-0 bg-gray-900 p-3 pb-4 ease-in-out duration-300 opacity-0">
                                <h3 className="flex justify-between items-center text-xl font-semibold mb-1 text-white">
                                    <span>{food.title}</span>
                                    <span>${food.price}</span>
                                </h3>
                                <p className="text-sm text-gray-400 mb-2">{food.description}</p>
                                <span className="text-xl text-yellow-600 flex items-center gap-1">
                                {
                                    Array.from({ length: food.rating }).map((_, index) => (
                                    <MdStar key={index}/>
                                    ))
                                }
                                </span>
                                </div>
                            </div>
                            </a>
                        </Link>
                        </div>
                    )
                    : null
                }
            </div>
            <hr />
            <h1 className="mt-8 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">
                Full Menu&lsquo;s
            </h1>
            <p className="my-5 text-gray-600 text-md leading-9 text-justify sm:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                This last been the industrys standard dummy text ever since the 1500s,
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                This last been the industrys standard dummy text ever since the 1500s,
            </p>
            <div className="my-12 grid place-items-center grid-cols-1 gap-4 md:grid-cols-2">
                {
                    menus ? 
                    menus.map((menu, index) =>
                        <div key={index} className="card bg-gray-200 rounded-xl overflow-hidden shadow-slate-900" title={menu.title}>
                        <Link href="">
                            <a>
                            <div className="relative">
                                <img src={menu.image_url} alt="Food-Image" max-height="400px" width="100%" className="meal-img ease-in-out duration-300" />
                                <div className="info absolute left-0 bottom-0 bg-gray-900 p-3 pb-4 w-full ease-in-out duration-300 opacity-0">
                                <h3 className="flex justify-between items-center text-md font-semibold mb-0 text-white sm:mb-2 sm:text-2xl">
                                    <span>{menu.title}</span>
                                    <span>${menu.price}</span>
                                </h3>
                                <p className="text-sm text-gray-400 mb-1 sm:mb-3 sm:text-md">{menu.description}</p>
                                <span className="text-md text-yellow-600 flex items-center gap-1 sm:text-xl">
                                {
                                    Array.from({ length: menu.rating }).map((_, index) => (
                                    <MdStar key={index}/>
                                    ))
                                }
                                </span>
                                </div>
                            </div>
                            </a>
                        </Link>
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

