import React from 'react'
import Hero from '../components/Hero'
import bgImg from '../assets/premium_photo-1661963212517-830bbb7d76fc.avif'
import TechnologySection from '../components/TechnologySection'
import technologyCards from '../data/technologyData'
import SideDock from '../components/SideDock'
import ExpertiseGrid from '../components/ExpertiseGrid'
import HomeAbout from '../components/HomeAbout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Navbar/>
        <Hero bg={bgImg}
        title="Innovation Driven, Security Focused."
        description="VertiLinks stands at the forefront of IT and security innovation, delivering integrated solutions that safeguard businesses and empower digital transformation. From infrastructure and networking to surveillance and cloud, we combine expertise with trust to help enterprises grow with confidence."
        cta={{ label: "Get In Touch", to: "/contact" }} className="h-screen"/>
        <SideDock/>
        <TechnologySection cards={technologyCards}/>
        <HomeAbout/>
        <ExpertiseGrid/>
        <Footer/>
    </>
  )
}

export default Home