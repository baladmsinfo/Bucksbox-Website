import React from 'react'
import PGHero from '../ui/PGI/PGHero'
import PGFeatures from '../ui/PGI/PGFeatures'
import UPI from '../ui/PGI/UPI'
import CreditCard from '../ui/PGI/CreditCard'
import PGEmi from '../ui/PGI/PGEmi'
import PGDevelopers from '../ui/PGI/PGDevelopers'
import PGSecurity from '../ui/PGI/PGSecurity'
import PGServices from '../ui/PGI/PGServices'
import PGCharges from '../ui/PGI/PGCharges'
import PGSlider from '../ui/PGI/PGSlider'

type Props = {}

const plans = [
  {
      name: "Enterprise",
      desc: "Diverse payment options at your fingertips",
      price: "Contact Us",
      isMostPop: true,
      features: [
          "Amex (American Express)",
          "Diners Club",
          "Wallets",
          "Cash Cards",
          "EMI on Cards: 12+ Leading Banks",
          "Flexmoney",
          "Cardless EMI",
          "No Cost EMI",
          "HDFC Paylater"
      ],
  },
  {
      name: "Startup",
      desc: "Comprehensive Payment Solutions",
      price: 1.90,
      isMostPop: false,
      features: [
          "Domestic Credit Cards: Visa, MasterCard",
          "Domestic Debit Cards: Visa, MasterCard, RuPay, Maestro",
          "Net Banking: 50+ Banks Supported",
          "UPI: 100+ Banks Supported",
          "UPI QR/Bharat QR Code: Convenient and Secure Options",
      ],
  },
];

const page = (props: Props) => {
  return (
    <section className='xl:w-[70%]  md:w-[95%] w-[97%] mt-10 mx-auto flex flex-col gap-32'>
      <PGHero/>
      <PGFeatures/>
      <PGSlider/>     
      <PGEmi/>
      <PGSecurity/>
      <PGDevelopers/>
      <PGServices/>
      <PGCharges plans={plans} isPercent={true} per={'Transaction'} pricingDescription=' Choose simple and transparent pricing that suits your business.' pricingTitle='Bucksbox Payment Gateway - Pricing'/>
    </section>
  )
}

export default page