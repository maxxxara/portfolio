import React from 'react'
import heroImg from '../images/hero1.png';
import arrow from '../images/arrow.svg';
const Hero = () => {
  return (
    <div className='container'>
        <div className='mt-14  flex items-center md:flex-col md:items-start'>
            <div className=' relative w-[432px] h-[385px] md:w-full'>
                <p className='hero__name md:relative md:right-0 text-md'>Hello! I Am <span className='text-primary tracking-wider'>Davit Makharashvili</span>
                    <img src={arrow} className='hero__name-icon md:scale-x-[-1] md:ml-0' />
                </p>
                <img src={heroImg} className='w-40 h-56 hero__image md:ml-[-30px]' />
                <div className='hero__image-shadow absolute top-0 left-0 md:hidden'></div>
                <div className='hero__image-shadow2 absolute top-0 left-0 xs:hidden'></div>
            </div>
            <div className='ml-[-120px] md:ml-0'>
                <p className='text-lg'>A Developer who</p>
                <h4 className='mb-2 text-5xl w-[390px] sm:w-full leading-[64px] tracking-wider'>Judges a book by its <span className='text-primary'>cover</span>...</h4>
                <p className='text-sm'>Because if the cover does not impress you what else can?</p>
            </div>
        </div>
    </div>
  )
}

export default Hero