import React from 'react'
import { FaFacebook,FaTwitter,FaGithub,FaSlack,FaWhatsapp,FaStackOverflow,FaReddit, FaLinkedin} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='bg-[#2d2e32] p-7 '>
        <div className='footer-flex flex items-center gap-[8%] mx-auto max-w-[1020px] overflow-hidden'>
        <div className=' flex items-center'>
                <ul className='flex ul-foot m-auto font-bold text-[#fff] text-[1rem] overflow-hidden'>
                    <li className='hover:text-[#147efb]'><a href="#">Home</a></li>
                    <li className='hover:text-[#147efb]'><a href="#about">About</a></li>
                    <li className='hover:text-[#147efb]'><a href="#projects">Projects</a></li>
                    <li  className='hover:text-[#147efb]'>   <a href="#contact">Contact </a></li>
                </ul>

        </div>

        <div className='flex  gap-4'>
        <a href="https://github.com/samojeyinka" target='_blank' className='home_social_icon'><FaGithub className='text-white FaFo'/></a>
        <a href="https://linkedin.com/in/ojeyinka-samuel-02406125a" target='_blank' className='home_social_icon'><FaLinkedin className='text-white FaFo'/></a>
        <a href="https://wa.me/2348122624063" target='_blank' className='home_social_icon'><FaWhatsapp className='text-white FaFo'/></a>
        <a href="https://twitter.com/sam_ojeyinka" target='_blank' className='home_social_icon'><FaTwitter className='text-white FaFo'/></a>
        {/* <a href="#" target='_blank' className='home_social_icon'><FaSlack/></a>
        <a href="#" target='_blank' className='home_social_icon'><FaReddit/></a>
        <a href="#" target='_blank' className='home_social_icon'><FaStackOverflow/></a> */}
    </div>

    <p className='footer-c text-white w-[100%] flex justify-center'>© 2024 Sam Ojeyinka. All rights reserved.</p>

        

        </div>


    </div>
  )
}

export default Footer