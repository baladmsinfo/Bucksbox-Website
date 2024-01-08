"use client"

import React from 'react'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide1 from './CarouselSlides/Slide1';
import Slide2 from './CarouselSlides/Slide2';
import Slide3 from './CarouselSlides/Slide3';


type Props = {}

const Carousel = (props: Props) => {
  return (
    <section className='carousel '>
            <ReactCarousel showThumbs={false} infiniteLoop className='h-full'>
                    <Slide1/>
                    {/* <Slide2/> */}
                    <Slide3/>
            </ReactCarousel>
    </section>
  )
}

export default Carousel