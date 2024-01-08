import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const features = [
  {
    name: 'Create/Edit Product',
    description:
      'Add products easily and Streamline your workflow with our user-friendly interface, making market entry smooth and enjoyable..',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Create Product Collection',
    description: 'Curate Collections, Organize Effortlessly: Elevate your product presentation by creating collections and effortlessly organizing your offerings.',
    icon: LockClosedIcon,
  },
  {
    name: 'Products Table',
    description: 'Maximize Insights with Our Product Table: Effortlessly list and sort your products for enhanced visibility and strategic insights.',
    icon: ServerIcon,
  },
]

export default function Products() {
  return (
    <div className="overflow-hidden  py-24 sm:py-32 bg-white p-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-purple-600">Products</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">Showcase, edit, and organize your product listings seamlessly</p>
              
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9 ">
                    <dt className="inline font-semibold text-gray-700 underline decoration-purple-500 underline-offset-4 dec">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-purple-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <Link
                className="mt-20 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                href="/contact">
                Enquiry
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </Link>
            </div>
          </div>
          <img
            src="products.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}

          />
        </div>
      </div>
    </div>
  )
}