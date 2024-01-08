import React from 'react'
import PGIntro from './PGIntro'

type Props = {}

const PGFeatures = (props: Props) => {
  return (
    <>
    <PGIntro title='Why Choose BucksBox Omnichanel Payment System?' description='Accept payments, send payouts, and manage your online operations effortlessly with our fully integrated suite for a modernized payment experience.'/>
    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 p-5">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 z-0 w-full h-full bg-white lg:w-3/4" />
      </div>
      <div className="relative">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="grid gap-12 row-gap-5 md:grid-cols-2">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 w-32 -mt-8 -ml-16 text-blue-gray-100 lg:w-32 lg:-mt-12"
              >
                <defs>
                  <pattern
                    id="d06ca312-d4ed-465f-ad18-fb0c0f92b6f1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d06ca312-d4ed-465f-ad18-fb0c0f92b6f1)"
                  width="52"
                  height="24"
                />
              </svg>
              <div className="relative bg-green-50 p-3 rounded-md">
                <div className="flex  items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                  <svg
                    className="w-8 h-8 text-purple-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                Easy Integration
                </h6>
                <p className="text-sm text-gray-900">
                Just a few lines of code, supported by clear documentation and code samples at every step.
                </p>
              </div>
            </div>
            <div className='bg-green-50 p-3 rounded-md'>
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                <svg
                  className="w-8 h-8 text-purple-500"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
              Accept All Payment Modes
              </h6>
              <p className="text-sm text-gray-900">
              Credit cards, debit cards, UPI, net banking, EMI, wallets, and PayLater—supported by default.
              </p>
            </div>
            <div className='bg-green-50 p-3 rounded-md'>
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                <svg
                  className="w-8 h-8 text-purple-500"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
              Seamless Checkout
              </h6>
              <p className="text-sm text-gray-900">
              Deliver a seamless checkout experience with Bucksbox - Worldline.
              </p>
            </div>
            <div className='bg-green-50 p-3 rounded-md'>
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                <svg
                  className="w-8 h-8 text-purple-500"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
              Powerful Dashboard 
              </h6>
              <p className="text-sm text-gray-900">
              Manage payments, refunds, transfers, subscriptions, invoices, virtual accounts, API keys, and more with ease.
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="pg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PGFeatures