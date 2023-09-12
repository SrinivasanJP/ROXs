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
      <section className=' w-screen h-screen bg-[#0c1015] md:mt-[10em]'>
        <img src={planet} alt="" className='absolute animate-orbit opacity-70 md:-right-[10em] -right-28' />
        <div className='text-white w-[85%] h-[80%] backdrop-blur-sm backdrop-filter bg-opacity-70 rounded-2xl shadow-md mx-auto z-10 shadow-gray-700 flex justify-center items-center'>
          <h1 className=' font-bold text-4xl' >Welcome to <br /> <span className=' font-SpaceMono text-orange-400'>ROXs</span> Academy</h1>
          <p></p>
        </div>

      </section>
    </div>
    
  )
}

export default Home