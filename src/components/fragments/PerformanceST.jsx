import React, { useState, useEffect } from 'react'
import {darkColors} from "../../config/styleClass"
import TopNav from '../TopNav'
import CourseCards from '../CourseCards'
import { auth, db } from '../../config/firebase'
import { collection, getDoc, getDocs, doc } from 'firebase/firestore'
function Courses({wideBar, setFragment}) {
  const [coursesCollections, setCoursesCollections] = useState([])
  
  useEffect(()=>{
    (async ()=>{
        const courseRef = collection(db, "user",auth.currentUser.uid,"registeredCourses")
        const collectionSnap = await getDocs(courseRef)
        const newData = [];
        setCoursesCollections([])
        collectionSnap.forEach(async(courseId)=>{
          
          const detailsRef = doc(db, "courses", courseId.id)
          const detailsSnap = await getDoc(detailsRef)
          const newColl = {...detailsSnap.data(), id: courseId.id}
          setCoursesCollections(old=>[...old, newColl])
      });
    })()
}, [])



  return (
    <div className={wideBar?darkColors["mainD"]+" blur-sm md:filter-none md:ml-[12em] h-screen":darkColors["mainD"]+' h-screen'}>
       <TopNav fragmentName={"Registered Courses"} 
       wideBar={wideBar}/>
       <div className=' w-[80%] grid grid-flow-row mt-16 grid-cols-1 xl:grid-cols-2 xl:gap-10 '>
        {coursesCollections.length<=0?( <h1 className='text-center mt-[10em]'>No courses available</h1> ): 
        coursesCollections.map((course)=>
        (
          <CourseCards setFragment={setFragment} 
          title ={course["Title"]}
          author = {course["author"]}
          sDescription = {course["sDescription"]}
          rating = {course["ratings"]}
          id={course["id"]}
          thumbnail = {course["thumbnail"]}
          cFragment = {"performance"}
          key={course["id"]}
          />
        ))
        }
       </div>
    </div>
  )
}

export default Courses