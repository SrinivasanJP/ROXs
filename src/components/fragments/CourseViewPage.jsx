import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { darkColors } from '../../config/styleClass'
import TopNav from '../TopNav'
function CourseViewPage({wideBar, setFragement, id}) {  

  const [courseDetails,setCourseDetails] = useState({})
  const [contentDetails, setContentDetails] = useState({})

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
    useEffect(()=>{
      (async()=>{
        try{
        const contentsRef = doc(db, "courses", id, "contentDetails","includes");
        const contentsSnap = await getDoc(contentsRef);
        if(contentsSnap.exists()){
         setContentDetails(contentsSnap.data())
         console.log(contentsSnap.data())
        }else{
         console.log("No document found")
        }}catch(err){
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
  const [visibleModules, setVisibleModules] = useState([]);

  const toggleModuleVisibility = (index) => {
    const newVisibleModules = [...visibleModules];
    newVisibleModules[index] = !newVisibleModules[index];
    setVisibleModules(newVisibleModules);
  };

  const emptyStarIcons = Array.from({ length: emptyStars }, (_, index) => (
    <span key={index} className="star-icon">
      ☆
    </span>
  ));

  return (

    <div className={wideBar?darkColors["mainD"]+" md:h-full blur-sm md:filter-none md:ml-[12em]":darkColors["mainD"]+" md:h-full"}>
      <TopNav fragmentName={"ROXs Academy"}/>
      <div className=' flex flex-col justify-center items-center mt-20 md:w-[70%]  p-5'>
        <img src={courseDetails.thumbnail} alt="thumbnail for course" className=' w-[35em] my-5 rounded-[1em] shadow-2xl shadow-green-500'/>
        <h1 className=' font-extrabold text-2xl'>{courseDetails.Title}</h1>
        <p className=' my-5 text-lg text-justify'>{courseDetails.sDescription}</p>
        <p className='mr-auto'>Course Rating ({courseDetails.ratings+".7"}) <span className='ml-5'> {filledStarIcons}
      {emptyStarIcons} </span></p>
        <p className='mr-auto'>by {courseDetails.author}</p>
        
      </div>
      <div className=' bg-gradient-to-r md:w-[60%] rounded-[1em] p-5 md:shadow-2xl shadow-green-500 '>
        <h2 className=' text-center text-2xl font-bold m-3'>Course Contents</h2>
        <ol >
          {(contentDetails.contents||[]).map((moduleName, index)=>(

              <li className='bg-gradient-to-r from-gray-800 rounded-xl even:from-slate-900 shadow-md hover:scale-105'>
                <div className='flex justify-between p-3 m-5 cursor-pointer flex-wrap' onClick={()=> toggleModuleVisibility(index)}>
                  <h1 className='inline-block w-[70%]'>{Object.keys(moduleName)}</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>

            
            <ul className={`${
          visibleModules[index] ? 'opacity-100 max-h-[1000px] transition-all duration-300 ease-in-out' : 'opacity-0 max-h-0 min-h-0 scale-0 overflow-hidden transition-all duration-300 ease-in-out'
        }`}>
              {moduleName[Object.keys(moduleName)[0]].map((topics)=>(
                <li className='list-disc pl-14 p-5 list-inside odd:bg-gradient-to-r from-gray-800 even:bg-slate-900 rounded-xl'>{topics}</li>
              ))}
            </ul>
            </li>
          ))}
        </ol>
      </div>
      <Requirements />
      <div className='w-[95%] fixed bottom-0 md:flex md:justify-center md:items-center bg-gradient-to-r from-gray-900'>
          <h1 className='hidden md:block w-[40%] text-center font-extrabold text-2xl '>{courseDetails.Title}</h1>
          <RegisterBtn />
      </div>
    </div>
  )
}
const Requirements = ()=>
  (
    <div className='mt-5 pb-[6em]  md:w-[70%] p-5'>
      <h1 className=' text-2xl font-bold my-4'>Requirements: </h1>
      <ul className=' list-disc list-inside'>
        <li className=' text-sm m-5'>No programming experience needed - I'll teach you everything you need to know</li>
        <li className=' text-sm m-5'>A computer with access to the internet</li>
        <li className=' text-sm m-5'>No paid software required</li>
        <li className=' text-sm m-5'>I'll walk you through, step-by-step how to get all the software installed and set up</li>
      </ul>

    </div>
  )
  const RegisterBtn = ()=>(
    <div role='button' className="bg-slate-100 text-gray-950 font-bold m-5 text-xl rounded-xl p-3 cursor-pointer h-[2.5em] text-center md:w-[50%]">
        <h1>Register</h1>
      </div>
  )


export default CourseViewPage