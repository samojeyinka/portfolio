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
              <h1 className='font-bold text-xl text-[#000]'>Samuel Ojeyinka</h1>
            <h2 className='font-bold text-2xl py-4 ab-me'>A dedicated Front-end Developer
              based in Nigeria, Osun 📍
              </h2>
              <p className='md:min-w-[500px] text-justify ab-m-p'>
              As a Front-End Developer, I possess an impressive 
              arsenal of skills in HTML, CSS, JavaScript, React JS, Tailwind,Bootstrap
               and I also create full stack web applications using CMS like Strapi and GraphCMS. I excel in designing and maintaining responsive
                websites that offer a smooth user experience. My expertise 
                lies in crafting dynamic, engaging interfaces through writing 
                clean and optimized code and utilizing cutting-edge development
                 tools and techniques. I am also a team player who thrives in
                  collaborating with cross-functional teams to produce 
                  outstanding web applications.
              </p>

          </div>


        </div>
      </div>
  )
}

export default AboutMe
