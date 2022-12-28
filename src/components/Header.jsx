import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
const Header = () => {
  return (
    <div className='bg-[#1A0B2E] shadow-lg'>
        <div className='container flex justify-between items-center py-6'>
            <div>
                <Link to={"/"}>
                    <img src={logo} className='w-8 h-8'/>
                </Link>
            </div>
            <ul className='flex gap-x-24 sm:gap-x-8'>
                <li>
                    <Link className='font-plus text-sm transition-all hover:text-pLight'>Home</Link>
                </li>
                <li>
                    <a href='#about' className='font-plus text-sm transition-all hover:text-pLight'>About</a>
                </li>
                <li>
                    <a href='#projects' className='font-plus text-sm transition-all hover:text-pLight'>Projects</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header