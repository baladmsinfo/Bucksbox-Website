import React from 'react'

type Props = {
    title: string,
    description: string
}

const PGIntro = ({title, description}: Props) => {
  return (
    <div className='text-center'>
        <h2 className='lg:text-6xl md:text-5xl text-4xl font-extrabold text-gray-800 mb-3'>{title}</h2>
        <p className='max-w-2xl mx-auto text-lg'>{description}</p>
    </div>
  )
}

export default PGIntro