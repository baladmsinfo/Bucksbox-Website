import React, {ComponentProps, ComponentType} from 'react'
import { PhoneArrowUpRightIcon, CheckBadgeIcon, CalculatorIcon, QrCodeIcon, ChatBubbleBottomCenterIcon, BanknotesIcon } from '@heroicons/react/20/solid'
 



type Props = {}



type Grid = {
    title: string
    desc: string
    color: string
    img?:string
    icon?: React.ReactElement

}

type GridProps = {
  data: Grid[]
}

function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ')
  }

const GridList = (props: GridProps) => {
  return (
    <div className='my-10'>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 ">
        {props?.data?.map((project, index) => (
          <li key={project.title} className="col-span-1 flex shadow-sm rounded-md">
            <div
              className={classNames(
                project.color,
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              {project.icon || <img src={project.img} alt="" className='w-6 h-6' />}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a href={''} className="text-gray-900 font-medium hover:text-gray-600">
                  {project.title}
                </a>
                <p className="text-gray-500">{project.desc}</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open options</span>
                  <CheckBadgeIcon className="w-7 h-7 text-green-600" aria-hidden="true" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GridList