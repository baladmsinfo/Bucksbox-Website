import GridList from '@/app/components/GridList'
import Link from 'next/link'
import React from 'react'

type Props = {}

const MSolution = (props: Props) => {
    return (
        <div className="container mx-auto flex flex-col bg-white lg:p-10 mf:p-5 p-3 rounded-lg  my-20">

            <div className="my-auto mb-8 mt-12 w-full grid-cols-1 place-content-center md:grid-cols-1  md:gap-5 lg:grid lg:grid-cols-2">
                <div className="col-span-1 flex flex-col justify-center text-center md:w-full lg:w-full lg:justify-center lg:text-left">
                    <div className="mb-4 flex items-center justify-center lg:justify-start">
                        
                        <h4 className="ml-2 text-sm font-bold tracking-widest text-primary text-purple-600">
                        Your Ultimate Business Solution Hub
                        </h4>
                    </div>
                    <h1 className="mb-8 text-3xl font-extrabold leading-tight text-dark-grey-900 lg:text-5xl xl:w-11/12 xl:text-6xl">
                    Elevate Your success with Our <span className='text-purple-700'>All-in-One</span>  Solution
                    </h1>
                    <p className="mb-10 text-base font-medium leading-7 text-dark-grey-600 xl:w-3/4">
                    Elevate your business with our powerful app – featuring diverse payment options, robust analytics, and a transaction tracker. Streamline operations, gain insights, and grow effortlessly with our comprehensive solution.
                    </p>

                  
                    <div className="flex justify-center lg:justify-start items-center gap-5 mb-3">
                        <Link href={"https://play.google.com/store/apps/details?id=com.bucksboxpay.in"} target='blank' className="flex text-white items-center rounded-xl bg-purple-500 px-5 py-4 lg:text-md text-sm font-medium transition hover:bg-purple-blue-600 ">
                            Download
                            <span className='w-[25px] ml-3'>
                                <img src="play.svg" alt="" />
                            </span>
                        </Link>
                        <Link href={'/contact'} className="flex items-center rounded-xl  px-5 py-4 text-sm font-medium text-dark-grey-900 bg-indigo-600 text-white">
                            Book a free call
                        </Link>
                    </div>
                </div>
                <div className="col-span-1   items-center justify-end lg:flex">
                    <img
                        className="md:w-full w-full rounded-2xl items-end "
                        src="app1.png"
                        alt="header image"
                    />
                </div>
            </div>
        </div>

    )
}

export default MSolution