"use client"

import React, {useState} from 'react'
import PGIntro from './PGIntro'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Slide from './Slide'

interface ArrowProps {
    left?: boolean;
    onClick: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
    disabled: boolean; 
  }

type Props = {}

const PGSlider = (props: Props) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
      initial: 0,
      loop:true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })  
    // Embrace the new age of contactless payments with Bucksbox - Worldline. 
  return (
    <div>
        <PGIntro title='One Platform Connected To Multiple Payment Gateways.' description='Enjoy a seamless experience with support for hundreds of payment methods, making transactions convenient and secure.'/>
        <div className="navigation-wrapper h-auto  w-auto bg-green-50 mt-20 rounded-xl">
        <div ref={sliderRef} className="keen-slider">
          <Slide title='Bucksbox Payment Gateway - UPI' sub_title='UPI' image='pgUgateway.jpg' description='Revolutionizing Mobile Payments: Bucksbox - Worldline introduces a mobile-first mode for seamless push and pull transfers. Utilize VPA and UPI PIN, with options like UPI Collect, UPI Intent, and UPI QR for versatile transactions.'/>
          <Slide title='Bucksbox Payment Gateway - All major debit and credit cards' sub_title='Credit Card' image='PGCred.jpg' description='Accept payments from all major domestic and
international credit and debit card networks like Visa,
Mastercard, American Express and RuPay'/>
          <Slide title='Bucksbox Payment Gateway - Supports all major wallets'  sub_title='Wallet' image='PGWallet.jpg' description='Enable your customers to pay effortlessly with popular online wallets like PayTM, Amazon Pay, Google Pay, PayZapp, MobiKwik, Phone Pe, and more. Seamless approval using OTP directly on Bucksbox - Worldline checkout.'/>
          <Slide title='Bucksbox Payment Gateway – 50+ Netbanking option' sub_title='Net Banking' image='PGBank.jpg' description='Accept payments through 50+ banks including SBI, ICICI Bank, HDFC Bank, Axis Bank, Kotak Bank and Yes Bank. The bank page opens in a pop-up window so your customers can easily come back to your website, ensuring a great experience'/>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e:React.MouseEvent<SVGElement, MouseEvent> ) =>{
                e.stopPropagation()
                instanceRef.current?.prev()
              }}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e:React.MouseEvent<SVGElement, MouseEvent> ) =>{
                e.stopPropagation()
                instanceRef.current?.next()
              }
                
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      

    </div>
  )
}

function Arrow(props:ArrowProps) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow bg-white p-2 rounded-full ${
          props.left ? "arrow--left" : "arrow--right"
        } `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"

      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }
  

export default PGSlider