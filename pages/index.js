import React from "react";
import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DeliPat - Your Favourite Food Delivery Partner</title>
        <meta name="description" content="Responsive, clean and open source food delivery app using Next.js & Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-3 max-w-6xl m-auto">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}
