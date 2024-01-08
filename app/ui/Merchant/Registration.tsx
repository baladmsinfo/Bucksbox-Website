import React from 'react'
import { CheckBadgeIcon, LockClosedIcon, ServerIcon, UserCircleIcon, BoltIcon, BanknotesIcon, DocumentCheckIcon } from '@heroicons/react/20/solid'
import GridList from '@/app/components/GridList'
import ButtonGroup from '@/app/components/ButtonGroup'

type Props = {}


const data = [
  {
    desc: 'Real Time PAN Verification',
    title: 'PAN',
    color: 'bg-purple-300',
    icon: <DocumentCheckIcon className='text-black w-5 h-5'/>
  },
  {
    desc: 'Real Time Aadhar Verification',
    title: 'Aadhar',
    color: 'bg-green-300',
    icon: <DocumentCheckIcon className='text-black w-5 h-5'/>
  },
  {
    title: 'Bank Verification',
    desc: 'Realtime Bank Verification ',
    color: 'bg-yellow-300',
    icon: <BanknotesIcon className='text-black w-5 h-5'/>
  },
  {
    desc: 'Easy Registration',
    title: 'Swift-Signup',
    color: 'bg-red-300',
    icon: <BoltIcon className='text-black w-5 h-5'/>
  },

]


const Registration = (props: Props) => {
  return (
    <div className="overflow-hidden bg-purple-50  py-10 ">
      <div className="mx-auto  lg:px-8">
        <div className="mx-auto grid  grid-cols-1 place-items-center  gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0  lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 ">
            <div className="w-full ">
              <h2 className="text-base font-semibold leading-7 text-green-600 ">Merchant onboarding</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 xl:text-6xl lg:text-4xl ">Registration Redefined: <span className='text-purple-600'>Easy, Quick</span>, and User-Centric</p>
             <GridList data={data}/>
             
              
            </div>
            <ButtonGroup/>
          </div>
          <img
            src="reg.png"
            alt="Product screenshot"
            className="xl:max-w-[500px] lg:max-w-[400px]  rounded-xl  md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default Registration