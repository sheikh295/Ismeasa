import classNames from 'classnames'
import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export default function PricingPlan() {

  const bulletPoints = (num) => classNames('text-[#667085] text-[14px] flex items-center gap-3', {
    'mt-8' : num == '1',
    'mt-3' : num == '2',
  });

  return (
    <div>
        <div className='w-[400px] h-[420px] bg-white rounded-lg shadow-2xl'>
            <div className='w-[80%] m-auto mt-5 pt-5 font-[inter]'>
                <p className='text-[#101828] text-[40px] font-semibold'>€1/per chip</p>
                <p className='text-[#101828] text-[16px] font-semibold mt-5'>Basic Plan</p>
                <p className='text-[#667085] text-[14px] mt-2'>As you add more tables you will be charged €1 per month per table</p>
                <p className={bulletPoints('1')}><BsFillCheckCircleFill color='#ecd96c' />Integrated Mobile app to manage NFC chips</p>
                <p className={bulletPoints('2')}><BsFillCheckCircleFill color='#ecd96c' />Admin Dashboard Access</p>
                <p className={bulletPoints('2')}><BsFillCheckCircleFill color='#ecd96c' />Detailed Insights about usage per table</p>
            </div>
        </div>
    </div>
  )
}
