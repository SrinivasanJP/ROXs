import React, { useEffect, useState } from 'react'
import { auth, db } from '../../config/firebase'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { darkColors } from '../../config/styleClass'
import TopNav from '../TopNav'
import QRCode from 'react-qr-code'
import TutorCard from '../TutorCard.jsx'
function PerformanceTracker({wideBar, id, setFragment}) {

  const [courseDetails,setCourseDetails] = useState({})
  const [contentDetails, setContentDetails] = useState({})
  const [tutorFolder, setTutorFolder] = useState({})
  const [tutorDetails, setTutorDetails] = useState({})

  const [paid, setpaid] = useState(false)
  const handlePayment = ()=>{
    document.location.href(`upi://pay?pa=${tutorDetails.upi}&pn=${tutorDetails.Name}&cu=INR&am=${tutorDetails.am}&tn=payment for ${courseDetails.Title}`)
  }

  useEffect(()=>{
    const tutorDetails = async ()=>{
      const detailsRef = doc(db,"courses","wtw2301","tutorDetails","Admin")
      const detailsSnap = await getDoc(detailsRef)
      setTutorDetails(detailsSnap.data())
      }
      tutorDetails()
  },[])

  useEffect(()=>{
    const fetchTutorFolder = async ()=>{

      if(paid){
      const docRef = doc(db, "courses", id, "contentDetails", "tutorFolder");
      const docSnap = await getDoc(docRef)
      setTutorFolder(docSnap.data())
      }
    }
    fetchTutorFolder()
  },[paid])


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
        if(paid){
        try{
        const contentsRef = doc(db, "courses", id, "contentDetails","includes");
        const contentsSnap = await getDoc(contentsRef);
        if(contentsSnap.exists()){
         setContentDetails(contentsSnap.data())
        }else{
         alert("Document not found error")
        }}catch(err){
        }
      }
      })();
    },[paid]);
    useEffect(()=>{
      (async()=>{
        try{
        const contentsRef = doc(db, "courses", id, "registeredStudents",auth.currentUser.uid);
        const contentsSnap = await getDoc(contentsRef);
        if(contentsSnap.exists()){
         setpaid(contentsSnap.data().paid)
        }else{
         setpaid(false)
        }}catch(err){
          setpaid(false)
        }
      })();

    },[])

  const [visibleModules, setVisibleModules] = useState([]);

  const toggleModuleVisibility = (index) => {
    const newVisibleModules = [...visibleModules];
    newVisibleModules[index] = !newVisibleModules[index];
    setVisibleModules(newVisibleModules);
  };
  const Task = ()=>
  paid&&(
    <div className=' bg-gray-900 p-5 rounded-[1em] md:w-[60%] pb-10 mt-10'>
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
        { tutorFolder.tasks?.length<=0?(
          <tr>
            <td colSpan={4} className='text-center'>No tasks assigned yet</td>
          </tr>
        ):tutorFolder.tasks?.map((task, index)=>(
          <tr>
            <td className='text-center'>{index + 1}</td>
            <td>{task.taskDescription}</td>
            <td><a href={task.submissionLink}>Click Here</a></td>
            <td className='text-center'>{task.status}</td>
          </tr>
           ))
          
          }
        </tbody>
      </table>

    </div>
  )
  const Course_Materials = ()=>
  paid &&(
    <div className=' bg-gray-900 p-5 rounded-[1em] md:w-[60%] pb-10'>
      <h1 className=' text-center text-xl font-bold'>Course Materials</h1>
      <table className='mt-8 table-auto w-full'>
        <thead>
          <tr className=' bg-slate-800'>
            <th className=' w-[10%]'>S.No</th>
            <th className=' w-[50%]'>Materials</th>
            <th className=' w-[20%]'>Download Link</th>
          </tr>
        </thead>
        <tbody>
          { tutorFolder.materials?.length<=0?(<tr>
            <td colSpan={3} className=' text-center'>No materials uploaded yet</td></tr>):tutorFolder.materials?.map((material, index)=>(
          <tr>
            <td className='text-center'>{index+1}</td>
            <td>{material.mDescription}</td>
            <td><a href={material.mLink} target="_blank">Click here</a></td>
          </tr>
          ))
          
          }
        </tbody>
      </table>

    </div>
  )
  const Schedule = ()=>
    paid &&(
    <div className=' bg-gray-900 p-5 rounded-[1em] md:w-[60%] pb-10'>
      <h1 className=' text-center text-xl font-bold'>Schedule</h1>
      <table className='mt-8 table-auto w-full'>
        <thead>
          <tr className=' bg-slate-800'>
            <th className=' w-[10%]'>Module No.</th>
            <th className=' w-[50%]'>Title</th>
            <th className=' w-[40%]'>Date</th>
          </tr>
        </thead>
        <tbody>
          { contentDetails.contents?.length<=0?(<tr>
            <td colSpan={3} className=' text-center'>No materials uploaded yet</td></tr>):contentDetails.contents?.map((contents, i)=>(
              <tr key={i}>
                <td>{i+1}</td>
                <td>{Object.keys(contents)}</td>
                <td className='text-center'>{contentDetails.progress[i]}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
  const wideD =  wideBar?darkColors["mainD"]+" h-full blur-sm md:filter-none md:ml-[12em]":darkColors["mainD"]+" h-full"

  return (
    <div className={paid?wideD:wideD+" h-screen"}>
    <TopNav fragmentName={"ROXs Academy"}/>
    <div className={paid?" blur-0 flex flex-col justify-center items-center my-20 md:w-[70%]  p-5":" blur-xl flex flex-col justify-center items-center my-20 md:w-[70%]  p-5"}>
      <img src={courseDetails.thumbnail} alt="thumbnail for course" className=' w-[35em] my-5 rounded-[1em] shadow-2xl shadow-green-500'/>
      <h1 className=' font-extrabold text-2xl'>{courseDetails.Title}</h1>  
    </div>
          <Schedule/>
         <Course_Materials/>
          <Task />
    
    {
      !paid &&(
        <div className='  absolute top-40 p-10  max-w-screen max-h-screen h-screen flex flex-col items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>

          <h1 className="font-extrabold text-3xl">Payment is not done yet</h1>
          <p>It is offline Course so contact the Tutor to make payment</p>
          <p className='text-center mt-5 text-orange-500'>Note* once the payment is done contact tutor with the screenshot </p>
          <button className="inline-flex items-center px-4 justify-center py-2 mt-5 font-bold leading-6 text-sm shadow rounded-md bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] text-gray-900 min-w-[7em] transition ease-in-out duration-150 md:hidden" onClick={handlePayment}>Pay now</button>
          <p className='bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-xl font-bold mt-10 leading-[1.2] tracking-tighter text-transparent sm:text-center sm:text-[2rem] sm:leading-[4.75rem] lg:text-left' >Scan Me to Pay</p>
          <QRCode 
            title="Pay now"
            value = {`upi://pay?pa=${tutorDetails.upi}&pn=${tutorDetails.Name}&cu=INR&am=${tutorDetails.am}&tn=payment for ${courseDetails.Title} ${auth.currentUser.uid}`}
            size={200}
            className=' mt-5'
          />
          <div className='mt-10'>
            <h1 className='bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-xl font-bold mb-5 leading-[1.2] tracking-tighter text-transparent  sm:text-[2rem] text-center sm:leading-[4.75rem]'>Tutor Contact</h1>
            <TutorCard tutorDetails={tutorDetails}/>

          </div>

          
        </div>
      )
    }
    {
      paid && (
        <div className=' bg-gradient-to-r md:w-[60%] rounded-[1em] p-5 md:shadow-2xl shadow-green-500 '>
      <h2 className=' text-center text-2xl font-bold m-3'>Course Contents</h2>
      
      <ol >
        {(contentDetails?.contents||[]).map((moduleName, index)=>(

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
      )
    }
    {
      paid&&(
        <div className='my-10 flex flex-col'>
          <div className='mb-10 w-full bg-gray-800 rounded-xl p-5'>
            <a href="https://www.jdoodle.com/h/38E" target="_blank" className=' w-full inline-block text-center font-bold'>Run your code</a>
            </div>
          <a href="https://firebasestorage.googleapis.com/v0/b/roxsacademy.appspot.com/o/Curriculum%2FWTW2301.pdf?alt=media&token=32bac3ed-5fd4-4f12-83b9-7c3b2966bfd4" className=' inline-block mb-10' target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 inline-block mr-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
</svg>


            Curriculum <span className=' uppercase font-bold'>{id}</span> </a>
            
        </div>
      )
    }
    {
      paid&&(
        <TutorCard tutorDetails={tutorDetails}/>
      )
    }
    
   
    
  </div>
  )
}

export default PerformanceTracker