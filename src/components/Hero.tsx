import React from 'react'
import Navebar from './Navebar'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/bg2.jpg)] bg-cover"
    style={{backgroundSize: "21%", backgroundPosition: "left 70px top 160px"}}
    >
        <Navebar />
        <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
          <div className="hidden lg:block"></div>
          <div className="text-[80px] sm:text-[90px] font-bold leading-tight flex justify-center items-center">
            <div>
              <p data-aos="zoom-in-up">I</p>
              <p data-aos="zoom-in-up">am</p>
              <p data-aos="zoom-in-up">Amber</p>
            </div>
          </div>
        </div>
      
    </div>
  
  )
}

export default Hero
