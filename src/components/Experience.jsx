import React from 'react'
import { ect, styleit } from '../assets'
import {FaGithub,FaFacebook,FaRegCaretSquareRight} from 'react-icons/fa'


const Experience = () => {


    // =======================Local API=======================


    const ProjE = [

        {
            "id":1,
            'coverImg':styleit,
            'proTitle':'Full Stack Developer',
            'proDes':'StyleIT · Fulltime - game-changing UI library that streamlines web development, allowing users to effortlessly edit designs and generate code with a single click. Similar to Figma',
            'langused1':'Node.JS',
            'langused2':'Express.js',
            'langused3':'React',
            'langused4':'Problem solving',
            'langused5':'',
            'demoLink':'',

        },

        {
            "id":2,
            'coverImg':ect,
            'proTitle':'Full Stack Developer',
            'proDes':'Expansion Cyber Technologies · Remote • Developed a website for Expansion Cyber Technologies in Osogbo, offering onsite tech skills courses. • Designed an easy registration process for candidates interested in specific courses.',
            'langused1':'PHP',
            'langused2':'MySQL',
            'langused3':'CSS',
            'langused4':'Problem solving',
            'langused5':'',
            'demoLink':'https://expansioncybertechnologies.gr-site.com/',

        }
           
    ]





  return (
    <div className='bg-[#f9f9f9] w-full m-auto flex items-center justify-center overflow-hidden' id='experience'>
    
        <div className='w-[80%] max-w-[1020px] py-[9rem]'>
            <h3 className='text-[1.25rem] uppercase text-[#147efb]'>Experience</h3>
            <h3 className='text-[1.5rem] font-bold py-2 mb-[4rem]'>Employment Experience♟️</h3>


                  {/* ==========inputing the array======== */}


               {ProjE.map((prob) =>

                        
<div className='pro-box w-full bg-white md:h-[27rem]  rounded-3xl drop-shadow-md grid gap-2 md:grid-cols-2 items-center px-5 my-10'>
               

               
<div className='pro-thumbnail  bg-white w-full rounded-3xl drop-shadow-md m-auto h-[94%]'>

    <img src={prob.coverImg} className='w-full m-auto rounded-3xl'/>

</div>

<div className='pro-details md:w-[70%]   w-[85%] m-auto text-center md:h-[85%] h-[100%]'>

    <h3 className='pro-title  text-[1.1rem] text-black mb-4'>{prob.proTitle}</h3>
    <p className='pro-decsc'>{prob.proDes}</p>  

     <div className="lang-used grid grid-cols-2 md:grid-cols-3 w-[110%] m-auto py-6 ">
        <span className='lang-used-b bg-white drop-shadow-md text-black'>{prob.langused1}</span>
        <span className='lang-used-b bg-white drop-shadow-md text-black'>{prob.langused2}</span>
        <span className='lang-used-b bg-white drop-shadow-md text-black'>{prob.langused3}</span>
        <span className='lang-used-b bg-white drop-shadow-md text-black'>{prob.langused4}</span>
        <span className='lang-used-b bg-white drop-shadow-md text-black'>{prob.langused5}</span>
     </div>
    

    <div className='action-links flex justify-around md:py-4 py-2'>
    <a href={prob.demoLink} target="_blank"> <span className='flex  items-center gap-1 text-black md:text-[1.1rem] text-[.9rem]  cursor-pointer hover:text-[#147efb]'>Live Demo <FaRegCaretSquareRight className='text-[1.8rem]'/></span></a>

    </div>

</div>







</div>
               
               
                )};
            
            


        
        </div>
     </div>
  )
}

export default Experience;
