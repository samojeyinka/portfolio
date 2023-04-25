import React from 'react'
import { proto,coinPhase } from '../assets'
import {FaGithub,FaFacebook,FaRegCaretSquareRight} from 'react-icons/fa'

const Projects = () => {


    // =======================Local API=======================


    const ProjE = [

        {
            "id":1,
            'coverImg':proto,
            'proTitle':'CAR RENTAL 🚗',
            'proDes':' online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.',
            'langused1':'React',
            'langused2':'JS',
            'langused3':'Tailwind',
            'langused4':'CSS',
            'langused5':'HTML',
            'codeLink':'https://facebook.com',
            'demoLink':'https://facebook.com',

        },


        
        {
            "id":2,
            'coverImg':coinPhase,
            'proTitle':'Crypto Dapp🪙',
            'proDes':' online platform that allows users to buy crypto currency for personal use. The website provides an interface for trading, buying, and selling cryptos.',
            'langused1':'React',
            'langused2':'JS',
            'langused3':'HTML',
            'langused4':'CSS',
            'langused5':'Bootstrap',
            'codeLink':'https://facebook.com',
            'demoLink':'https://facebook.com',

        },

    ]





  return (
    <div className='bg-[#f9f9f9] w-full m-auto flex items-center justify-center overflow-hidden' id='projects'>
    
        <div className='w-[80%] max-w-[1020px] py-[9rem]'>
            <h3 className='text-[1.25rem] uppercase text-[#147efb]'>Portfolio</h3>
            <h3 className='text-[1.5rem] font-bold py-2 mb-[4rem]'>Each project is a unique piece of development 🧩</h3>


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
    <a href={prob.codeLink}> <span className='flex  items-center gap-1 text-black md:text-[1.1rem] text-[1rem]  cursor-pointer hover:text-[#147efb]'> Code <FaGithub className='text-[2rem]'/> </span></a>
    <a href={prob.demoLink}> <span className='flex  items-center gap-1 text-black md:text-[1.1rem] text-[.9rem]  cursor-pointer hover:text-[#147efb]'>Live Demo <FaRegCaretSquareRight className='text-[1.8rem]'/></span></a>

    </div>

</div>







</div>
               
               
                )}
            
            
{/*             
            <div className='pro-box w-full bg-white md:h-[27rem]  rounded-3xl drop-shadow-md grid gap-2 md:grid-cols-2 items-center px-5'>
               

               
                <div className='pro-thumbnail  bg-white w-full rounded-3xl drop-shadow-md m-auto h-[94%]'>

                    <img src={proto} className='w-full m-auto rounded-3xl'/>

                </div>

                <div className='pro-details md:w-[70%]   w-[85%] m-auto text-center md:h-[85%] h-[100%]'>

                    <h3 className='pro-title  text-[1.1rem] text-black mb-4'>CAR RENTAL 🚗</h3>
                    <p className='pro-decsc'>A car rental website is an 
                    online platform that allows users to rent
                     cars for personal 
                    or business use. The website provides
                     an interface for searching, comparing, 
                     and reserving cars.</p>  

                     <div className="lang-used grid grid-cols-3 w-[110%] m-auto py-6 ">
                        <span className='lang-used-b bg-white drop-shadow-md text-black'>React</span>
                        <span className='lang-used-b bg-white drop-shadow-md text-black'>Tailwind</span>
                        <span className='lang-used-b bg-white drop-shadow-md text-black'>javascript</span>
                        <span className='lang-used-b bg-white drop-shadow-md text-black'>SCSS</span>
                        <span className='lang-used-b bg-white drop-shadow-md text-black'>Next</span>
                     </div>
                    

                    <div className='action-links flex justify-around md:py-4 py-2'>
                    <a href='https://face.com'> <span className='flex  items-center gap-1 text-black md:text-[1.1rem] text-[1rem]  cursor-pointer hover:text-[#147efb]'> Code <FaGithub className='text-[2rem]'/> </span></a>
                    <a href='https://face.com'> <span className='flex  items-center gap-1 text-black md:text-[1.1rem] text-[.9rem]  cursor-pointer hover:text-[#147efb]'>Live Demo <FaRegCaretSquareRight className='text-[1.8rem]'/></span></a>

                    </div>

                </div>


            </div> */}
        
        </div>
     </div>
  )
}

export default Projects
