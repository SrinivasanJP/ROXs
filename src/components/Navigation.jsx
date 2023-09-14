import React, { useState } from 'react'
import logo from '../assets/svgs/logo.png'

function Navigation({setPage}) {
  const [showMenu, setShowMenu] = useState(false)
  return (

    <div className="flex flex-col md:flex-row justify-between fixed w-screen max-w-screen flex-wrap text-gray-300 md:p-[1em] p-[.5em] top-0 left-0 z-50 backdrop-blur-sm ">
      <div className="flex flex-row items-center w-screen md:w-fit justify-between flex-wrap">
        <div className='flex item-center justify-center ml-5'>
          <img src={logo}alt="Logo" className="w-10 h-10 md:w-10 md:h-10"/>
          <h1 className="mx-1 font-bold flex justify-center items-center md:text-2xl lg:text-3xl md:ml-5 "><span className="text-orange-400 font-SpaceMono">ROXs</span> Academy.</h1>
        </div>
      
        <div className='flex items-center justify-center md:hidden'>
        <button className={showMenu?"hidden":"bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] px-4 py-1 rounded-xl text-gray-900 font-bold mr-8  hover:bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#4D78EF_14.06%,#709DF7_51.02%,#7ED4FD_79.09%)] scale-90 hover:scale-105 transition-all duration-700"} tabIndex={0} onClick={()=>setPage("login")}>Login</button>
        <button className=' ml-auto mr-14' onClick={()=>setShowMenu(!showMenu)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </button>
        </div>
       
      
        
      </div>
      
        <nav className={showMenu?"flex mt-4":"hidden md:flex rounded-md p-2 pr-4 md:mr-20"}>
          <ul className="flex w-full flex-row justify-evenly items-center flex-wrap ">
            <li className="mt-2 w-full md:w-20 text-end md:text-start "><a href="#home" className='w-full inline-block text-center text-gray-400 hover:text-gray-50' >Home</a></li>
            <li className="mt-2 w-full md:w-20 text-end md:text-start "><a href="#courses" className='w-full inline-block text-center text-gray-400 hover:text-gray-50'>Courses</a></li>
            <li className="mt-2 w-full md:w-20 text-end md:text-start "><a href="#about" className='w-full inline-block text-center text-gray-400 hover:text-gray-50'>About</a></li>
            <li className=" mt-2 w-full md:w-20 text-end md:text-start "><a href="#contact" className='w-full inline-block text-center text-gray-400 hover:text-gray-50'>Contact</a></li>
            <li><button className=" bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] hover:bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#4D78EF_14.06%,#709DF7_51.02%,#7ED4FD_79.09%)] scale-90 hover:scale-105 px-4 py-1 rounded-xl text-gray-900 font-bold mt-2 w-full md:w-20 text-end md:text-start md:ml-10 transition-all duration-400" tabIndex={0} onClick={()=>setPage("login")}>Login</button></li>
            
          </ul>
        </nav>
        
    </div>
  )
}

export default Navigation