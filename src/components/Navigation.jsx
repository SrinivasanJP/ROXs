import React, { useState } from 'react'
import logo from '../assets/dummyLogo.png'

function Navigation({setPage}) {
  const [showMenu, setShowMenu] = useState(false)
  return (

    <div className="flex flex-col md:flex-row justify-between fixed w-screen max-w-screen flex-wrap bg-white md:p-[1em] p-[.5em] top-0 left-0 z-50">
      <div className="flex flex-row items-center w-screen md:w-fit">
      <img src={logo}alt="Logo" className="w-5 h-5 md:w-10 md:h-10"/>
        <h1 className="mx-5 font-bold"><span className="text-orange-400">ROXs</span> Academy.</h1>
        <button className='md:hidden ml-auto mr-14' onClick={()=>setShowMenu(!showMenu)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </button>
        
      </div>
      
        <nav className={showMenu?"flex":"hidden"+" md:flex rounded-md p-2 pr-4 shadow-lg"}>
          <ul className="flex w-full flex-row justify-evenly items-center flex-wrap">
            <li className="mt-2 w-full md:w-20 text-end md:text-start "><a href="#home" className='w-full inline-block text-center' >Home</a></li>
            <li className="mt-2 w-full md:w-20 text-end md:text-start "><a href="#courses" className='w-full inline-block text-center'>Courses</a></li>
            <li className="mt-2 w-full md:w-20 text-end md:text-start "><a href="#about" className='w-full inline-block text-center'>About</a></li>
            <li className=" mt-2 w-full md:w-20 text-end md:text-start "><a href="#contact" className='w-full inline-block text-center'>Contact</a></li>
            <li className="mt-2 border rounded-full bg-cyan-500 text-white font-bold text-sm shadow-xl cursor-pointer ml-auto md:ml[1em] md:mr-[3em] mx-auto" role="button" tabIndex={0}><a onClick={()=>setPage("login")} className="w-[5.5em] h-[2.5em] flex justify-center items-center">Login</a></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navigation