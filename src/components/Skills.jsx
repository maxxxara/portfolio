import React from 'react'
import skillImage from '../images/skill.png';
const Skills = () => {
  return (
    <div className='container text-center pb-32'>
        <h4 className='text-2xl tracking-wider'>I'm currently looking to join a <span className='text-primary'>cross-functional</span> team</h4>
        <p className='text-sm tracking-wider mt-2'>that values improving people's lives through accessible design </p>
        <div className='flex gap-3 mt-10 justify-center sm:flex-wrap'>
            <div className='w-12 h-12 p-3 rounded-full flex justify-center items-center bg-[#671FC8]'>
                <img src={require("../images/skills/1.png")} className='w-4 h-5' />
            </div>
            <div className='w-12 h-12 p-3 rounded-full flex justify-center items-center bg-[#671FC8]'>
                <img src={require("../images/skills/2.png")} className='w-6 h-6' />
            </div>
            <div className='w-12 h-12 p-3 rounded-full flex justify-center items-center bg-[#671FC8]'>
                <img src={require("../images/skills/3.png")} className='w-7 h-7' />
            </div>
            <div className='w-12 h-12 p-3 rounded-full flex justify-center items-center bg-[#671FC8]'>
                <img src={require("../images/skills/4.png")} className='w-12 h-8' />
            </div>
            <div className='w-12 h-12 p-3 rounded-full flex justify-center items-center bg-[#671FC8]'>
                <img src={require("../images/skills/5.png")} className='w-8 h-7' />
            </div>
            <div className='w-12 h-12 p-3 rounded-full flex justify-center items-center bg-[#671FC8]'>
                <img src={require("../images/skills/6.png")} className='w-8 h-7' />
            </div>
            <div className='w-12 h-12 p-3 rounded-full flex justify-center items-center bg-[#671FC8]'>
                <img src={require("../images/skills/7.png")} className='w-6 h-9' />
            </div>
        </div>
        <div className='flex gap-3 mt-6 justify-center sm:flex-wrap'>
            <div className='w-12 h-12 p-3 rounded-full flex justify-center items-center bg-[#671FC8]'>
                <img src={require("../images/skills/8.png")} className='w-6 h-6' />
            </div>
            <div className='w-12 h-12 p-3 rounded-full flex justify-center items-center bg-[#671FC8]'>
                <img src={require("../images/skills/9.png")} className='w-6 h-6' />
            </div>
            <div className='w-12 h-12 p-3 rounded-full flex justify-center items-center bg-[#671FC8]'>
                <img src={require("../images/skills/10.png")} className='w-6 h-7' />
            </div>
            <div className='w-12 h-12 p-3 rounded-full flex justify-center items-center bg-[#671FC8]'>
                <img src={require("../images/skills/11.png")} className='w-6 h-6' />
            </div>
            <div className='w-12 h-12 p-3 rounded-full flex justify-center items-center bg-[#671FC8]'>
                <img src={require("../images/skills/12.png")} className='w-6 h-8' />
            </div>
            <div className='w-12 h-12 p-3 rounded-full flex justify-center items-center bg-[#671FC8]'>
                <img src={require("../images/skills/13.png")} className='w-6 h-7' />
            </div>
        </div>
        <div className='w-full flex justify-center mt-12'>
            <img src={skillImage} />
        </div>
    </div>
  )
}

export default Skills