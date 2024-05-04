import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/ContactCP';
import Experience from '../components/Experience';

function Home() {
  return (
    <div>
        <Navbar/>
        <Main/>
        <AboutMe/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>


        {/* The home page */}
    </div>
  )
}

export default Home