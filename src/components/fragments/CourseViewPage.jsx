import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { darkColors } from '../../config/styleClass'
function CourseViewPage({wideBar, setFragement, id}) {  

  const [courseDetails,setCourseDetails] = useState({})

  useEffect(()=>{
    (async()=>{
      try{
      const docRef = doc(db, "courses", id);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        setCourseDetails(docSnap.data())
      }
      else{
        console.log("NO doc found");
      }
    }catch(err){
      console.log("UID not loaded")
    }
    })();
    },[]);

  return (
    <div className={wideBar?darkColors["mainD"]+" blur-sm md:filter-none md:ml-[12em]":darkColors["mainD"]}>
      <div className=' flex flex-col justify-center items-center mt-10 w-[70%]'>
        <img src={courseDetails.thumbnail} alt="thumbnail for course" className=' w-[35em] m-5'/>
        <h1 className=' font-extrabold text-'>{courseDetails.Title}</h1>
        
      </div>
    </div>
  )
}

export default CourseViewPage