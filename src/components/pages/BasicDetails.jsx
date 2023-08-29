import React, { useState } from 'react';
import SettingSVG from '../../assets/svgs/personl_settings.svg'
import { auth } from '../../config/firebase';
import { db } from '../../config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
const StudentForm = () => {
  const [studentDetails, setStudentDetails] = useState({
    studentName: '',
    dob:'',
    gender: 'other',
    nationality: 'India',
    address: '',
    phoneNumber: '',
    email: auth?.currentUser?.email,
    schoolName: '',
    language: '',
    git: '',
    edu:'',
    about: ''
  });
  const input_box="border-b-2 w-full pl-8 p-3 mb-6  bg-stone-100 rounded-2xl shadow-sm"

  const navigate = useNavigate()
const handleSubmit = async(e)=>{
    e.preventDefault()
    const docRef = doc(db, "user", auth?.currentUser?.uid)
    await setDoc(docRef, studentDetails).then(res=>{
        navigate("/student")
    })

}

  return (
    <div className="bg-[#f6f6f6] flex justify-center items-center">
      <div className="bg-[#fefefe] w-[90%] my-[10%] rounded-2xl shadow-2xl flex flex-wrap md:p-10 p-2">
        <img src={SettingSVG} alt="Login Svg" className="w-1/2 p-5 hidden md:block" />
        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
          <h1 className="antialiased font-extrabold font text-3xl text-left mb-10">Enter Basic Details</h1>
          <form className='mt-5' onSubmit={(e)=> handleSubmit(e)}>
            <label htmlFor="uname" className="absolute pt-4 pl-2"></label>
            <input type="text" name="uname" id="uname" placeholder="Enter your Fullname" required title="Username" className={input_box} onChange ={(e) => setStudentDetails({...studentDetails, studentName:e.target.value})}/>
            <label htmlFor="dob">Select the date of Birth:</label>
      
            <input type="date" 
            name="dob" 
            id="dob"  
            required 
            title="dob" 
            className={input_box} 
            onChange={(e) => setStudentDetails({...studentDetails, dob:e.target.value})}/>
            <select name="gender" id="gender" className={input_box} required onChange={(e)=> setStudentDetails({...studentDetails, gender:e.target.value})}>
                <option value="">Choose your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <input type="text" 
            value={"India"} 
            name="nationality" 
            id="nationality" 
            placeholder="Enter your Nationality" 
            required 
            title="nationality" 
            className={input_box} 
            onChange={(e) => setStudentDetails({...studentDetails, nationality:e.target.value})}/>
            <input type="text" 
            name="schoolName" 
            id="schoolName" 
            placeholder="Enter your institution name" 
            required 
            title="institution" 
            className={input_box} 
            onChange={(e) => setStudentDetails({...studentDetails, schoolName:e.target.value})}/>
            <input type="text" 
            name="edu" 
            id="edu" 
            placeholder="Enter your Educational Background" 
            required 
            title="edu" 
            className={input_box} 
            onChange={(e) => setStudentDetails({...studentDetails, edu:e.target.value})}/>
            
            <input type="text"  
            name="lang" 
            id="lang" 
            placeholder="Preferred language" 
            required 
            title="lang" 
            className={input_box} 
            onChange={(e) => setStudentDetails({...studentDetails, language:e.target.value})}/>
            <textarea name="address" id="address" 
            className={input_box} placeholder='Enter your address' required onChange={(e)=>setStudentDetails({...studentDetails, address:e.target.value})}></textarea>
            <input type="tel" 
            min={10}
            max={10}
            name="mobile" 
            id="mobile" 
            placeholder="Enter your Mobile number" 
            required 
            title="mobile" 
            className={input_box} 
            onChange={(e) => setStudentDetails({...studentDetails, phoneNumber:e.target.value})}/>
            <input type="email" 
            name="email" 
            id="email" 
            placeholder="Enter your email"
            value={auth?.currentUser?.email} 
            required 
            title="email" 
            className={input_box} 
            onChange={(e) => setStudentDetails({...studentDetails, email:e.target.value})}/>
            <input type="text" 
            name="git" 
            id="git" 
            placeholder="Enter your GITHub handle" 
            title="git" 
            className={input_box} 
            onChange={(e) => setStudentDetails({...studentDetails, git:e.target.value})}/>
            <textarea name="" id="" 
            className={input_box} 
            placeholder='Something about you'
            onChange={(e) => setStudentDetails({...studentDetails, about:e.target.value})}></textarea>
            
           
            
            <button className="rounded-full border bg-purple-500 text-white font-bold px-5 py-1 mt-5 block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default StudentForm;
