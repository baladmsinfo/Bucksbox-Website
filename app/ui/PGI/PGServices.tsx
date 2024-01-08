import { BanknotesIcon, QueueListIcon,LinkIcon, CurrencyRupeeIcon, CreditCardIcon, ClockIcon, ArrowsPointingInIcon } from "@heroicons/react/20/solid"

const PGServices = ()=> {

    const features = [
        {
            icon: <BanknotesIcon/>,
            title: "Bulk Payouts",
            desc: "Make bulk payments in one-go to your customers."
        },
        {
            icon: <LinkIcon/>,
            title: "Payout Links",
            desc: "Just send a payout link to customers registered number or email address to make payments."
        },
        {
            icon:<QueueListIcon/>,
            title: "Queue",
            desc: "Park payouts above your wallet balance andprocess them when funds are positive."
        },
        {
            icon: <ClockIcon/>,
            title: "Schedule Payouts",
            desc: "Schedule future payouts upto four months in advance."
        },
        {
            icon: <CreditCardIcon/>,
            title: "Bank Account / Card verification",
            desc: "Ensures efficient automated payment processes without any errors or rejections."
        },
        {
            icon: <ArrowsPointingInIcon/>,
            title: "Insta Pay",
            desc: "A single-point connection which helps merchant to accept credit card bill payments seamlessly."
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-extrabold md:text-4xl lg:text-6xl">
                    Enriching Experiences with Value-Added Services
                    </h3>
                    <p className="mt-3">
                   Streamline your transactions for a faster and more efficient financial experience.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PGServices