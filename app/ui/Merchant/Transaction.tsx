/* This example requires Tailwind CSS v2.0+ */
import { PhoneArrowDownLeftIcon, ChartBarIcon, EyeIcon, ChartPieIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
const supportLinks = [
  {
    name: "Bird's Eye View",
    href: '#',
    description:
      "Enhanced transaction overview provides profound insights, optimizing decision-making with a strategic bird's eye view.",
    icon: EyeIcon,
  },
  {
    name: 'Graphs',
    href: '#',
    description:
      'Transaction graphs illuminate financial flows, offering a visual narrative for comprehensive insights and analysis.',
    icon: ChartBarIcon,
  },
  {
    name: 'Charts',
    href: '#',
    description:
      'Charts visually decipher transaction methods, offering clarity on usage patterns for informed analysis.',
    icon: ChartPieIcon,
  },


]

export default function Transaction() {
  return (
    <div className=" rounded-lg w-full">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800 w-full ">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="absolute inset-0 bg-purple-800 opacity-60 rounded-md" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Unlock Growth with Transaction Analytics</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-50">
          Uncover trends, optimize strategies, and drive success through data-driven insights.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 ">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl my-7">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-green-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 underline decoration-purple-500 underline-offset-4">{link.name}</h3>
                <p className="mt-4 text-base text-gray-700">{link.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <Link href={'/contact'} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
