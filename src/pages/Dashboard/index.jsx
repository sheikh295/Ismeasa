import React from 'react'
import DashboardHeader from './components/Header'
import DashboardChart from './components/Chart'


export default function Dashboard() {
  return (
    <div className='w-[97%] m-auto mt-5'>
        <DashboardHeader />
        <DashboardChart />
    </div>
  )
}
