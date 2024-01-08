import React from 'react'

type Props = {
    imageUrl: string
    title: string
    description: string
}

const PaymentCard = ({title, description, imageUrl}: Props) => {
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3  ">
            <div className="payment-card mb-9 rounded-[20px] border-2 bg-gradient-to-tr from-white to-indigo-50 border-indigo-600  dark:bg-dark-2 p-10 transition-all ease-in-out md:px-7 xl:px-10 ">
                <div className="bg-purple-200 p-3 mb-8  flex h-[90px] w-[90px] items-center justify-center rounded-md">
                    <img src={imageUrl} alt="" />
                </div>
                <h4 className=" mb-[14px] text-2xl font-semibold">
                    {title}
                </h4>
                <p className="text-body-color dark:text-dark-6">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default PaymentCard