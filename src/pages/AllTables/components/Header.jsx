import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

export default function AllTablesHeader() {
  return (
    <div>
        <div className='w-[100%] m-auto mt-5 mb-5 flex justify-between'>
            <p className='font-[inter] text-2xl font-medium'>Total NFC Taps This Week</p>
            <p className='font-[inter] text-xl font-medium text-[#9B9B9B] flex'>This week <RiArrowDropDownLine size={30} className='cursor-pointer' /></p>
        </div>
    </div>
  )
}
