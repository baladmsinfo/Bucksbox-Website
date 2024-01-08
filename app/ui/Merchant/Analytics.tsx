import GridList from '@/app/components/GridList'
import React from 'react'
import { ClockIcon, ChartBarIcon, ChartPieIcon, AdjustmentsVerticalIcon, TableCellsIcon } from '@heroicons/react/20/solid'
import ButtonGroup from '@/app/components/ButtonGroup'

type Props = {}


const data = [
    {
      desc: 'Efficient Data Display',
      title: 'Transaction Table',
      color: 'bg-purple-300',
      icon: <TableCellsIcon className='text-black w-5 h-5'/>
    },
    {
      desc: 'In-depth Analysis',
      title: 'Great Insights',
      color: 'bg-green-300',
      icon: <ChartPieIcon className='text-black w-5 h-5'/>
    },
    {
      desc: 'Historical Exploration',
      title: 'Time Travel ',
      color: 'bg-yellow-300',
      icon: <ClockIcon className='text-black w-5 h-5'/>
    },
    {
      desc: 'Precision Sorting',
      title: 'Transaction Filters',
      color: 'bg-red-300',
      icon: <AdjustmentsVerticalIcon className='text-black w-5 h-5'/>
    },
  
  ]

const Analytics = (props: Props) => {
  return (
    <section className="relative overflow-hidden  w-full bg-purple-50">
        <div className=" px-4 mx-auto mt-12">
            <div className="flex max-md:flex-wrap justify-around  items-center -mx-4 ">
                
                <div className="lg:w-1/2 w-full px-4 ">
                    <div className=" ">
                        <h1 className="mb-6 text-4xl font-bold  lg:text-6xl">
                            <span>Total <span className='text-purple-600'>Transaction Insight</span>: Effortless Tracking</span>
                            
                        </h1>
                        
                        <p className="mb-6 leading-8 text-gray-900 ">
                        Track transactions easily with dynamic visualizations. Our platform enables clear financial insights for informed decisions.
                        </p>
                        <GridList data={data}/>
                        <ButtonGroup/>
                    </div>
                </div>
                <div className="w-full px-4 mt-20 lg:w-2/5 lg:mt-0">
                    <div className="flex justify-center lg:justify-end">
                        <div className="mr-4 lg:mr-8">
                            <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                            <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                src="https://images.pexels.com/photos/9099822/pexels-photo-9099822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        </div>
                        <div>
                            <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                src="https://i.postimg.cc/qM9PNCqj/pexels-vlada-karpovich-4050291.jpg" alt=""/>
                            <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                src="transaction2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </section>
  )
}

export default Analytics