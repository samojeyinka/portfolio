import React from 'react';
import { aboutH } from '../assets';


const AboutMe = () => {


  return (
    <div className='w-full bg-white md:py-[150px] py-[50px]' id='about'>
        <div className='w-[70%] grid md:grid-cols-2 gap-5 grid-cols-1 max-w-[1240px] m-auto'>
          <div className='image_side'>

            <img src={aboutH} className='md:w-[400px] md:h-[300px] w-[300px] h-[200px] rounded-3xl'/>
            
            <div className='md:flex gap-2 hidden stack-auto py-8 justify-center'>
              <span className="texta first-texta">I develop for</span>
              <span className="texta sec-texta"> the future.</span>
            </div>

            

          </div>

          

          <div className='text_side max-w-[1020px]'>

            <h2><a href="" className='font-bold text-xl text-[#147efb] ab-m-t'>ABOUT ME</a></h2>
              <h4 className='font-bold text-md text-[#000] text-center items-center'>Samuel Ojeyinka</h4>
            <h2 className='font-bold text-2xl py-4 ab-me'>A dedicated Fullstack Developer 
              based in Nigeria, Osun 📍
              </h2>
              <p className='md:min-w-[500px] text-justify ab-m-p'>
Dynamic full-stack developer with a diverse skill set encompassing Ruby on Rails, Node.js, Express, React, and more. Experienced in developing a wide range of web applications and APIs. Proficient in database management with MySQL, MongoDB, and PostgreSQL. Skilled in front-end development with HTML, CSS, and JavaScript frameworks. Proven ability to deliver high-quality, user-friendly applications while staying up-to-date with the latest technologies and trends. Passionate about creating innovative solutions and collaborating with like-minded professionals to drive business success. Let's connect and discuss how I can contribute to your team!              </p>

          </div>


        </div>
      </div>
  )
}

export default AboutMe
