import React from "react";
import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CustomersBanner from '../components/Customers-Banner';
import FeaturedFood from '../components/Featured-Food';
import ServicesBanner from "../components/Services-Banner";
import AboutUsBanner from "../components/AboutUs-Banner";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

// Scroll To Top Hook
import useScrollTop from '../hooks/useScrollTop';

export default function Home() {

  useScrollTop();
  
  return (
    <div>
      <Head>
        <title>DeliPat - Your Favourite Food Delivery Partner</title>
        <meta name="description" content="Responsive, clean and open source food delivery app using Next.js & Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-3 max-w-7xl m-auto">
        <Navbar />
        <Hero />
        <CustomersBanner />
        <FeaturedFood />
        <ServicesBanner />
        <AboutUsBanner />
        <Subscription />
        <Footer />
      </div>
    </div>
  )
}
