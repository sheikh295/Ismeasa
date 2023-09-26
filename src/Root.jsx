import './index.css'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import adminImg from 'assets/images/Ellipse 70.png';
import { LuLayoutDashboard } from 'react-icons/lu'
import { MdContentCopy } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { Outlet, useNavigate } from 'react-router-dom';
import {
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";

function Root() {
  
  useEffect(() => {
    initTE({ Dropdown, Ripple });
  }, [])
  
  const [activeTab, setActiveTab] = useState('Dashboard');
  const navigate = useNavigate();
  const currentUrl = window.location.pathname

  const tabStyles = classNames('flex mt-10 w-[150px] m-auto text-white font-[inter] cursor-pointer')
  const activetabStyles = classNames('w-[80%] bg-[#FDDB00] m-auto mt-10 rounded-[8px] justify-center flex px-[13px] py-[13px] font-[inter] font-semibold text-[#222] cursor-pointer')
  const navbarContainerStyles = classNames('w-[80%] absolute right-7 m-auto bg-[#F9F9F9] pb-[26px] px-[10px] gap-[10px] pt-[56px] justify-between flex items-center border-b-2')
  const outletContainer = classNames('w-[83.6%] h-[613px] absolute top-36 right-0 p-3')

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
            <p className='text-center text-[48px] mt-10 text-white font-[quicksans] font-light'>Ismeasa</p>
            <div onClick={() => {setActiveTab('Dashboard'); navigate('/home')}} className={activeTab == 'Dashboard' ? activetabStyles : tabStyles}><LuLayoutDashboard className='mt-1 mr-2' />Dashboard</div>
            <div onClick={() => {setActiveTab('All Tables'); navigate('all-tables')}} className={activeTab == 'All Tables' ? activetabStyles : tabStyles}><MdContentCopy className='mt-1 mr-3' /> All Tables</div>
            <div onClick={() => {setActiveTab('Insights'); navigate('insights')}} className={activeTab == 'Insights' ? activetabStyles : tabStyles}><FiSettings className='mt-1 mr-3' /> Insights</div>
            <div onClick={() => {setActiveTab('Pricing'); navigate('pricing')}} className={activeTab == 'Pricing' ? activetabStyles : tabStyles}><FiSettings className='mt-1 mr-3' /> Pricing</div>
        </div>
        <div className={navbarContainerStyles}>
            <div className='text-[35px] font-[inter] font-medium'>{activeTab}</div>
            <div className='text-[18px] flex'>
              <img src={adminImg} />
              <div class="relative" data-te-dropdown-ref>
                <button
                  class="flex items-center whitespace-nowrap rounded bg-transparent px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out outline-none motion-reduce:transition-none"
                  type="button" id="dropdownMenuButton1" data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init data-te-ripple-color="light">
                  Administrator
                  <span class="ml-2 w-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5">
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
                <ul
                  class="absolute z-[1000] float-right m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-right text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton1"
                  data-te-dropdown-menu-ref>
                  <li>
                    <a
                      onClick={() => {navigate('/'); sessionStorage.removeItem('token')}}
                      class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href=""
                      data-te-dropdown-item-ref>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        <div className={outletContainer}><Outlet /></div>
    </div>
  )
}

export default Root