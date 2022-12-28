import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
const Contact = () => {
  return (
    <div className='mt-40 mb-14'>
        <div className='container'>
            <h4 className='text-xl'>Contact</h4>
            <p className='mt-10 w-[600px] md:w-full leading-7 text-xs'>I'm currently looking to join a cross-functional team that values improving people's lives
            through accessible design. or have a project in mind? Let's connect.</p>
            <p className='text-xs mt-4 tracking-wider'>dati.maxarashvili24@gmail.com</p>
            <p className='text-xs mt-4 tracking-wider'>+995 557 35 90 36</p>
            <div className='flex space-x-4 mt-6'>
              <a href='https://www.instagram.com/d_makharashvili/' target='_blank'>
                <FiInstagram className='w-5 h-5 hover:stroke-primary transition-all'/>
              </a>
              <a href='https://www.facebook.com/MaXXXara/' target='_blank'>
                <FiFacebook className='w-5 h-5 hover:stroke-primary transition-all'/>
              </a>
              <a href='https://www.linkedin.com/in/david-makharashvili-a5a054250/' target='_blank'>
                <FiLinkedin className='w-5 h-5 hover:stroke-primary transition-all'/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Contact