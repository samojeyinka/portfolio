import React, { useState } from 'react';
import {FaFacebook,FaBars} from 'react-icons/fa'
import {menu,close, menuIcon} from '../assets'

const Navbar = () => {
    const [toggle,setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

    const openNav = () => {
        setToggle(!toggle);
      };
    
  return (
    <div className='w-full h-[70px] bg-white drop-shadow fixed  z-10'>
        <div className='w-full h-full flex justify-between items-center m-auto max-w-[1240px]'>
            <div className='flex item-center'>
                <h3 className='font-bold md:text-[1.3rem]  text-[1.1rem] cursor-pointer ml-5'>Sam.dev👨‍💻</h3>
            </div>

            <div className=' flex items-center'>
                <ul className='hidden md:flex font-bold text-[#3a3b3e] text-[1rem]'>
                    <li className='hover:text-[#147efb]'> <a href="#">Home</a></li>
                    <li className='hover:text-[#147efb]'> <a href="#about">About</a></li>
                    <li className='hover:text-[#147efb]'>  <a href="#projects">Projects</a></li>
                    <li  className='hover:text-[#147efb]'>   <a href="#contact">Contact </a></li>
                </ul>

            </div>

            <div className='md:hidden'>
               <img src={!toggle? menu :close} onClick={handleClick} className='w-[30px] h-[35px] cursor-pointer mr-8'/>
            </div>

            
        </div>

        <ul className={toggle?'togga md:hidden flex-cols  font-semibold text-[#3a3b3e] text-[1.2rem] py-5 px-5 bg-white fixed ':'hidden'}>
                    <li><a href="#" className='hover:text-[#147efb]' onClick={openNav}>Home</a></li>
                    <li><a href="#about" className='hover:text-[#147efb]' onClick={openNav}>About</a></li>
                    <li><a href="#projects" className='hover:text-[#147efb]' onClick={openNav}>Projects</a></li>
                    <li><a href="#contact" className='hover:text-[#147efb]' onClick={openNav}>Contact</a></li>
                </ul>

    </div>
  )
}

export default Navbar
