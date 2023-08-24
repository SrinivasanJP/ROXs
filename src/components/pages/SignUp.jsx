import React, { useState } from 'react'
import {FaUser} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import SignUPSVG from './../../assets/Auth/Forms-amico.svg'
import { auth } from './../../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const createNewUser = async (email, password) =>{
  await createUserWithEmailAndPassword(auth, email, password)
  console.log(`User created ${email}, ${password}`)
}

function SignUp() {
  const [passwordVisibility, setPasswordVisibility] = useState("password")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="bg-[#f6f6f6] h-screen  flex justify-center items-center">
      <div className="bg-[#fefefe] w-[90%] mx-[10%] rounded-2xl shadow-2xl flex flex-wrap md:p-10 p-2">
        <img src={SignUPSVG} alt="Login Svg" className="w-1/2 p-5 hidden md:block" />
        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
          <h1 className="antialiased font-extrabold font text-3xl text-left mb-10">Sign up</h1>
          <form className='mt-5' onSubmit={(e)=>{return e.preventDefault()}}>
           
            <label htmlFor="uname" className="absolute pt-4 pl-2"><FaUser/></label>
            <input type="text" name="uname" id="uname" placeholder="Enter your Email ID" title="Username" className="border-b-2 w-full pl-8 p-3 mb-6 bg-slate-100 rounded-2xl shadow-sm"
            onChange={(e)=> setEmail(e.target.value)}/>
            
            <label htmlFor="uname" className="absolute pt-4 pl-2 block"><BsFillShieldLockFill/></label>
            <input type={passwordVisibility} name="password" id="password" placeholder="Enter your password" title="Password" className="border-b-2 w-full pl-8 p-3 bg-stone-100 rounded-2xl shadow-sm"
            onChange={(e)=> setPassword(e.target.value)}/>
            <input type="checkbox" name="save" id="save" className='inline-block mt-5'
            />
            <label htmlFor="save" className='mx-2'>Remember me</label>
            <a href="\login" className='block mt-5 underline font-mono'>back to login</a>
            <button className="rounded-full border bg-cyan-500 text-white font-bold px-5 py-1 mt-5 block" onClick={()=>createNewUser(email, password)}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp