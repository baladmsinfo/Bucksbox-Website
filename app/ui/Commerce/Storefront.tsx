import React from 'react'
import PGIntro from '../PGI/PGIntro'

type Props = {}

const Storefront = (props: Props) => {
  return (
    <>
    <PGIntro title=' Unleash Success with Our Stunning Ecommerce Templates!' description='Transform Your Storefront: Elevate with Predefined Templates for Impactful Online Presence!'/>
    <section className="text-gray-600 body-font flex xl:flex-row flex-col">
        
  <div className=" px-5 py-24 mx-auto flex flex-wrap ">
    <div className="flex xl:flex-row flex-col w-full">
      <div className=" xl:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-xl text-gray-700 mb-1 tracking-wider underline underline-offset-4 decoration-purple-600">
            Stunning Templates
            </h2>
            <p className="leading-relaxed">
            Choose from a variety of professionally designed templates, crafted to enhance the visual appeal of your ecommerce site and make it stand out.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-xl text-gray-700 mb-1 tracking-wider underline underline-offset-4 decoration-purple-600">
            Responsive Design
            </h2>
            <p className="leading-relaxed">
            Ensure a seamless user experience across devices with templates that are optimized for desktops, tablets, and smartphones.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <circle cx={12} cy={5} r={3} />
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-xl text-gray-700 mb-1 tracking-wider underline underline-offset-4 decoration-purple-600">
            Dynamic Product Display
            </h2>
            <p className="leading-relaxed">
            howcase your products dynamically with templates that highlight key features, promotions, and new arrivals.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-xl text-gray-700 mb-1 tracking-wider underline underline-offset-4 decoration-purple-600">
            Quick Deployment
            </h2>
            <p className="leading-relaxed">
            Save time and effort with ready-to-use templates that can be easily deployed, getting your storefront up and running in no time.
            </p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider underline underline-offset-4 decoration-purple-600">
            Scalability
            </h2>
            <p className="leading-relaxed">
            Adapt to the growing needs of your business by choosing templates that are scalable and can accommodate an expanding product catalog and increasing customer base.
            </p>
          </div>
        </div>
      </div>
      <img
        className=" xl:w-1/2 shadow-md object-cover object-center rounded-lg md:mt-0 mt-12"
        src="ecomm.png"
        alt="step"
      />
    </div>
  </div>
</section>
    </>
    

  )
}

export default Storefront