"use client"

import Link from "next/link"


export default function Navbar() {

  return (
    <>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-purple-500   text-sm py-3 md:py-0 text-white">
        <nav
          className="container w-full mx-auto px-4 md:px-6 lg:px-8 p-2"
          aria-label="Global"
        >
          <div className="relative lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link
                className="flex-none rounded-full bg-purple-200 text-xl font-semibold  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
                aria-label="Brand"
              >
                <img src="final_logo2.png" className="w-[50px]" alt="" />
              </Link>
              <div className="lg:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
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
                    <line x1={3} x2={21} y1={6} y2={6} />
                    <line x1={3} x2={21} y1={12} y2={12} />
                    <line x1={3} x2={21} y1={18} y2={18} />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 lg:flex-row lg:items-center lg:justify-end lg:gap-x-7 lg:mt-0 lg:ps-7 lg:divide-y-0 lg:divide-solid dark:divide-gray-700">
                  <Link
                    className="font-medium text-white py-3 md:py-6 hover:text-gray-200   focus:underline underline-offset-4 decoration-indigo-100"
                    href="/"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link 
                    className="font-medium text-white py-3 md:py-6 hover:text-gray-200  focus:underline underline-offset-4 decoration-indigo-100"
                    href="/payment-gateway"
                    aria-current="page"
                  >
                    Payment Gateway
                  </Link>
                  <Link
                    className="font-medium text-white py-3 md:py-6 hover:text-gray-200  focus:underline underline-offset-4 decoration-indigo-100 "
                    href="/ecommerce"
                  >
                    Digital Commerce
                  </Link>
                  {/* <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                    <button
                      type="button"
                      className="flex items-center w-full text-gray-900 font-medium  dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Resources
                      <svg
                        className="flex-shrink-0 ms-2 w-4 h-4"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full start-0 min-w-[15rem] bg-white md:shadow-2xl rounded-lg py-2 md:p-4   before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex flex-col mx-1 md:mx-0">
                          <a
                            className="group flex gap-x-5  rounded-lg p-4 hover:bg-indigo-600 transition-all ease-out"
                            href="#"
                          >
                            <svg
                              className="flex-shrink-0 w-5 h-5 mt-1 group-hover:text-green-500"
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
                              <p className="font-medium text-gray-800 group-hover:text-white ">
                                Business
                              </p>
                              <p className="text-sm text-gray-500  group-hover:text-white">
                                BucksBox Business Solutions: Elevate your enterprise with tailored solutions.
                              </p>
                            </div>
                          </a>
                          <a
                            className="group flex gap-x-5 hover:bg-indigo-600 rounded-lg p-4   transition-all ease-out"
                            href="#"
                          >
                            <svg
                              className="flex-shrink-0 w-5 h-5 mt-1 group-hover:text-green-500"
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
                              <rect width={7} height={7} x={14} y={3} rx={1} />
                              <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                            </svg>
                            <div className="grow">
                              <p className="font-medium text-gray-800 group-hover:text-white">
                                Integrations
                              </p>
                              <p className="text-sm text-gray-500  group-hover:text-white">
                                Explore BucksBox Payment Integrations: Streamline transactions and enhance your financial workflows with our robust payment integrations
                              </p>
                            </div>
                          </a>
                          <a
                            className="group flex gap-x-5 hover:bg-indigo-600 rounded-lg p-4  transition-all ease-out"
                            href="#"
                          >
                            <svg
                              className="flex-shrink-0 w-5 h-5 mt-1 group-hover:text-green-500"
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
                              <path d="m7 11 2-2-2-2" />
                              <path d="M11 13h4" />
                              <rect
                                width={18}
                                height={18}
                                x={3}
                                y={3}
                                rx={2}
                                ry={2}
                              />
                            </svg>
                            <div className="grow">
                              <p className="font-medium text-gray-800 group-hover:text-white">
                                API Reference
                              </p>
                              <p className="text-sm text-gray-500 group-hover:text-white">
                                BucksBox API Reference: Dive into the technical heart of BucksBox with our API documentation.
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="flex flex-col mx-1 md:mx-0">
                          <a
                            className="group flex gap-x-5 hover:bg-indigo-600 rounded-lg p-4 transition-all ease-out"
                            href="#"
                          >
                            <svg
                              className="flex-shrink-0 w-5 h-5 mt-1 group-hover:text-green-500"
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
                              <circle cx={12} cy={12} r={10} />
                              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                              <path d="M12 17h.01" />
                            </svg>
                            <div className="grow">
                              <p className="font-medium text-gray-800 group-hover:text-white">
                                Help Center
                              </p>
                              <p className="text-sm text-gray-500 group-hover:text-white">
                                Your go-to resource for support and guidance.
                              </p>
                            </div>
                          </a>
                          <a
                            className="group flex gap-x-5 hover:bg-indigo-600 rounded-lg p-4 transition-all ease-out "
                            href="#"
                          >
                            <svg
                              className="flex-shrink-0 w-5 h-5 mt-1 group-hover:text-green-500"
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
                              <circle cx={12} cy={12} r={4} />
                              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                            </svg>
                            <div className="grow">
                              <p className="font-medium text-gray-800 group-hover:text-white">
                                Our Blogs
                              </p>
                              <p className="text-sm text-gray-500 group-hover:text-white">
                                Explore our blogs to get greater insights on how to grow and scale your businesses.
                              </p>
                            </div>
                          </a>
                          <a
                            className="group flex gap-x-5 hover:text-white rounded-lg p-4  hover:bg-indigo-600 group transition-all ease-out"
                            href="#"
                          >
                            <svg
                              className="flex-shrink-0 w-5 h-5 mt-1 group-hover:text-green-5s00"
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
                              <p className="font-medium text-gray-800 group-hover:text-white ">
                                Contact
                              </p>
                              <p className="text-sm text-gray-500  group-hover:text-white">
                                Learn, grow, and connect with Bucksbox.
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                          <span className="text-sm font-semibold uppercase text-gray-800 ">
                            Recent Blog
                          </span>
                         
                          <a
                            className="group mt-2 p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 dark:hover:bg-indigo-500 dark:focus:outline-none hover:text-white text-gray-800"
                            href="#"
                          >
                            <img
                              className="w-32 h-32 rounded-lg"
                              src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                              alt="Image Description"
                            />
                            <div className="grow">
                              <p className="text-sm  ">
                                Discover the strategic advantages, enhanced efficiencies, and newfound opportunities that businesses have unlocked with BucksBox...
                              </p>
                              <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600">
                                Learn more
                                <svg
                                  className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
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
                                  <path d="m9 18 6-6-6-6" />
                                </svg>
                              </p>
                            </div>
                          </a>
                          
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <Link
                    className="font-medium text-white hover:text-gray-200 py-3 md:py-6   focus:underline underline-offset-4 decoration-indigo-100"
                    href="/contact"
                  >
                    Contact us{" "}

                  </Link>
                  <div className="pt-3 md:pt-0">
                    <Link
                      className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-purple-400 text-white hover:bg-purple-800 disabled:opacity-50 disabled:pointer-events-none "
                      href="https://play.google.com/store/apps/details?id=com.bucksboxpay.in" target="blank"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                        <linearGradient id="jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1" x1="1688.489" x2="1685.469" y1="-883.003" y2="-881.443" gradientTransform="matrix(11.64 0 0 22.55 -19615.32 19904.924)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#047ed6"></stop><stop offset="1" stopColor="#50e6ff"></stop></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1)" fillRule="evenodd" d="M7.809,4.608c-0.45,0.483-0.708,1.227-0.708,2.194	v34.384c0,0.967,0.258,1.711,0.725,2.177l0.122,0.103L27.214,24.2v-0.433L7.931,4.505L7.809,4.608z" clipRule="evenodd"></path><linearGradient id="jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2" x1="1645.286" x2="1642.929" y1="-897.055" y2="-897.055" gradientTransform="matrix(9.145 0 0 7.7 -15001.938 6931.316)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffda1c"></stop><stop offset="1" stopColor="#feb705"></stop></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2)" fillRule="evenodd" d="M33.623,30.647l-6.426-6.428v-0.45l6.428-6.428	l0.139,0.086l7.603,4.321c2.177,1.227,2.177,3.249,0,4.493l-7.603,4.321C33.762,30.561,33.623,30.647,33.623,30.647z" clipRule="evenodd"></path><linearGradient id="jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3" x1="1722.978" x2="1720.622" y1="-889.412" y2="-886.355" gradientTransform="matrix(15.02 0 0 11.5775 -25848.943 10324.73)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#d9414f"></stop><stop offset="1" stopColor="#8c193f"></stop></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3)" fillRule="evenodd" d="M33.762,30.561l-6.565-6.567L7.809,43.382	c0.708,0.761,1.9,0.847,3.232,0.103L33.762,30.561" clipRule="evenodd"></path><linearGradient id="jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4" x1="1721.163" x2="1722.215" y1="-891.39" y2="-890.024" gradientTransform="matrix(15.02 0 0 11.5715 -25848.943 10307.886)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#33c481"></stop><stop offset="1" stopColor="#61e3a7"></stop></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4)" fillRule="evenodd" d="M33.762,17.429L11.041,4.522	c-1.33-0.761-2.524-0.658-3.232,0.103l19.386,19.369L33.762,17.429z" clipRule="evenodd"></path>
                      </svg>
                      Download Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}

    </>

  )
}
