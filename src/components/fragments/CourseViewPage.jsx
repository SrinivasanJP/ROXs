import React, { useEffect, useState } from 'react'
import { auth, db } from '../../config/firebase'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { darkColors } from '../../config/styleClass'
import TopNav from '../TopNav'
import TutorCard from '../TutorCard'
function CourseViewPage({wideBar, setFragment, id}) {  

  const [courseDetails,setCourseDetails] = useState({})
  const [contentDetails, setContentDetails] = useState({})
  const [registerText, setRegisterText] = useState("Register")
  const [tutorDetails, setTutorDetails] = useState({})

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
    useEffect(()=>{
      const tutorDetails = async ()=>{
        const detailsRef = doc(db,"courses","wtw2301","tutorDetails","Admin")
        const detailsSnap = await getDoc(detailsRef)
        setTutorDetails(detailsSnap.data())
        }
        tutorDetails()
    },[])
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
  const handleRegister = async()=>{
    const docRef = doc(db, "courses",id,"registeredStudents", auth.currentUser.uid)
    await setDoc(docRef,{paid:false}).then(async()=>{
      const userRef = doc(db, "user", auth.currentUser.uid,"registeredCourses",id)
      await setDoc(userRef,{register:true}).then(()=>{
        setRegFlag(true)
        setFragment(["performanceTracker", id])
      }).catch((err)=>{
        alert(err)
      })
    })
    .catch((err)=>{
      alert(err)
    })
  }
  const RegisterBtn = ()=>(
    <div role='button' onClick={regFlag?()=>{
      alert("Already Registered")
    }:()=>handleRegister()} className={regFlag?"bg-slate-800 text-gray-100 cursor-not-allowed font-bold m-5 text-xl rounded-xl p-3 h-[2.5em] text-center md:w-[50%]":"bg-slate-100 text-gray-900 font-bold m-5 text-xl rounded-xl p-3 cursor-pointer h-[2.5em] text-center md:w-[50%]"}>
        {regFlag?<h1>Registered</h1>: <h1>Register</h1>}
      </div>
  )
  const CourseIncludes = ()=>(
    <div  className='mt-5 pb-[6em]  md:w-[70%] p-5'>
      <h1 className='bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-xl font-bold mb-5 leading-[1.2] tracking-tighter text-transparent  sm:text-[2rem] text-center sm:leading-[4.75rem]'>All you want to know</h1>
      <table className=' table-auto mx-auto'>
        <tr>
          <td className='p-5 w-[40%]'>Workshop Starts from</td>
          <td className='p-5 w-[40%]'>{courseDetails?.includes?.startsFrom}</td>
        </tr>
        <tr>
          <td className='p-5 w-[40%]'>Workshop Timing</td>
          <td className='p-5 w-[40%]'>{courseDetails?.includes?.timing}</td>
        </tr>
        <tr>
          <td className='p-5 w-[40%]'>Classes during</td>
          <td className='p-5 w-[40%]'>{courseDetails?.includes?.classes}</td>
        </tr>
        <tr>
          <td className='p-5 w-[40%]'>Course Language</td>
          <td className='p-5 w-[40%]'>{courseDetails?.includes?.language}</td>
        </tr>
        <tr>
          <td className='p-5 w-[40%]'>Lecture hours</td>
          <td className='p-5 w-[40%]'>{courseDetails?.includes?.lecturehours}</td>
        </tr>
        <tr>
          <td className='p-5 w-[40%]'>Assessments submission</td>
          <td className='p-5 w-[40%]'>{courseDetails?.includes?.assessments}</td>
        </tr>
        <tr>
          <td className='p-5 w-[40%]'>Materials assessble </td>
          <td className='p-5 w-[40%]'>{courseDetails?.includes?.materials}</td>
        </tr>
        <tr>
          <td className='p-5 w-[40%]'>Technical Requirement </td>
          <td className='p-5 w-[40%]'>{courseDetails?.includes?.technicalRequirement}</td>
        </tr>
        <tr>
          <td className='p-5 w-[40%]'>Final Project</td>
          <td className='p-5 w-[40%]'>Portfolio website for your profile</td>
        </tr>
        <tr>
          <td className='p-5 w-[40%]'>Further Details contact tutor</td>
          <td className='p-5 w-[40%]'>{courseDetails?.author}</td>
        </tr>
      </table>
    </div>
  )

  

  return (

    <div className={wideBar?darkColors["mainD"]+" md:h-full blur-sm md:filter-none md:ml-[12em]":darkColors["mainD"]+" md:h-full"}>
      <TopNav fragmentName={"ROXs Academy"}/>
      {
        regFlag && (
          <div className=' mt-20 text-orange-400'>
            <p>You already registerd this course, check out Performance Tab </p>
          </div>
        )
      }
      <div className=' flex flex-col justify-center items-center mt-10 md:w-[70%]  p-5'>
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
      <Requirements />
      <CourseIncludes />
      <div className=' mb-32 sm:mb-14'>
            <h1 className='bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-xl font-bold mb-5 leading-[1.2] tracking-tighter text-transparent  sm:text-[2rem] text-center sm:leading-[4.75rem]'>Tutor Contact</h1>
            <TutorCard tutorDetails={tutorDetails}/>

          </div>

      <div className='w-[95%] fixed bottom-0 md:flex md:justify-center md:items-center bg-gradient-to-r from-gray-900 backdrop-blur-sm'>
          <h1 className='hidden md:block w-[40%] text-center font-extrabold text-2xl '>{courseDetails.Title}</h1>
          <p className='text-center m-3 text-xl font-semibold'>{"Just Rs."+courseDetails.amount+".00"}</p>
          <RegisterBtn id={id}/>
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

 

export default CourseViewPage