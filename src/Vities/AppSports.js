import React from 'react'
import { ThemeProvider } from 'styled-components'
import { neutral } from '../styles/Theme'
import Home from './somponents/Home'
import Navigation from './somponents/Navigation'
import '../AppSports.css'
import Categories from './somponents/Categories'
import Details from './somponents/Details'
import Experts from './somponents/Experts'
// import Video from './somponents/Video'
import Blogs from './somponents/Blogs'
import Footer from './somponents/Footer'
import Principles from './Principles'
import Faq from './somponents/Faq'
import Testimonials from './somponents/Testimonials'
const AppSports = () => {
  return (
    <>
      <ThemeProvider theme={neutral}>
        <Navigation />
        <Home />
        <Categories />
        <Details />
        <Principles />
        <Experts />
        {/* <Video /> */}
        <Testimonials />
        <Blogs />
        <Faq />
        <Footer />
      </ThemeProvider> 
    </>
  )
}

export default AppSports