import React from 'react'
import PaymentCard from './PaymentCard'

type Props = {}

const Payments = (props: Props) => {
  return (

<section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mx-auto mb-12 max-w-[710px] text-center lg:mb-20">
          
          <h2 className="text-gray-800 mb-3 text-3xl leading-[1.2] font-bold lg:text-6xl ">
          Flexible Payment Solutions
          </h2>
          <p className="text-body-color text-base dark:text-dark-6">
          Choose your way to get paid. Dynamic QR, Static QR, SMS pay, or UPI collect—Bucks Box offers versatile payment options to suit your business needs.
          </p>
        </div>
      </div>
    </div>
    
    <div className="-mx-4 flex flex-wrap">
      <PaymentCard title='QR Payments' description='Quick Payments with Bucks Box: Dynamic and Static QRs.' imageUrl='qr.png'/>
      <PaymentCard title='SMS Pay' description='SMS Pay for swift and convenient transactions.' imageUrl='sms.png'/>
      <PaymentCard title='Tap & Pay' description='Tap and Pay for seamless, instant payments.' imageUrl='tap-to-pay.png'/>
      <PaymentCard title='Pay Later' description='Pay Later with BucksBox for a seamless and flexible transaction experience.' imageUrl='pay.png'/>
      <PaymentCard title='UPI Collect' description='Simplify transactions, boost cash flow with UPI Collect' imageUrl='upi50.png'/>
      <PaymentCard title='PG Integration' description='Streamline Transactions with Our Gateway Integration.' imageUrl='pg.png'/>
    </div>
  </div>
</section>

  )
}

export default Payments