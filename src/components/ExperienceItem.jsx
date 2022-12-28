import React from 'react'
import comm from '../images/comm.png';

const ExperienceItem = () => {
  return (
    <div className='bg-[#2C1250] shadow-2xl shadow-[#1A0B2E] flex py-6 px-8 rounded-xl gap-6 border-t-4 border-[#693B93] lg:flex-col'>
        <div className='w-[160px] h-[100px] lg:w-full lg:h-[200px]'>
          <div className='w-full h-full border-4 rounded-xl border-primary'>
            <img src={comm} className='rounded-lg w-full h-full shadow-2xl'/>
          </div>
        </div>
        <div>
            <h4 className='text-lg font-poppins tracking-widest font-semibold'>Communications School</h4>
            <p className='mt-2 mb-4 text-xs font-poppins leading-6'>Take your client onboard seamlessly by our amazingtool of digital onboard process.</p>
            <button className='rounded-xl border border-[#693B93] py-3 px-5 bg-[#2C1250] font-poppins font-medium text-xs tracking-wider transition-all hover:bg-[#693B93]'>LEARN MORE</button>
        </div>
    </div>
  )
}

export default ExperienceItem