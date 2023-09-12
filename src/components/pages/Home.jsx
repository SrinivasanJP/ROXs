import React, { useRef, useState } from 'react'
import Navigation from '../Navigation'
import bgImg from '../../assets/svgs/homeMan.jpg'
import s1SVG from '../../assets/svgs/programming.svg'
import planet from '../../assets/svgs/3dPlanet.png'
const Home = ({setPage}) => {

  return (
    <div id="home" className="mt-[66px] bg-white"
    >
      <Navigation setPage={setPage}/>
      <section className=' w-screen h-screen bg-[#0c1015] mt-[10em]'>
        <img src={planet} alt="" className='absolute animate-orbit opacity-70 md:-right-[10em] -right-28' />
        <div className='text-white w-[80%] h-[80%] backdrop-blur-sm backdrop-filter bg-opacity-70 rounded-2xl shadow-2xl mx-auto z-10 shadow-gray-600 block'>
        </div>

      </section>
    </div>
    
  )
}

export default Home