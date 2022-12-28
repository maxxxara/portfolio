import clsx from 'clsx'
import React, { useEffect } from 'react'
import project from '../images/project.png'
import { Link } from 'react-router-dom';

const Project = ({imgLeft, project}) => {
  useEffect(() => {
    console.log(project)
  }, [project])
  return (
    <Link to={"/project/" + project.id}>
      <div className={clsx(imgLeft && 'flex-row-reverse', 'flex justify-between md:flex-col-reverse')}>
          <div className={clsx(imgLeft && 'text-right', 'w-1/2 md:w-full md:mt-8 space-x-reverse')}>
              <p className='text-pLight font-poppins text-xs font-medium'>Latest Project</p>
              <h4 className='text-[#CCD6F6] text-3xl font-poppins font-semibold tracking-wider mt-2 mb-6'>{project.title}</h4>
              <p className={clsx(imgLeft && 'ml-[-10%] md:ml-0', 'text-left font-poppins font-medium text-xs project__text-bg px-7 py-5 leading-6 w-[110%] lg:w-[120%] relative z-10')}>{project.desc}</p>
          </div>
          <div className='w-1/2 h-72 md:w-full md:h-80 project__image rounded-xl relative'>
              <div className='project__image-bg'></div>
              <img src={require(`../p_images/${project.cover}`)} className='w-full h-full rounded-xl' />
          </div>
      </div>
    </Link>
  )
}

export default Project