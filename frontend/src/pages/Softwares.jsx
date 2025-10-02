import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import OverviewGrid from '../components/OverviewGrid'
import { softwareOverviewItems } from "../data/softwareOverviewData";
import WhyVertiLinks from '../components/WhyVertiLinks'
import ScheduleCTA from '../components/ScheduleCTA'
import images from '../data/images'


function Softwares() {
  return (
    <>
        <Navbar/>
        <Hero bg={images.home.tech.four}
            title="Softwares"
            description="At VertiLinks, we develop powerful software platforms that help organizations streamline their processes and improve decision-making. Whether it’s managing employees, engaging customers, or driving growth with ERP and custom applications, our solutions are tailored to meet your business goals."
            cta={{ label: "Get In Touch", to: "/contact" }} className="h-screen"/>
          <OverviewGrid
              title="Our Softwares"
              intro="VertiLinks delivers enterprise-ready software solutions ranging from attendance and visitor management to ERP and custom app development. Explore our offerings below."
              items={softwareOverviewItems}
              accent={{
                  bg: "bg-blue-50",
                  text: "text-blue-700",
                  border: "border-blue-100",
                  link: "text-blue-600",
              }}
          />
          <WhyVertiLinks/>
          <ScheduleCTA/>
        <Footer/>
    </>
  )
}

export default Softwares
