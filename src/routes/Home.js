import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/ContactCP';

function Home() {
  return (
    <div>
        <Navbar/>
        <Main/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <Footer/>


        {/* The home page */}
    </div>
  )
}

export default Home