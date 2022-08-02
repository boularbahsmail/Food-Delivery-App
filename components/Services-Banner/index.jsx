import React from "react";
import Link from "next/link";

const ServicesBanner = () => {
    return (
        <div className="py-8 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10">
            <div className="mb-16 lg:mb-0">
                <img src="./online_groceries.svg" alt="Online-Groceries" width="400px" max-width="100%" />
            </div>

            <div className="text-center lg:mb-0 lg:text-left">
                <span className="uppercase font-semibold text-red-500 text-md">
                    Food Delivery
                </span>
                <h1 className="text-4xl font-bold leading-12 mt-4 md:text-5xl">
                    Best Services to fulfuill your expectatios.
                </h1>
                <p className="my-6 text-gray-600 leading-8">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    This last been the industrys standard dummy text ever since the 1500s,
                </p>
                <Link href="">
                    <a className="flex justify-center items-center gap-2 w-max m-auto py-2 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:py-3 md:px-6" title="Order Now">
                        Read More
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default ServicesBanner;