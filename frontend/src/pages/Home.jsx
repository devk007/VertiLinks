import React from 'react'
import Hero from '../components/Hero'
import bgImg from '../assets/premium_photo-1661963212517-830bbb7d76fc.avif'
import TechnologySection from '../components/TechnologySection'
import technologyCards from '../data/technologyData'
import SideDock from '../components/SideDock'
import ExpertiseGrid from '../components/ExpertiseGrid'
import HomeAbout from '../components/HomeAbout'

function Home() {
  return (
    <>
        <Hero bg={bgImg}
        title="Business Security Systems"
        description="Growing with every project, gaining invaluable experience and in depth knowledge of clients' requirements..."
        cta={{ label: "Get In Touch", to: "/contact" }} className="h-screen"/>
        <SideDock/>
        <TechnologySection cards={technologyCards}/>
        <HomeAbout/>
        <ExpertiseGrid/>
    </>
  )
}

export default Home