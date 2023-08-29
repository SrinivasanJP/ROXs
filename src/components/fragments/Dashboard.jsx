import React from 'react'

function Dashboard({wideBar}) {
  return (
    <div className={wideBar?"ml-[12em]":"ml-16"}>Dashboard</div>
  )
}

export default Dashboard