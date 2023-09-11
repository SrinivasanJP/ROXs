import React, { useState, useEffect } from 'react'
import CourseCards from '../CourseCards'
import TypeWriter from '../TypeWriter'
import bgImg from "../../assets/svgs/hero-bg.webp"
import droneSvg from "../../assets/svgs/hero-drone.webp"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { db } from '../../config/firebase'
import { collection, getDocs } from 'firebase/firestore'
function Dashboard({wideBar, setFragment}) {
  const [coursesCollections, setCoursesCollections] = useState([])
  useEffect(()=>{
    (async ()=>{
        const courseRef = collection(db, "courses")
        const collectionSnap = await getDocs(courseRef)
        setCoursesCollections([])
        collectionSnap.forEach((doc)=>{
          const newColl = {...doc.data(), id: doc.id}
          setCoursesCollections(old=>[...old, newColl])
        })
    })()
}, [])
  return (
    <div className={wideBar?" ml-12 text-gray-100 md:h-full blur-sm md:filter-none md:ml-[12em]":" text-gray-100 ml-16 md:h-full"}>
      <div className=' absolute -z-10 top-0 left-0 -scale-x-100'>
        <LazyLoadImage src={bgImg} alt="background image"  />
      </div>
      <LazyLoadImage src={droneSvg} alt="drone image" className='absolute -z-10 lg:w-44 w-24 top-72 md:top-[50em] md:right-20 right-8 animate-drone' />
      <div id='section1' className='my-20 md:mx-20 lg:mt-44 min-h-[10em] md:min-h-[30em]'>
        <TypeWriter />
      </div>
      <main>
        <div className='flex'>
          
          <div className='flex flex-col items-center w-[10%]'>
          <div className='h-[2em] bg-gray-400 w-1 rounded-xl mb-3'></div>
          <div className='flex w-10 justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-14 md:h-14 z-10 animate-drone">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
          <span className=' absolute blur-xl bg-green-500 inline-block w-10 h-10'></span>
          </div>
          <div className='h-full bg-gray-400 w-1 rounded-t-xl mt-3'></div>

          </div>
        
          <div className='mt-[2em] ml-2 w-[90%]'>
            <div className='mb-10'>
              <h1 className=' font-SpaceMono font-extrabold text-xl md:text-3xl'>Top Courses</h1>
              {coursesCollections.slice(0,5).map((course, index)=>(
                <div key={index} onClick={()=>setFragment(["courseView", course.id])} className=' cursor-pointer'>
                  <LazyLoadImage src={course.thumbnail} alt="course thumbnail" className=' rounded-xl mt-5 shadow-2xl shadow-green-500 w-[70%] lg:w-[20em]' />
                  <h1 className=' font-bold justify-center items-center md:text-3xl mt-4'>{course.Title}</h1>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        <div className='flex'>
        
        <div className='flex flex-col items-center w-[10%]'>
        <div className='h-[2em] bg-gray-400 w-1 rounded-b-xl mb-3'></div>
        <div className='flex w-10 justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-14 md:h-14 animate-drone z-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>

        <span className=' absolute blur-xl bg-green-500 inline-block w-10 h-10'></span>
        </div>
        <div className='h-full bg-gray-400 w-1 rounded-xl mt-3'></div>

        </div>
       
        <div className='mt-[2.5em] ml-2 w-[90%]'>
          <div className='mb-10'>
            <h1 className=' font-SpaceMono font-extrabold text-xl md:text-3xl'>Things you can:</h1>
            <ul className=' font-SpaceMono text-green-600 mt-5'>
              <li className='mt-5 md:text-2xl'><span>&gt;&gt; </span>Compile your code form anywhere with any device</li>
              <li className='mt-5 md:text-2xl'><span>&gt;&gt; </span>Get life time access to the data for registered courses</li>
              <li className='mt-5 md:text-2xl'><span>&gt;&gt; </span>Learn by doing</li>
              <li className='mt-5 md:text-2xl'><span>&gt;&gt; </span>Learn to build from the developers not from the classic tutors</li>
            </ul>
          </div>
          
        </div>
      </div>
      </main>
      
      
    </div>
  )
}

export default Dashboard