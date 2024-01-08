"use client"
import React from 'react'
import { poppins } from '../../fonts'
import Image from 'next/image'
type Props = {}

const Slide1 = (props: Props) => {
  return (


    <section className="overflow-hidden py-3 h-full  text-left sm:grid sm:grid-cols-2 sm:items-center bg-purple-700">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h2 className="xl:text-6xl lg:text-5xl text-3xl md:text-left  font-bold text-gray-50 ">
            The Future of Commerce and Finance for Indian Businesses
          </h2>

          <p className="hidden text-gray-200 md:mt-4 md:block">
            Introducing Bucksbox - Your All-In-One Solution to Accept Payments, Manage Inventory,
            Understand Customers and Grow Your Business
          </p>

          <div className="mt-4 md:mt-8 ">
            <a
              href="#"
              className="inline-block rounded  bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
      <div className='h-full flex items-center justify-center  mx-auto'>
      <img
        alt="Violin"
        src="bucksbox-2.jpg"
        className="max-w-[700px] h-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        
      />
      </div>
      
    </section>


  )
}

export default Slide1