import React from 'react'
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <div className='container pb-40'>
        <h1 className='text-2xl tracking-wider'>Study Experience</h1>
        <div className='grid grid-cols-2 gap-8 mt-10 sm:grid-cols-1'>
            <ExperienceItem />
            <ExperienceItem />
        </div>
    </div>
  )
}

export default Experience