import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import bgImg from '../assets/edge2edge-media-x21KgBfOd_4-unsplash.jpg'
import OverviewGrid from '../components/OverviewGrid'
import { solutionsOverviewItems } from "../data/solutionsOverviewData";
import WhyVertiLinks from '../components/WhyVertiLinks'
import ScheduleCTA from '../components/ScheduleCTA'

function Solutions() {
  return (
    <>
        <Navbar/>
        <Hero bg={bgImg}
            title="Solutions"
            description="VertiLinks delivers end-to-end IT and security solutions designed for modern businesses. From time attendance and access control to cloud infrastructure, networking, and managed IT support, we ensure seamless, secure, and scalable systems tailored to your needs."
            cta={{ label: "Get In Touch", to: "/contact" }} className="h-screen"/>
          <OverviewGrid
              title="Our Solutions"
              intro="End-to-end IT & security solutions for modern businesses—covering attendance, access control, surveillance, network, cloud and managed IT."
              items={solutionsOverviewItems}
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

export default Solutions