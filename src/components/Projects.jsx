import React from 'react'
import {proimg,comingsoon,lightcoinie,darkcoinie,imagene,jobhash, moochat, niravest, istore, mopp, isharp} from '../assets'
import {FaGithub,FaFacebook,FaRegCaretSquareRight} from 'react-icons/fa'

const Projects = () => {


    // =======================Local API=======================


    const ProjE = [

        {
            "id":1,
            'coverImg':moochat,
            'proTitle':'MooChat Ⓜ️',
            'proDes':'Rails chatting website! Join the conversation with real-time chat, group creation, and customizable profiles with secure user authentication and authorization',
            'langused1':'Rails',
            'langused2':'Hotwire',
            'langused3':'PostgreSQL',
            'langused4':'Turbo',
            'langused5':'CSS',
            'codeLink':'https://github.com/samojeyinka/messanger-chat-and-group',
            'demoLink':'https://github.com/samojeyinka/messanger-chat-and-group',

        },

        {
            "id":2,
            'coverImg':niravest,
            'proTitle':'Niravest 💵',
            'proDes':'Niravest is an investment platform with Ruby on Rails backend and React frontend. It offers user authentication, package creation, and watchlist management.',
            'langused1':'Rails',
            'langused2':'React',
            'langused3':'PostgreSQL',
            'langused4':'CSS',
            'langused5':'PayStack',
            'codeLink':'https://github.com/samojeyinka/Niravest-Investment-platform',
            'demoLink':'https://github.com/samojeyinka/Niravest-Investment-platform',

        },

        {
            "id":3,
            'coverImg':istore,
            'proTitle':'Istore 🏪',
            'proDes':'Ecommerce website using Ruby on Rails, allowing administrators to manage products in multiple categories with details like name, description, price, quantity, size, and stocks. Customers can browse products, add them to cart, and place orders',
            'langused1':'Rails',
            'langused2':'Scaffold',
            'langused3':'PostgreSQL',
            'langused4':'SCSS',
            'langused5':'Stripe',
            'codeLink':'https://github.com/samojeyinka/Istore',
            'demoLink':'https://github.com/samojeyinka/Istore',

        },

        {
            "id":4,
            'coverImg':mopp,
            'proTitle':'Multi Blogging Platform 📝',
            'proDes':'This rails project is an online publishing platform where individuals and organizations can create and share articles or blog posts on a wide range of topics. Follow one another and chat',
            'langused1':'Rails',
            'langused2':'Active Record',
            'langused3':'PostgreSQL',
            'langused4':'Sqlite in development',
            'langused5':'CSS',
            'codeLink':'https://github.com/samojeyinka/mopp',
            'demoLink':'https://github.com/samojeyinka/mopp',

        },

        {
            "id":5,
            'coverImg':isharp,
            'proTitle':'Isharp 📰',
            'proDes':'Online publishing platform, enabling individuals and organizations to craft and distribute articles or blog posts covering a diverse array of topics.',
            'langused1':'Rails',
            'langused2':'Active Record',
            'langused3':'PostgreSQL',
            'langused4':'Sqlite in development',
            'langused5':'CSS',
            'codeLink':'https://github.com/samojeyinka/isharp',
            'demoLink':'https://github.com/samojeyinka/isharp',

        },

        {
            "id":6,
            'coverImg':jobhash,
            'proTitle':'JobHash 👊',
            'proDes':' online platform that allows users to document their jobs/careers.',
            'langused1':'Node.js',
            'langused2':'Express.js',
            'langused3':'React',
            'langused4':'CSS',
            'langused5':'JWT|Bcrypt',
            'codeLink':'https://github.com/samojeyinka/Jobhash',
            'demoLink':'https://jobhash.vercel.app',

        },
                {
            "id":7,
            'coverImg':imagene,
            'proTitle':'imagene AI 🤖',
            'proDes':'Introducing Imagene, the ultimate AI image generator. Simply enter your keywords or ideas, and watch as Imagene transforms them into breathtaking visuals. ',
            'langused1':'React',
            'langused2':'JS',
            'langused3':'HTML',
            'langused4':'CSS',
            'langused5':'PixabayAPI',
            'codeLink':'https://github.com/samojeyinka/imagene-AI',
            'demoLink':'https://imagene.vercel.app/',

        },
        
        {
            "id":8,
            'coverImg':darkcoinie,
            'proTitle':'coinie 🪙',
            'proDes':'Coinie  allows users to register, login, and monitor the value,track & prices of various cryptocurrencies.Save favorite cryptos,Buy cryptos,edit profile & more',
            'langused1':'React',
            'langused2':'JS',
            'langused3':'HTML',
            'langused4':'CSS',
            'langused5':'API',
            'codeLink':'https://github.com/samojeyinka/coinie',
            'demoLink':'https://coinie.vercel.app/',

        },

        {
            "id":9,
            'coverImg':proimg,
            'proTitle':'CAR RENTAL 🚗',
            'proDes':' online platform that allows users to rent cars for personal or business uses. The website provides an interface for searching, comparing, and reserving cars.',
            'langused1':'React',
            'langused2':'JS',
            'langused3':'Tailwind',
            'langused4':'CSS',
            'langused5':'HTML',
            'codeLink':'https://github.com/samojeyinka/Car-renting-app',
            'demoLink':'https://carsrental.vercel.app/',

        },

    ]





  return (
    <div className='bg-[#f9f9f9] w-full m-auto flex items-center justify-center overflow-hidden' id='projects'>
    
        <div className='w-[80%] max-w-[1020px] pb-[9rem]'>
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
    <a href={prob.codeLink} target="_blank"> <span className='flex  items-center gap-1 text-black md:text-[1.1rem] text-[1rem]  cursor-pointer hover:text-[#147efb]'> Source Code <FaGithub className='text-[2rem]'/> </span></a>
    <a href={prob.demoLink} target="_blank"> <span className='flex  items-center gap-1 text-black md:text-[1.1rem] text-[.9rem]  cursor-pointer hover:text-[#147efb]'>Live Demo <FaRegCaretSquareRight className='text-[1.8rem]'/></span></a>

    </div>

</div>







</div>
               
               
                )};
            
            


        
        </div>
     </div>
  )
}

export default Projects
