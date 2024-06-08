import React from 'react'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'

const AboutMePage = () => {
  return (
    <>
        <AboutMe isAboutMe={true}/>
        <Skills />
    </>
  )
}

export default AboutMePage