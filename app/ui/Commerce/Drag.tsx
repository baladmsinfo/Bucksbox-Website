import Link from 'next/link'
import React from 'react'

type Props = {}

const Drag = (props: Props) => {
  return (
  //   <section className="text-gray-600 body-font bg-white px-5 py-10">
  //   <div className="lg:container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center">
  //     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
  //       <p className='bg-purple-600 text-white px-5 py-1 mb-2 rounded-full'>Payment Gateway</p>
  //       <h1 className="title-font md:text-4xl lg:text-4xl  text-3xl mb-4 font-extrabold text-gray-700">
  //       Bucksbox Payment Gateway 
  //       <br className="hidden lg:inline-block" />
  //       Effortless Payment Management for Your Ecommerce Site!
          
         
  //       </h1>
  //       <p className="mb-8 leading-relaxed">
  //       Unlock seamless payment experiences on your ecommerce website with our predefined Bucksbox Payment Gateway. Say goodbye to external hassles – easily manage payments without the need to integrate other gateways!
  //       </p>
  //       <div className="flex justify-center">
  //       <Link
  //               className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
  //               href="/contact">
  //               Enquiry
  //               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  //               </svg>
  //           </Link>
         
  //       </div>
  //     </div>
  //     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
  //       <img
  //         className="object-cover object-center rounded"
  //         alt="hero"
  //         src="pg.jpg"
  //       />
  //     </div>
  //   </div>
  // </section>
  <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 lg:p-10 bg-white">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
            <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                  <p className='text-white bg-purple-500 rounded-full text-sm p-2 text-center lg:w-2/5 w-44 mb-5'>Payment Gateway</p>
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                    <span className="text-purple-500">Bucksbox Payment Gateway  </span> Seamless Ecommerce Payment Management!
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3">
                    Unlock seamless payment experiences on your ecommerce website with our predefined Bucksbox Payment Gateway. Say goodbye to external hassles – easily manage payments without the need to integrate other gateways!
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
                        src="pg.jpg" 
                        alt="" 
                        className="w-full rounded-xl" 
                    />
                </div>
            </div>
        </section>
  
  )
}

export default Drag