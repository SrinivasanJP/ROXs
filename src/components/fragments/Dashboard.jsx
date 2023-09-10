import React, { useState, useEffect } from 'react'
import TopNav from '../TopNav'
import TypeWriter from '../TypeWriter'

function Dashboard({wideBar}) {
  return (
    <div className={wideBar?"ml-12 text-gray-100 md:h-full blur-sm md:filter-none md:ml-[12em]":" text-gray-100 ml-12 md:h-full"}>
      <div id='section1' className='my-20 mx-10'>
        <div className=''>
        <TypeWriter />
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard