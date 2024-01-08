import React from 'react'
import Dashboard from '../ui/Commerce/Dashboard'
import Products from '../ui/Commerce/Products'
import Feature from '../ui/Commerce/Feature'
import Discount from '../ui/Commerce/Discount'
import Pricing from '../ui/Commerce/Pricing'
import Settings from '../ui/Commerce/Settings'
import Orders from '../ui/Commerce/Orders'
import Drag from '../ui/Commerce/Drag'
import API from '../ui/Commerce/API'
import Storefront from '../ui/Commerce/Storefront'
import PGCharges from '../ui/PGI/PGCharges'
import NotificationBanner from '../components/NotificationBanner'

type Props = {}

const plans = [
  {
      name: "Enterprise",
      desc: "Advanced Features",
      price: "Contact Us",
      isMostPop: true,
      features: [
        "Unlimited Products",
        "Unlimited Categories",
        "Unlimited Return Orders",
        "Advanced Ecommerce Templates",
        "API Integration",
        "Payment Gateway Integration",
        "Unimited Whatsapp Notifications",
        "Unimited Email Notifications",
        "Unimited SMS Notifications",
        "Multicurrency Support",
        "Gift Cards"
      ],
  },
  {
      name: "Startup",
      desc: "Basic Features",
      price: 6999,
      isMostPop: false,
      features: [
          "Unlimited Products",
          "Unlimited Categories",
          "Unlimited Return Orders",
          "Basic Ecommerce Templates",
          "API Integration",
          "Payment Gateway Integration",
          "Limited Whatsapp Notifications",
          "Limited Email Notifications",
          "Limited SMS Notifications",
      ],
  },
];

const page = (props: Props) => {
  return (
    <>
    <NotificationBanner notification='🎉 Coming Soon: Unlock Your Creative Potential with Bucksbox Studio, a Feature-Rich Website Builder! 🎨✨' learnMore='https://www.google.com'/>
    <section className='xl:w-[70%]  md:w-[95%] w-[97%] mx-auto flex flex-col gap-32'>
        <Dashboard/>
        <Orders/>
        <Products/>
        <Feature/>
        <Discount/>
        <Pricing/>
        <Drag/>
        <API/>
        <Storefront/>
        <PGCharges pricingTitle='Buckxbox Ecommerce Platform Pricing' pricingDescription='Choose simple and transparent pricing that suits your business.' plans={plans} isPercent={false} per={'Year'}/>
    </section>
    <Settings/>
    </>
    
  )
}

export default page