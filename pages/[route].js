import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Foods Data
import foods from '../components/Featured-Food/data/data.js';

// Scroll To Top Hook
import useScrollTop from '../Hooks/useScrollTop';

// React Icons
import { MdStar, MdOutlineAddShoppingCart } from "react-icons/md";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

export default function Product() {

    const router = useRouter();
    const product_query = router.query;

    useScrollTop();

    return (
        <div>
        <Head>
            <title>
                {foods.map((food) => product_query.route == food.route ? `${food.title} - DeliPat` : null)}
            </title>
            <meta name="description" content="Responsive, clean and open source food delivery app using Next.js & Tailwind CSS." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="p-3 max-w-7xl m-auto">
            <Navbar />
            <div className="mt-6 sm:mt-10">
                {
                    foods.map((food, index) => 
                        <div key={index}>
                            {
                                product_query.route == food.route ?
                                    <div className="grid gird-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
                                        <div className="overflow-hidden rounded-xl">
                                            <img src={food.image_url} alt="Product-Image" className=" w-full"/>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h1 className="text-3xl text-red-500 font-semibold sm:text-4xl">
                                                {food.title}
                                            </h1>
                                            <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                                                {food.description}
                                            </p>
                                            <span className="my-3 text-xl text-yellow-600 flex items-center gap-1 sm:my-4">
                                                {
                                                    Array.from({ length: food.rating }).map((_, index) => (
                                                        <MdStar key={index}/>
                                                    ))
                                                }
                                            </span>
                                            <span className="text-xl text-red-500 font-semibold sm:text-2xl">
                                                ${food.price}
                                            </span>
                                        </div>
                                        <form className="flex flex-col justify-start items-center w-full m-auto" onSubmit={(e) => e.preventDefault()}>
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
                                            <div className="mb-6 text-left flex flex-col gap-2 w-full">
                                                <label className="font-semibold">Address</label>
                                                <input className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500" type="text" placeholder="Rabat-Agdal, Moroco - NR 893" required />
                                            </div>
                                            <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                                                <div className="text-left flex flex-col gap-2 w-full">
                                                    <label className="font-semibold">Phone</label>
                                                    <input className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500" type="number" placeholder="+212 0 00 00 00 00" required />
                                                </div>
                                                <div className="text-left flex flex-col gap-2 w-full">
                                                    <label className="font-semibold">Quantity</label>
                                                    <input className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500" type="number" defaultValue="1" required />
                                                </div>
                                            </div>
                                            <div className="w-full text-left">
                                                <button className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6" title="Confirm Order">
                                                    <span>Confirm Order</span>
                                                    <HiOutlineArrowCircleRight />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                : null
                            }
                        </div>
                    )
                }
                <p className="mt-8 text-gray-600 text-md leading-8 text-justify sm:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Sed enim ut sem viverra aliquet eget sit. Odio facilisis mauris sit 
                    amet massa vitae tortor. Tincidunt vitae semper quis lectus nulla.
                </p>
            </div>

            {/* Products Except The Selected One */}
            <h1 className="mt-10 text-black text-3xl font-semibold">
                Products you may like
            </h1>
            <div className="mt-10 grid place-items-center grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
                {
                    foods.map((food, index) =>
                        product_query.route != food.route ?
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
                        : null
                    )
                }
            </div>
            <Footer />
        </div>
        </div>
    )
}
