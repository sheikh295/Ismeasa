import classNames from 'classnames'
import React from 'react'

export default function InputCard() {

  const cardBtn = classNames('w-[100%] bg-[#FDDB00] m-auto mt-6 rounded-[8px] justify-center flex px-[13px] py-[13px] font-[inter] font-semibold text-[#222] cursor-pointer text-[14px]')

  return (
    <div>
        <div className='w-[500px] h-[300px] bg-white rounded-lg shadow-2xl mt-5 ml-40'>
            <div className='w-[90%] m-auto pt-10 font-[inter]'>
                <p className='text-[#1f1f1f] text-[14px] font-semibold mb-5'>Number of tables</p>
                <input type='number' className='w-[100%] gap-2 px-2 py-3 items-center rounded-md border border-[#D2D2D2]' />
                <p className='text-[#101828] text-[16px] font-semibold mt-7'>Total: €5/month</p>
                <button className={cardBtn}>Update</button>
            </div>
        </div>
    </div>
  )
}
