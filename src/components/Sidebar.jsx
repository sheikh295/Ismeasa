import React from 'react'
import { LuLayoutDashboard } from 'react-icons/lu'
import { MdContentCopy } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import classNames from 'classnames'

export default function Sidebar() {

  const tabStyles = classNames('flex mt-10 w-[150px] m-auto text-white font-[inter] cursor-pointer')
  const activetabStyles = classNames('w-[222px] bg-[#FDDB00] m-auto mt-10 rounded-[8px] justify-center flex px-[13px] py-[13px] font-[inter] font-semibold text-[#222] cursor-pointer')

  return (
    <div>
        <div className='h-full fixed w-[266px] bg-[#1f1f1f]'>
            <p className='text-center text-[48px] mt-10 text-white font-[quicksans] font-light'>Increasa</p>
            <div className={activetabStyles}><LuLayoutDashboard className='mt-1 mr-2' />Dashboard</div>
            <div className={tabStyles}><MdContentCopy className='mt-1 mr-3' /> All Tables</div>
            <div className={tabStyles}><FiSettings className='mt-1 mr-3' /> Insights</div>
            <div className={tabStyles}><FiSettings className='mt-1 mr-3' /> Pricing</div>
        </div>
    </div>
  )
}
