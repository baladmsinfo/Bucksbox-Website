import React from 'react'

type Props = {
    title: string,
    description: string,
    bgImg:string
}

const KeenSlider = ({title, description, bgImg}: Props) => {
  return (
    <div className='keen-slider__slide min-h-[500px]    '>
      
                  <blockquote
                    className="flex h-full flex-col justify-around bg-white rounded-lg  "
                  >
                    <img src={bgImg} alt="" className=' xl:max-w-[400px] lg:max-w-[300px] md:max-w-[270px] max-w-[400px]' />
                    <div>   
                      <div className="mt-4  p-5 rounded-md z-0">
                        <p className="text-2xl z-0 font-bold text-purple-700 sm:text-3xl">{title}</p>

                        <p className="mt-4 z-0 leading-relaxed text-purple-500">
                          {description}
                        </p>
                      </div>
                    </div>

                    
                  </blockquote>
                </div>
  )
}

export default KeenSlider