import Link from 'next/link'
import React from 'react'

type Props = {
    title: string
    sub_title: string
    image: string
    description: string
}

const Slide = ({image, title, sub_title, description}: Props) => {
  return (
    <section className="py-14 keen-slider__slide">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 xl:flex">
                    <div className="flex-1  lg:block">
                        <img src={image} className="xl:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600 font-semibold">
                            {sub_title}
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            {title}
                        </p>
                        <p className="mt-3 text-gray-600">
                            {description}
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
                </div>
            </div>
        </section>
  )
}

export default Slide