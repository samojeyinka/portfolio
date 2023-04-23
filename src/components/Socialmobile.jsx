import React from 'react';
import { FaFacebook,FaTwitter,FaGithub,FaSlack,FaWhatsapp,FaStackOverflow,FaReddit, FaLinkedin} from 'react-icons/fa';

const SocialM = () => {
  return (
    <div className='home__socialM hidden'>
        <a href="https://github.com/samojeyinka" target='_blank' className='home_social_icon'><FaGithub/></a>
        <a href="https://linkedin.com/in/ojeyinka-samuel-02406125a" target='_blank' className='home_social_icon'><FaLinkedin/></a>
        <a href="https://wa.me/2348122624063" target='_blank' className='home_social_icon'><FaWhatsapp/></a>
        <a href="https://twitter.com/sam_ojeyinka" target='_blank' className='home_social_icon'><FaTwitter/></a>
        {/* <a href="#" target='_blank' className='home_social_icon'><FaSlack/></a>
        <a href="#" target='_blank' className='home_social_icon'><FaReddit/></a>
        <a href="#" target='_blank' className='home_social_icon'><FaStackOverflow/></a> */}
    </div>
  )
}

export default SocialM