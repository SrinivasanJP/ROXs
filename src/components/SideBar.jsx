import React, { useState } from 'react'
import {FaFire} from 'react-icons/fa'
import {BsPlus, BsFillLightningFill, BsPersonVcard} from 'react-icons/bs'
import { IoReorderThree } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

function SideBar({setFragment, wideBar, setWideBar}) {
  return (
    <div className={wideBar?"fixed top-0 left-0 h-screen w-[12em] bg-gray-900 m-0 flex flex-col text-white shadow-lg transition-all duration-500 pt-5 z-20":'fixed top-0 left-0 h-screen w-12 md:w-16 bg-gray-900 m-0 flex flex-col text-white shadow-lg transition-all duration-500 pt-5 z-20'}>
      <IoReorderThree className={wideBar?"wide-sidebar-icon bg-green-600 text-gray-100 w-12 transition-all duration-500":"sidebar-icon transition-all duration-500"} onClick={()=>setWideBar(!wideBar)}/>
      <hr className='mx-2'/>
        <SideBarIcon icon ={<FaFire size="20" />} text="Dashboard" wide={wideBar} set = {setFragment}/>
        <SideBarIcon icon ={<BsPlus size="30"/>} text = "Course" wide={wideBar} set = {setFragment}/>
        <SideBarIcon icon ={<BsFillLightningFill size="20"/>} wide={wideBar} text='Performance' set = {setFragment}/>
        <SideBarIcon icon ={<BsPersonVcard size="20"/>} wide={wideBar} text='Profile' set = {setFragment}/>
        
    </div>
  )
}
const SideBarIcon = ({icon, text = "tool-tip", wide,set}) => (
    <div className={wide?"wide-sidebar-icon":"sidebar-icon group"} onClick={()=>{set(text.toLowerCase())}}>
        {icon}
        <span className={wide?"wide-sidebar-tooltip":'sidebar-tooltip group-hover:scale-100'}>
            {text}
        </span>
    </div>
);

export default SideBar