
import { PhoneArrowDownLeftIcon, BanknotesIcon, CurrencyRupeeIcon, CommandLineIcon, BoltIcon, EyeSlashIcon  } from "@heroicons/react/24/solid"

  
  const features = [
    {
      name: 'Low Transaction Charges',
      description: ' Benefit from Low Transaction Charges for Cost-Effective Financial Operations.',
      icon: BanknotesIcon,
    },
    {
      name: 'Customize Prizing',
      description: 'Unlock Flexibility with Customized Plans for Your Unique Business Requirements.',
      icon: CurrencyRupeeIcon,
    },
    {
      name: 'Api Integration',
      description: 'Seamless API Integration: Elevate Your System Connectivity for Streamlined Performance.',
      icon: CommandLineIcon,
    },
    {
      name: 'Fast Settlement',
      description: 'Accelerate Your Financial Transactions for Rapid and Efficient Processing.',
      icon: BoltIcon,
    },
    {
      name: 'No Hidden Charges',
      description: 'Experience Clarity with No Hidden Charges for Financial Confidence.',
      icon: EyeSlashIcon,
    },
    {
      name: '24x7 Support',
      description: '24/7 Support for Uninterrupted Assistance and Seamless Problem Resolution.',
      icon: PhoneArrowDownLeftIcon,
    },
  ]
  
  export default function Example() {
    return (
      <div className="relative  py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-full lg:px-8">
          <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600">Register Now</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-5xl md:text-4xl">
            <span className="text-green-500">Are you looking for</span> <span className="text-purple-500">Payment Gateway Integration</span> ?
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-700">
            We are TSP,  We hemp business to access payment seamlessly
          </p>
          <p className="text-4xl font-bold text-gray-700 mt-10">Our Benefits</p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-purple-500 p-3 shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-700">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  