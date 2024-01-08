import Link from 'next/link'
import React from 'react'

type Props = {}

const Orders = (props: Props) => {
  return (
    <section className="relative max-w-screen-xl mx-auto py-20 px-4 md:px-8 ">
    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
    <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h3 className="text-3xl text-gray-700 font-extrabold md:text-4xl lg:text-6xl mb-10">
                Effortlessly Manage and Track Every Order!
            </h3>
            <p className="text-gray-500 leading-relaxed mt-3 mb-10">
            Unlock the power of our amazing dashboard to manage orders seamlessly. Get comprehensive details and track order timelines effortlessly, ensuring a smooth and efficient order management experience.
            </p>
            <Link
                className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                href="/contact">
                Enquiry
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </Link>
        </div>
        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
            <img 
                src="order1.png" 
                alt="" 
                className="w-full" 
            />
        </div>
    </div>
</section>
  )
}

export default Orders