import React from 'react';

// React Icons
import { FaStar } from "react-icons/fa";

const CustomersBanner = () => {
  return (
    <div className="my-12 flex flex-col justify-center items-center gap-10 md:my-0 md:flex-row gap-4">
        <div className="avatars flex">
            <img className="h-16 w-16 bg-red-500 rounded-full" src="https://bit.ly/3vuLFkC" />
            <img className="5-16 w-16 bg-green-500 rounded-full" src="https://bit.ly/3BzeEHU" />
            <img className="5-16 w-16 bg-blue-500 rounded-full" src="https://bit.ly/3zkb8yj" />
            <img className="5-16 w-16 bg-yellow-500 rounded-full" src="https://bit.ly/3JkGObJ" />
        </div>
        <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold text-neutral-900">
                Our Happy Customers
            </h1>
            <h2 className="font-semibold flex justify-start items-center gap-1">
                <FaStar className="text-red-500 mb-1" />
                <span>
                    4.9 <span className="text-gray-400 font-normal text-sm">
                        (More than 10.2K Reviews)
                    </span>
                </span>
            </h2>
        </div>
    </div>
  )
}

export default CustomersBanner;