import React from 'react'
import Hero from '../components/Hero'
import bgImg from '../assets/istockphoto-181098768-1024x1024.jpg'
import Navbar from '../components/Navbar'
import OverviewGrid from '../components/OverviewGrid'
import WhyVertiLinks from '../components/WhyVertiLinks'
import ScheduleCTA from '../components/ScheduleCTA'
import Footer from '../components/Footer'
import { productsOverviewItems } from "../data/productsOverviewData";


function Products() {
  return (
    <>
      <Navbar/>
      <Hero bg={bgImg}
        title="Products"
        description="Vertilinks offers a cutting edge range of industrial and commercial security products that will help to safeguard your business and facilities. Most of the times the companies get confused in deciding whether to invest in a branded or local security system, but we are here to help you in making things easier.."
        cta={{ label: "Get In Touch", to: "/contact" }} className="h-screen" />
      <OverviewGrid
        title="Our Products"
        intro="We provide a wide range of products tailored for identity, security and IT infrastructure. Explore the categories below."
        items={productsOverviewItems}
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

export default Products