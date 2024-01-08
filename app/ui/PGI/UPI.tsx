import React from 'react'

type Props = {}

const UPI = (props: Props) => {
  return (
    <div className="flex flex-col justify-between w-full px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-full rounded-lg bg-white">
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-2xl lg:pr-5">
        <div className=" mb-6">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className=" mb-6 font-sans text-3xl  tracking-tight text-gray-900 md:text-4xl lg:text-6xl font-extrabold sm:leading-none">
          BucksBox Next Gen UPI Gateway
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          BucksBox - Worldline introduces a new payment mode, supporting both push and pull transfers. Utilize Virtual Payment Address (VPA) and UPI PIN for seamless transactions, including options like UPI Collect, UPI Intent, and UPI QR.
          </p>
        </div>
        <div className="flex items-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </a>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
      <div>
        <img
          src="u.png"
          className="object-cover object-top lg:w-full max-w-7xl h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
          alt=""
        />
      </div>
    </div>
  )
}

export default UPI