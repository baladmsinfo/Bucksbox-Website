"use client"
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import KeenSlider from './KeenSlider'

type Props = {}

const Loans = (props: Props) => {

  function handlePrev(){
    
    
    instanceRef.current?.prev()
  }

  function handleNext(){
    
    
    instanceRef.current?.next()
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged() {
      
    },
    loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
  },
    [
      // add plugins here
    ])


  return (
    <>
      <section className=" bg-purple-700 rounded-lg overflow-hidden">
        <div className="mx-auto  px-4 py-12  lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8  lg:grid-cols-3  lg:gap-16">
            <div className=" text-left ltr:sm:text-left rtl:sm:text-right max-sm:text-center ">
              <h2 className="text-3xl font-bold  tracking-tight text-white xl:text-5xl lg:text-4xl">
              Empower with Loans, Pay-Later, Insurance
              </h2>

              <p className="mt-4 text-gray-200 max-lg:text-md">
              Unlock Financial Freedom: Bucks Box offers loans, pay-later, and insurance for a seamless and secure financial experience . Your journey to financial well-being starts here!
              </p>

              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous-desktop"
                  className="rounded-full border border-white p-3 text-white transition hover:bg-green-600 hover:text-white"
                  onClick={handlePrev}
                >
                 <svg
                className="h-5 w-5 -rotate-180 transform"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
                </button>

                <button
                  aria-label="Next slide"
                  id="keen-slider-next-desktop"
                  className="rounded-full border border-white p-3 text-white transition hover:bg-green-600 hover:text-white"
                  onClick={handleNext}
                >
                 <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
                </button>
              </div>
            </div>
            
            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              
              <div id="keen-slider" ref={sliderRef} className="keen-slider">
                <KeenSlider title='QuickBoost Loans for Growth' description='Fuel your ambitions with Bucks Box loans – speedy approvals, flexible terms, and tailored solutions for your business expansion' bgImg={'loan.png'}/>
                <KeenSlider title='Flexible Pay Later Options' description='Take control of your expenses with Bucks Box. Choose pay-later options that suit your needs, ensuring financial flexibility and convenience.' bgImg='./paylater.png'/>
                <KeenSlider title='Comprehensive Protection Plans' description='Safeguard your future with Bucks Box insurance. Explore comprehensive protection plans designed to cover your assets and secure your peace of mind.' bgImg='./insuarance.png'/>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-white p-3 text-white transition hover:bg-indigo-600 hover:text-white"
              
            >
              <svg
                className="h-5 w-5 -rotate-180 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-white p-3 text-white transition hover:bg-indigo-600 hover:text-white"
             
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Loans