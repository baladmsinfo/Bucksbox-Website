import Link from 'next/link'
import React from 'react'

type Props = {}

const Feature = (props: Props) => {
  return (
    <>
  {/* Features */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="w-full ">
    <figure className="ms-auto me-20 relative z-[1] w-full h-auto rounded-b-lg ">
              
              <div className=" rounded-b-lg">
                <img
                  className="max-w-full mx-auto h-auto max-sm:h-[250px] rounded-b-lg"
                  src="Ecat.png"
                  alt="Image Description"
                />
              </div>
            </figure>
    </div>
    {/* Grid */}
    <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
      <div className="lg:col-span-1">
        <h2 className="font-bold text-2xl md:text-4xl text-gray-700">
        Effortless Product Categorization
        </h2>
        <p className="mt-2 md:mt-4 text-gray-500">
        Simplify your inventory management by categorizing your products seamlessly. Enhance organization, streamline navigation, and make shopping a breeze for your customers.
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
      {/* End Col */}
      <div className="lg:col-span-2">
        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width={18} height={10} x={3} y={11} rx={2} />
              <circle cx={12} cy={5} r={2} />
              <path d="M12 7v4" />
              <line x1={8} x2={8} y1={16} y2={16} />
              <line x1={16} x2={16} y1={16} y2={16} />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800 ">
                Create Category
              </h3>
              <p className="mt-1 text-gray-600 ">
              Create Categories for Effortless Product Organization. Elevate your customers' shopping experience with a neatly organized and easily navigable product selection.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800">
                Edit Category
              </h3>
              <p className="mt-1 text-gray-600 ">
              Tailor your product organization on the fly with real-time category editing. Effortlessly adapt and refine your storefront for optimal flexibility and user engagement.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800 ">
                Delete Category
              </h3>
              <p className="mt-1 text-gray-600 ">
              Easily remove unwanted categories to keep your product lineup clean and focused. Streamline your offerings with just a click, ensuring a clutter-free and efficient shopping experience.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800 ">
                Nest Category
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
              Nest categories for a structured and organized product hierarchy. Enhance your store's navigation, making it easy for customers to discover and explore your offerings with seamless nesting.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Features */}
</>

  )
}

export default Feature