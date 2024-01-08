import React, {ReactElement} from 'react'
import { CommandLineIcon, DocumentCheckIcon, ComputerDesktopIcon, PlayCircleIcon, CodeBracketIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/20/solid'

type Props = {}


const PGDevelopers = ()=> {

    const features = [
        {
            Icon: <DocumentCheckIcon/>,
            title: "Ready to use documents",
            desc: "Access ready-to-use documents for streamlined processes with our user-friendly documentation."
        },
        {
            Icon:<CommandLineIcon/>,
            title: "API Reference",
            desc: " Explore our concise API Reference for seamless application optimization with Bucksbox - Worldline."
        },
        {
            Icon:<CodeBracketIcon/>,
            title: "Test Environments",
            desc: "Access our test environments for a smooth and effective way to validate and refine your integration with Bucksbox - Worldline."
        },
        {
            Icon:<PlayCircleIcon/>,
            title: "Plug and Play",
            desc: "Seamlessly implement your solution with our plug-and-play feature, ensuring a hassle-free setup for swift deployment."
        },
        {
            Icon:<ComputerDesktopIcon/>,
            title: "Responsive Design",
            desc: "Enjoy optimal functionality on any device with our responsive design."
        },
        {
            Icon:<AdjustmentsHorizontalIcon/>,
            title: "Flexible",
            desc: "Embrace flexibility with our solution, offering customizable features to cater to your unique business needs."
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 ">
                <div className="max-w-5xl mx-auto space-y-3 sm:text-center mb-20">
                    <h3 className="text-purple-600 font-semibold">
                        Developers
                    </h3>
                    <p className="text-gray-800 text-3xl font-extrabold md:text-4xl lg:text-6xl mb-7">
                        Tailored For Developers.
                    {/* Next Gen Payment Gateway Tailored for Developers */}
                    </p>
                    <p>
                    Experience the most robust and user-friendly eCommerce plugins. Seamlessly integrate payments through Bucksbox with straightforward plugins meticulously documented for all major eCommerce platforms.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map(({title, desc, Icon}, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-indigo-50 text-purple-600 rounded-lg flex items-center justify-center">
                                        {Icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {title}
                                        </h4>
                                        <p className="mt-3">
                                            {desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PGDevelopers