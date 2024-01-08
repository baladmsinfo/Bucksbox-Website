import React from 'react'
import { CheckBadgeIcon } from '@heroicons/react/20/solid' 

type Props = {}

const PGEmi = (props: Props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-3xl mb-10 md:mx-auto sm:text-center lg:w-full md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            EMI Plans
          </p>
        </div>
        <h2 className="max-w-full mb-6 font-sans text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-6xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
          
          </span>
     EMI Solutions with BucksBox
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Slash upfront costs to make your products more affordable. Empower customers with budget-friendly options for an enriched shopping experience.
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <CheckBadgeIcon className='text-green-400'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Credit Card EM</h6>
            <p className="mb-3 text-sm text-gray-900">
            Reduce upfront payments for your products, accessible across 12+ banks.
            </p>
          </div>
          {/* <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a> */}
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <CheckBadgeIcon className='text-green-400'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Cardless EMI</h6>
            <p className="mb-3 text-sm text-gray-900">
            No credit or debit cards needed. Expand EMI access with FlexiPay, InstaCard, and PayLater options.
            </p>
          </div>
          {/* <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a> */}
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <CheckBadgeIcon className='text-green-400'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Debit Card EMI</h6>
            <p className="mb-3 text-sm text-gray-900">
            Boost affordability in India, extending EMI access to debit card users and reaching Tier 2 and Tier 3 towns.
            </p>
          </div>
          {/* <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a> */}
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <CheckBadgeIcon className='text-green-400'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">No Cost EMI</h6>
            <p className="mb-3 text-sm text-gray-900">
            Get ‘No Cost EMI’ schemes from Bajaj Finserv and all
other major banks
            </p>
          </div>
          {/* <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default PGEmi