/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { PhoneArrowDownLeftIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Dashboard() {
  return (
    <div className="">
      <div className="relative overflow-hidden">


        <div className="relative pt-6 pb-16 sm:pb-24">


          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-700 sm:text-5xl md:text-6xl">
                <span className="block max-w-full">Ready to amplify your business through Bucksbox Commerce?</span>
                <span className="block text-purple-600 ">Elevate your brand to new heights!</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Discover the unparalleled power of BucksCommerce platform and elevate your brand to new heights!"
              </p>
            </div>
          </div>
        </div>

        <div className="relative">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
            {/* <img
              className="relative rounded-lg shadow-lg"
              src="dashboards.png"
              alt="App screenshot"
            /> */}
            <figure className="mx-auto me-20 relative z-[1] w-full h-auto rounded-b-lg ">
              
              <div className=" rounded-b-lg">
                <img
                  className="max-w-full mx-auto h-auto max-sm:h-[250px] rounded-b-lg"
                  src="mainDash.png"
                  alt="Image Description"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>

    </div>
  )
}
