import React from 'react'
import { CheckBadgeIcon } from '@heroicons/react/20/solid'

type Props = {}

const PGSecurity = (props: Props) => {
    return (

        <>
            {/* Features */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="aspect-w-16 aspect-h-7">
                    <img
                        className="w-full max-h-[500px] object-cover rounded-xl"
                        src="https://img.freepik.com/free-vector/abstract-secure-technology-wallpaper_52683-28465.jpg?w=1380&t=st=1704384233~exp=1704384833~hmac=e476ddb595dea7b6fbea1311b25a181ae75f6de8792028618b0556b165fdeeec"
                        alt="Image Description"
                    />
                </div>
                {/* Grid */}
                <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-1 p-5 ">
                        <h2 className="font-bold text-2xl md:text-3xl text-gray-700 ">
                            Bucksbox Security for Peace of Mind in Transactions
                        </h2>
                        <p className="mt-2 md:mt-4 text-gray-600">
                            We are PCI DSS, ISO compliant organisation with
                            regular third-party audits and dedicated global
                            internal security team always makessure your data
                            is safe with us.
                        </p>
                    </div>
                    {/* End Col */}
                    <div className="lg:col-span-2">
                        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                            {/* Icon Block */}
                            <div className="flex gap-x-5 p-3 bg-white rounded-xl">
                                <CheckBadgeIcon className='text-green-500 h-10 w-10' />
                                <div className="grow">
                                    <h3 className="text-lg font-semibold text-gray-700 ">
                                        PCI DSS and ISO Compliance
                                    </h3>
                                    <p className="mt-1 text-gray-600 ">
                                        Ensuring the Highest Security Standards
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className="flex gap-x-5 p-3 bg-white rounded-xl">
                                <CheckBadgeIcon className='text-green-500 h-10 w-10' />
                                <div className="grow">
                                    <h3 className="text-lg font-semibold text-gray-700 ">
                                        Regular Third-Party Audits
                                    </h3>
                                    <p className="mt-1 text-gray-600 ">
                                        Regular Third-Party Audits
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className="flex gap-x-5 p-3 bg-white rounded-xl">
                                <CheckBadgeIcon className='text-green-500 h-10 w-10' />
                                <div className="grow">
                                    <h3 className="text-lg font-semibold text-gray-700">
                                        Dedicated Global Internal Security Team
                                    </h3>
                                    <p className="mt-1 text-gray-600 ">
                                        Guardians of Your Data Safety
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className="flex gap-x-5 p-3 bg-white rounded-xl">
                                <CheckBadgeIcon className='text-green-500 h-10 w-10' />
                                <div className="grow">
                                    <h3 className="text-lg font-semibold text-gray-700 ">
                                        Data Security Assurance
                                    </h3>
                                    <p className="mt-1 text-gray-600 ">
                                        Your Information is Always Safe with Us
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

export default PGSecurity