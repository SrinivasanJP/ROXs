import React from 'react'

function TutorCard({tutorDetails}) {
  return (
    <div className=' text-white flex bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] rounded-xl relative p-5 group hover:scale-110 transition-all duration-500'>
        <img src={tutorDetails.profile} alt="profile of tutor" className=' w-20 h-20 rounded-full absolute -top-4 shadow-lg group-hover:scale-105 transition-all duration-900'/>
        <div className=" ml-24 text-sm">
            <h1>{"Name: "+tutorDetails.Name}</h1>
            <a href={`tel:${tutorDetails.contact}`} className='block' >{"Mobile: "+tutorDetails.contact}</a>
            <a href={`mailto:${tutorDetails.email}`} className='block'>{"E-mail: "+tutorDetails.email}</a>
            <a href={tutorDetails.git} target="_blank" className='block'>GitHub</a>
        </div>
    </div>
  )
}

export default TutorCard