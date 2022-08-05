import React from 'react';
import Head from 'next/head';

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Scroll To Top Hook
import useScrollTop from '../../hooks/useScrollTop';

export default function About() {

    useScrollTop();

  return (
    <div>
      <Head>
        <title>About Us - DeliPat</title>
        <meta name="description" content="Responsive, clean and open source food delivery app using Next.js & Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-3 max-w-7xl m-auto">
        <Navbar />
        <div>
            <div className="title-banner my-6 py-24 bg-red-500 text-center rounded-lg sm:my-10">
                <h1 className="text-3xl font-bold text-white mx-6 md:text-5xl sm:text-4xl">
                    A Strong Services Providing
                </h1>
            </div>
            <h1 className="mt-8 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">
                Who are we?
            </h1>
            <p className="my-5 text-gray-600 text-md leading-9 text-justify sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Sed enim ut sem viverra aliquet eget sit. Odio facilisis mauris sit 
                amet massa vitae tortor. Tincidunt vitae semper quis lectus nulla. 
                Ipsum dolor sit amet consectetur. Lectus arcu bibendum at varius 
                vel pharetra vel turpis. Purus sit amet volutpat consequat mauris. 
                Dui faucibus in ornare quam viverra orci. Viverra adipiscing 
                at in tellus integer feugiat scelerisque varius morbi. Dictum 
                sit amet justo donec enim diam. Ante metus dictum at tempor 
                commodo ullamcorper a. Imperdiet massa tincidunt nunc 
                pulvinar sapien et ligula ullamcorper malesuada. 
                Enim nunc faucibus a pellentesque sit. Egestas purus 
                viverra accumsan in nisl. Placerat in egestas erat imperdiet. 
                Eu nisl nunc mi ipsum faucibus vitae aliquet. Eget nullam non nisi est sit.
                Proin gravida hendrerit lectus a. Ultricies leo integer 
                malesuada nunc. Ut placerat orci nulla pellentesque. 
                Sit amet mauris commodo quis imperdiet massa tincidunt nunc. 
                Morbi tristique senectus et netus et. Vivamus at augue eget arcu 
                dictum varius duis at consectetur. Mattis pellentesque id nibh 
                tortor id aliquet lectus proin nibh. Curabitur vitae nunc sed 
                velit dignissim sodales ut eu. Gravida quis blandit turpis cursus. 
                Quis hendrerit dolor magna eget est. Elementum nisi quis eleifend 
                quam adipiscing vitae proin. Nunc consequat interdum varius sit 
                amet mattis. Neque aliquam vestibulum morbi blandit cursus 
                risus at ultrices. Sem viverra aliquet eget sit amet tellus.
            </p>
            <div className="my-6 grid place-items-center grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 sm:place-items-start">
                <div>
                    <img src="https://bit.ly/3d7jcex" className="rounded-md" alt="Restaurant-Image" />
                </div>
                <div>
                    <img src="https://bit.ly/3zyjWAR" className="rounded-md" alt="Restaurant-Image" />
                </div>
                <div>
                    <img src="https://bit.ly/3Qq64j3" className="rounded-md" alt="Restaurant-Image" />
                </div>
            </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
