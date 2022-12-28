import React, { useEffect, useState } from 'react'
import { FiFigma, FiGithub, FiLink, FiLink2 } from 'react-icons/fi';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
const Content = ({project}) => {
    const [images, setImages] = [project.images ? project.images : null]
    const [cover, setCover] = useState(0);

  return (
    <>
    <div className={clsx(project.video && 'flex-col space-x-0', 'w-full flex justify-between space-x-20 xl:flex-col xl:space-x-0 xl:space-y-14')}>
        <div className={clsx(project.video ? 'w-full' : 'w-1/2' , 'xl:w-full')}>
            {project.video ? (
                <video className="w-full h-full rounded-xl" autoPlay muted loop>
                    <source src={require(`../../videos/${project.video}`)} className='w-full h-full'/>
                </video>
            ) : (
                <div className='w-full h-full'>
                    <img src={require(`../../p_images/${images[cover]}`)} className='w-full h-80 rounded-lg' />
                    <div className='flex justify-between mt-4'>
                        {project.images.map((image, i) => (
                            <img src={require(`../../p_images/${image}`)} onClick={() => setCover(i)} className='w-24 h-24 sm:w-14 sm:h-14 rounded-xl cursor-pointer'/>
                        ))}
                    </div>
                </div>
            )}
        </div>
        <div className='mt-8 w-1/2 xl:w-full'>
            <p className='text-pLight font-poppins text-xs font-medium'>Latest Project</p>
            <h4 className='text-[#CCD6F6] text-3xl font-poppins font-medium tracking-wider mt-1 mb-6'>{project.title}</h4>
            <p className='text-left font-poppins font-medium text-[12px] project__text-bg px-7 py-5 leading-6'>{project.desc}</p>
            <div className='flex space-x-4 mt-4'>
                <a href={project.demo} target='_blank'>
                    <FiLink className="w-6 h-6 hover:stroke-primary transition-all cursor-pointer"/>
                </a>
                <a href={project.github} target='_blank'>
                    <FiGithub className='w-6 h-6 hover:stroke-primary transition-all cursor-pointer'/>
                </a>
                <a href={project.figma} target='_blank'>
                    <FiFigma className='w-6 h-6 hover:stroke-primary transition-all cursor-pointer'/>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Content