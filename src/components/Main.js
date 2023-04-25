import React from 'react';
import Social from './Social';
import Data from './Data'
import Stack from './Stack';



function Main() {
  return (
    <section className='home section id="home"  overflow-hidden bg-[#f9f9f9] '>
      <div className='home-container grid container'>
        <div className='home__content grid'>


            <Social className/>
            <div className='home__img md:mt-[40px] mt-[70px]'> </div>
            
             <Data/>
        </div>

      </div>
    
   

      <Stack/>

    </section>
  )
}

export default Main
