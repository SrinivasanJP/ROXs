import React, { useState, useEffect } from 'react'
import {darkColors} from "../../config/styleClass"
import TopNav from '../TopNav'
import CourseCards from '../CourseCards'
import { db } from '../../config/firebase'
import { collection, getDocs } from 'firebase/firestore'
function Courses({wideBar, setFragment}) {
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
    <div className={wideBar?darkColors["mainD"]+" blur-sm md:filter-none md:ml-[12em]":darkColors["mainD"]}>
       <TopNav fragmentName={"Available Courses"} 
       wideBar={wideBar}/>
       <div className=' w-[80%] grid grid-flow-row mt-16 grid-cols-1 xl:grid-cols-2 xl:gap-10 '>
        {coursesCollections.length<=0?( <p>No courses available</p> ): 
        coursesCollections.map((course)=>(
          <CourseCards setFragment={setFragment} 
          title ={course["Title"]}
          author = {course["author"]}
          sDescription = {course["sDescription"]}
          rating = {course["ratings"]}
          id={course["id"]}
          thumbnail = {course["thumbnail"]}
          cFragment = {"courses"}
          key={course["id"]}
          />
        ))
        }
       </div>
    </div>
  )
}

export default Courses