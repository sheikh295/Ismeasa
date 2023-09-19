import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import adminImg from 'assets/images/Ellipse 70.png';
import classNames from 'classnames';

export default function Navbar() {

  const navbarContainerStyles = classNames('w-[90%] m-auto bg-[#F9F9F9] pb-[26px] px-[10px] gap-[10px] pt-[56px] justify-between flex items-center border-b-2')

  return (
    <div>
        <div className={navbarContainerStyles}>
            <div className='text-[35px] font-[inter] font-medium'>Dashboard</div>
            <div className='text-[18px] flex gap-3'><img src={adminImg} /><p className='mt-2'>Administrator</p> <RiArrowDropDownLine size={28} className='mt-2' /></div>
        </div>
    </div>
  )
}
