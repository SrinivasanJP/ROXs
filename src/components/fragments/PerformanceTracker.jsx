import React from 'react'
import { darkColors } from '../../config/styleClass'
import TopNav from '../TopNav'
function PerformanceTracker({wideBar, id, setFragment}) {







  return (
    <div className={wideBar?darkColors["mainD"]+" md:h-full blur-sm md:filter-none md:ml-[12em]":darkColors["mainD"]+" md:h-full"}>
        <TopNav fragmentName={"ROXs Academy"}/>
    </div>
  )
}

export default PerformanceTracker