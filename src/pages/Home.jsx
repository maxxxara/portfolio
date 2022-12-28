import React from 'react'
import Contact from '../components/Contact';
import Experience from '../components/Experience';

import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Info from './../components/Info';

const Home = () => {
  return (
    <>
        <Hero />
        <Info />
        {/* <Experience /> */}
        <Skills />
        <Projects />
        <Contact />
    </>
  )
}

export default Home