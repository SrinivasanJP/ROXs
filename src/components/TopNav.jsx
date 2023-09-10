import React from 'react'

function TopNav({fragmentName, wideBar}) {
  return (
    <div className='flex  top-0 md:w-full w-[98%] max-w-screen h-16 items-center  flex-wrap justify-around fixed z-40 bg-gradient-to-r from-gray-900'>
        <h1 className='font-semibold text-sm md:ml-10 md:text-2xl'>{fragmentName}</h1>
        <form  className=' flex justify-evenly w-[50%] bg-gradient-to-br from-transparent to-slate-900 shadow-sm shadow-gray-800 rounded-full items-center py-1 '>
            <label htmlFor="search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mx-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

            </label>
            <input type="search" placeholder='Search Courses' className=' bg-inherit w-[80%] text-sm md:text-lg focus:outline-none' />
        </form>
    </div>
  )
}

export default TopNav