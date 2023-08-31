import React from 'react'
import logo from '../assets/dummyLogo.png'
function Navigation({setPage}) {
  return (

    <div className="flex flex-row justify-between fixed w-full flex-wrap bg-white md:p-[1em] p-[.5em] top-0">
      <div className="flex flex-row items-center">
      <img src={logo}alt="Logo" className="w-5 h-5 md:w-10 md:h-10"/>
        <h1 className="mx-5 font-bold"><span className="text-orange-400">ROXs</span> Academy.</h1>
      </div>
        
        <nav className="hidden md:flex ">
          <ul className="flex flex-row justify-evenly items-center flex-wrap">
            <li className="w-20"><a href="/#home" >Home</a></li>
            <li className="w-20"><a href="/courses">Courses</a></li>
            <li className="w-20"><a href="/#about">About</a></li>
            <li className="w-20"><a href="/#contact">Contact</a></li>
            <li className=" border rounded-full bg-cyan-500 text-white font-bold text-sm shadow-xl cursor-pointer ml-[1em] mr-[3em]" role="button" tabIndex={0}><a onClick={()=>setPage("login")} className="w-[5.5em] h-[2.5em] flex justify-center items-center">Login</a></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navigation