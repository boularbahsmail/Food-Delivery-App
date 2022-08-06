import React from 'react';
import Link from "next/link";

// React Icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdStar } from "react-icons/md";

// Featured Food Data
import foods from './data/data.js';

const FeaturedFood = () => {
  return (
    <div className="mb-24 mt-16 pt-10">
        <div className="flex flex-col justify-center items-center gap-3 sm:flex-row sm:justify-between sm:gap-0">
            <h1 className="text-3xl font-bold sm:text-4xl">Our Featured Food</h1>
            <Link href="/menu">
                <a className="flex justify-center items-center gap-2 text-red-500" title="See All">
                  <span>See all Food</span>
                  <HiOutlineArrowNarrowRight />
                </a>
            </Link>
        </div>
        <div className="my-16 grid place-items-center grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
          {
            foods ? 
              foods.map((food, index) =>
                <div key={index} className="card bg-gray-200 rounded-xl overflow-hidden shadow-slate-900" title={food.title}>
                  <Link href="">
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
        <div className="flex justify-center items-center">
          <Link href="/menu">
            <a className="flex justify-center items-center gap-2 text-red-500 font-semibold bg-white w-max m-auto py-2 px-4 border border-red-500 ease-in-out duration-150 hover:bg-red-500 hover:text-white rounded-md md:py-3 md:px-6" title="See All">
              <span>See all Food</span>
              <HiOutlineArrowNarrowRight />
            </a>
          </Link>
        </div>
    </div>
  )
}

export default FeaturedFood;