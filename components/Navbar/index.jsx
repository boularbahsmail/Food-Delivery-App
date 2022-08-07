import React, { useState } from 'react';
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

// React Icons
import { MdOutlineDeliveryDining, MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [navOpen, setNavbOpen] = useState(false);

  const closeNav = () => {
    if (!navOpen) {
      setNavbOpen(navOpen);
      navOpen = true;
    } else {
      setNavbOpen(!navOpen);
      navOpen = false;
    }
  }
  return (
    <nav className="pt-0 flex justify-between items-center lg:pt-2">
        <div className="z-50">
            <h2 title="DeliPat - Your Favourite Food Delivery Partner">
              <Link href="/">
                <a className="flex flex-col justify-center items-center gap-0">
                  <MdOutlineDeliveryDining className="text-4xl text-red-500" />
                  <span className={`text-sm text-black font-semibold ${styles.brand} ${navOpen ? `${styles.open}` : ""}`}>DeliPat</span>
                </a>
              </Link>
            </h2>
        </div>

        <div>
          <ul className={`menu hidden absolute left-0 top-0 px-3 pb-6 pt-20 bg-black w-full sm:w-unst sm:bg-transparent sm:p-0 sm:static sm:flex sm:justify-center sm:items-center sm:gap-4 ${styles.menu} ${navOpen ? `${styles.open}` : ""}`}>
            <li className="text-white mb-3 font-semibold ease-in-out duration-150 hover:text-red-500 w-max sm:mb-0 sm:text-black" title="Home" onClick={() => closeNav()}>
              <Link href="/">Home</Link>
            </li>
            <li className="text-white mb-3 font-semibold ease-in-out duration-150 hover:text-red-500 w-max sm:mb-0 sm:text-black" title="About Us" onClick={() => closeNav()}>
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="text-white mb-3 font-semibold ease-in-out duration-150 hover:text-red-500 w-max sm:mb-0 sm:text-black" title="Menu" onClick={() => closeNav()}>
              <Link href="/menu">Menu</Link>
            </li>
            <li className="text-white font-semibold ease-in-out duration-150 hover:text-red-500 sm:text-black" title="Contact Us" onClick={() => closeNav()}>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link href="/cart">
            <a title="Cart">
              <MdOutlineShoppingCart className={`font-semibold text-xl text-black ${styles.cart} ${navOpen ? `${styles.open}` : ""}`} />
            </a>
          </Link>
        </div>

        <div 
            className={`z-50 flex flex-col justify-center items-center bg-gray-100 h-9 w-10 rounded-md sm:hidden ${styles.hamburger} ${navOpen ? `${styles.open}` :  ""}`}
            onClick={() => setNavbOpen(!navOpen)}>
          <span className="h-0.5 w-7 bg-black mb-1.5 ease-in-out duration-150"></span>
          <span className="h-0.5 w-7 bg-black mb-1.5 ease-in-out duration-150"></span>
          <span className="h-0.5 w-7 bg-black ease-in-out duration-150"></span>
        </div>
    </nav>
  )
}

export default Navbar;
