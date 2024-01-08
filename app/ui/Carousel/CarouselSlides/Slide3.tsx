import React from 'react'

type Props = {}

const Slide3 = (props: Props) => {
  return (
    <section className="overflow-hidden bg-blue-50 sm:grid sm:grid-cols-2">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl md:text-left text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold text-gray-900 ">
      Revolutionize Your Business with <span className='text-purple-600 '>Bucksbox</span>
      </h2>

      <p className="hidden text-gray-700 md:mt-4 md:block lg:text-xl text-md">
      Join the revolution in payment management. Register as a merchant and elevate your business with Bucks Box's intuitive dashboard.
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>

    <div className='max-h-full bg-purple-700 flex items-center justify-center'>
      <img src="business-2.png" alt="" className='max-w-[500px] '/>
    </div>
  
</section>

  )
}

export default Slide3