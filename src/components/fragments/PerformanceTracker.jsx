import React, { useEffect, useState } from 'react'
import { auth, db } from '../../config/firebase'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { darkColors } from '../../config/styleClass'
import TopNav from '../TopNav'
function PerformanceTracker({wideBar, id, setFragment}) {

  const [courseDetails,setCourseDetails] = useState({})
  const [contentDetails, setContentDetails] = useState({})

  const [regFlag, setRegFlag] = useState(false)
  useEffect(()=>{
    (async()=>{
      try{
      const docRef = doc(db, "courses", id);
      const docSnap = await getDoc(docRef);
      
      if(docSnap.exists()){
        setCourseDetails(docSnap.data())
      }
      else{
        alert("No doc found error")
      }
      
    }catch(err){
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
        }else{
         alert("Document not found error")
        }}catch(err){
        }
      })();
    },[]);
    useEffect(()=>{
      (async()=>{
        try{
        const contentsRef = doc(db, "courses", id, "registeredStudents",auth.currentUser.uid);
        const contentsSnap = await getDoc(contentsRef);
        if(contentsSnap.exists()){
         setRegFlag(true)
        }else{
         setRegFlag(false)
        }}catch(err){
          setRegFlag(false)
        }
      })();

    },[])

  const [visibleModules, setVisibleModules] = useState([]);

  const toggleModuleVisibility = (index) => {
    const newVisibleModules = [...visibleModules];
    newVisibleModules[index] = !newVisibleModules[index];
    setVisibleModules(newVisibleModules);
  };
  const Task = ()=>(
    <div className=' bg-gray-900 p-5 rounded-[1em] md:w-[60%] pb-10'>
      <h1 className=' text-center text-xl font-bold'>Assigned Tasks</h1>
      <table className='mt-8 table-auto w-full'>
        <thead>
          <tr className=' bg-slate-800'>
            <th className=' w-[10%]'>S.No</th>
            <th className=' w-[50%]'>Task</th>
            <th className=' w-[20%]'>Submission</th>
            <th className=' w-[20%]'>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-center'>1</td>
            <td>This is the placeholder for the task list</td>
            <td>submission link</td>
            <td className='text-center'>Done</td>
          </tr>
        </tbody>
      </table>

    </div>
  )

  return (
    <div className={wideBar?darkColors["mainD"]+" md:h-full blur-sm md:filter-none md:ml-[12em]":darkColors["mainD"]+" md:h-full"}>
    <TopNav fragmentName={"ROXs Academy"}/>
    <div className=' flex flex-col justify-center items-center mt-20 md:w-[70%]  p-5'>
      <img src={courseDetails.thumbnail} alt="thumbnail for course" className=' w-[35em] my-5 rounded-[1em] shadow-2xl shadow-green-500'/>
      <h1 className=' font-extrabold text-2xl'>{courseDetails.Title}</h1>  
    </div>
    <Task />
    <div className=' bg-gradient-to-r md:w-[60%] rounded-[1em] p-5 md:shadow-2xl shadow-green-500 '>
      <h2 className=' text-center text-2xl font-bold m-3'>Course Contents</h2>
      
      <ol >
        {(contentDetails.contents||[]).map((moduleName, index)=>(

            <li className='bg-gradient-to-r from-gray-800 rounded-xl even:from-slate-900 shadow-md hover:scale-105' key={index}>
              <div className='flex justify-between p-3 m-5 cursor-pointer flex-wrap' onClick={()=> toggleModuleVisibility(index)}>
                <h1 className='inline-block w-[70%]'>{Object.keys(moduleName)}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>

          
          <ul className={`${
        visibleModules[index] ? 'opacity-100 max-h-[1000px] transition-all duration-300 ease-in-out' : 'opacity-0 max-h-0 min-h-0 scale-0 overflow-hidden transition-all duration-300 ease-in-out'
      }`}>
            {moduleName[Object.keys(moduleName)[0]].map((topics, jIndex)=>(
              <li className='list-disc pl-14 p-5 list-inside odd:bg-gradient-to-r from-gray-800 even:bg-slate-900 rounded-xl' key={jIndex}>{topics}</li>
            ))}
          </ul>
          </li>
        ))}
      </ol>
    </div>
  </div>
  )
}

export default PerformanceTracker