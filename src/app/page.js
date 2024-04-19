import React from 'react'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { Contact } from '@/components/Contact'
import SocialIcons from '@/components/SocialIcons'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <SocialIcons/>
    </div>
  )
}

export default page