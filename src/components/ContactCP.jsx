import React from 'react'
import {FaLocationArrow,FaSearchLocation,FaMapMarked,FaEnvelopeOpenText} from 'react-icons/fa'

const ContactCP = () => {
  return (
    <div className='bg-white py-[10rem] px-[5rem] overflow-hidden footer-con' id='contact'>
        <div className='max-w-[1020px] mx-auto'>

        <h3 className='text-[1.25rem] uppercase text-[#147efb]'>Contact</h3>
            <h3 className='text-[1.5rem] font-bold py-2 mb-[4rem]'>DO NOT HESITATE TO HIT ME UP 👇</h3>
        <div className="contact-me flex justify-between">
                <div className="locaton flex gap-5 items-center">
                    <span className=' bg-white drop-shadow-md p-5 rounded-[50%]'>
                    <FaMapMarked className='text-[2.2rem] text-[#147efb] '/>
                    </span>
                    <span>
                        <h1 className='text-xl'>Location</h1>
                        <p>Osun,Nigeria</p>
                    </span>
                </div>

                <div className="mail flex gap-5 items-center">
                    <span className=' bg-white drop-shadow-md p-5 rounded-[50%]'>
                <FaEnvelopeOpenText className='text-[2.2rem] text-[#147efb] '/>
                </span>
                    <span>
                        <h1 className='text-xl'>Mail</h1>
                        <p> <a href="mailto:samuelojeyinka@gmail.com">samuelojeyinka@gmail.com</a> </p>
                    </span>
                   

                </div>
        </div>
        
        </div>

    </div>
  )
}

export default ContactCP