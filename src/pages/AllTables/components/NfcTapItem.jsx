import classNames from 'classnames'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NfcTapItem(props) {

  const navigate = useNavigate();
  const detailBtn = classNames('px-[13px] py-[8px] gap-[10px] items-center justify-center rounded-[8px] bg-[#FDDB00] absolute bottom-3 right-3 font-[inter] font-medium text-[14px]')

  return (
    <div>
        <div className='w-[100%] h-[156px] rounded-[8px] bg-white shadow-xl relative'>
            <div className='font-[inter] ml-5 pt-3'>
                <p className='text-[20px]'>Table 1</p>
                <p className='font-medium text-[36px] flex'>{props.taps}<p className='text-[#828282] text-[12px] font-medium mt-6 ml-1'>Taps</p></p>
            </div>
            <button className={detailBtn} onClick={() => {navigate('/home/insights')}}>View Details</button>
        </div>
    </div>
  )
}
