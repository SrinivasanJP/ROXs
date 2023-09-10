import React, { useState, useEffect } from 'react'
import TopNav from '../TopNav'
import TypeWriter from '../TypeWriter'
import bgImg from "../../assets/svgs/hero-bg.webp"
import droneSvg from "../../assets/svgs/hero-drone.webp"
function Dashboard({wideBar}) {
  return (
    <div className={wideBar?"ml-12 text-gray-100 md:h-full blur-sm md:filter-none md:ml-[12em]":" text-gray-100 ml-12 md:h-full"}>
      <div className=' absolute -z-10 top-0 left-0 -scale-x-100'>
        <img src={bgImg} alt="background image"  />
      </div>
      <div id='section1' className='my-20 mx-5 md:mx-20 md:mt-44'>
        <TypeWriter />
        <img src={droneSvg} alt="drone image" className='absolute -z-10 md:w-44 w-28 top-80 md:top-[50em] md:right-20 right-10 animate-drone' />
      </div>
      <main>
        
      </main>
    </div>
  )
}

export default Dashboard