import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { darkColors } from '../../config/styleClass'
import TopNav from '../TopNav'
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
    const maxRating = 5;
  const filledStars = Math.round(courseDetails.ratings);
  const emptyStars = maxRating - filledStars;
  const filledStarIcons = Array.from({ length: filledStars }, (_, index) => (
    <span key={index} className="star-icon">
      ★
    </span>
  ));

  const emptyStarIcons = Array.from({ length: emptyStars }, (_, index) => (
    <span key={index} className="star-icon">
      ☆
    </span>
  ));

  return (

    <div className={wideBar?darkColors["mainD"]+" blur-sm md:filter-none md:ml-[12em]":darkColors["mainD"]}>
      <TopNav fragmentName={"ROXs Academy"}/>
      <div className=' flex flex-col justify-center items-center mt-20 w-[70%] p-5'>
        <img src={courseDetails.thumbnail} alt="thumbnail for course" className=' w-[35em] my-5 rounded-[1em] shadow-2xl shadow-green-500'/>
        <h1 className=' font-extrabold text-2xl'>{courseDetails.Title}</h1>
        <p className=' my-5 text-lg text-justify'>{courseDetails.sDescription}</p>
        <p className='mr-auto'>Course Rating ({courseDetails.ratings+".7"}) <span className='ml-5'> {filledStarIcons}
      {emptyStarIcons} </span></p>
        <p className='mr-auto'>by {courseDetails.author}</p>
        
      </div>
    </div>
  )
}

export default CourseViewPage