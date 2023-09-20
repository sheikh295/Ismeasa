import './index.css'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import adminImg from 'assets/images/Ellipse 70.png';
import { LuLayoutDashboard } from 'react-icons/lu'
import { MdContentCopy } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { Outlet, useNavigate } from 'react-router-dom';


function Root() {
  
  const [activeTab, setActiveTab] = useState('Dashboard');
  const navigate = useNavigate();
  const currentUrl = window.location.pathname

  const tabStyles = classNames('flex mt-10 w-[150px] m-auto text-white font-[inter] cursor-pointer')
  const activetabStyles = classNames('w-[80%] bg-[#FDDB00] m-auto mt-10 rounded-[8px] justify-center flex px-[13px] py-[13px] font-[inter] font-semibold text-[#222] cursor-pointer')
  const navbarContainerStyles = classNames('w-[80%] absolute right-7 m-auto bg-[#F9F9F9] pb-[26px] px-[10px] gap-[10px] pt-[56px] justify-between flex items-center border-b-2')
  const outletContainer = classNames('w-[83.6%] h-[613px] absolute bottom-0 right-0 p-3')

  useEffect(() => {
    if (currentUrl == '/home') {
      setActiveTab('Dashboard')
    }
    else if (currentUrl == '/home/all-tables') {
      setActiveTab('All Tables')
    }
    else if (currentUrl == '/home/insights') {
      setActiveTab('Insights')
    }
    else if (currentUrl == '/home/pricing') {
      setActiveTab('Pricing')
    }
  });

  return (
    <div className='min-h-screen bg-[#F9F9F9]'>
        <div className='h-full fixed w-[16.4%] bg-[#1f1f1f]'>
            <p className='text-center text-[48px] mt-10 text-white font-[quicksans] font-light'>Increasa</p>
            <div onClick={() => {setActiveTab('Dashboard'); navigate('/home')}} className={activeTab == 'Dashboard' ? activetabStyles : tabStyles}><LuLayoutDashboard className='mt-1 mr-2' />Dashboard</div>
            <div onClick={() => {setActiveTab('All Tables'); navigate('all-tables')}} className={activeTab == 'All Tables' ? activetabStyles : tabStyles}><MdContentCopy className='mt-1 mr-3' /> All Tables</div>
            <div onClick={() => {setActiveTab('Insights'); navigate('insights')}} className={activeTab == 'Insights' ? activetabStyles : tabStyles}><FiSettings className='mt-1 mr-3' /> Insights</div>
            <div onClick={() => {setActiveTab('Pricing'); navigate('pricing')}} className={activeTab == 'Pricing' ? activetabStyles : tabStyles}><FiSettings className='mt-1 mr-3' /> Pricing</div>
        </div>
        <div className={navbarContainerStyles}>
            <div className='text-[35px] font-[inter] font-medium'>{activeTab}</div>
            <div className='text-[18px] flex gap-3'><p className='mr-5 mt-2 cursor-pointer text-[14px]' onClick={() => {navigate('/'); sessionStorage.removeItem('token')}}>Logout</p><img src={adminImg} /><p className='mt-2'>Administrator</p> <RiArrowDropDownLine size={28} className='mt-2' /></div>
        </div>
        <div className={outletContainer}><Outlet /></div>
    </div>
  )
}

export default Root
