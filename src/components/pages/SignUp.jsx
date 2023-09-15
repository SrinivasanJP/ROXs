import React, { useState } from 'react'
import {FaUser} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import SignUPSVG from './../../assets/Auth/Forms-amico.svg'
import { auth } from './../../config/firebase'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
const SignUp = ({setPage})=> {
  const [signUp,setSignUp] = useState(false);
  
const createNewUser = async (email, password) =>{
  setSignUp(true)
  await createUserWithEmailAndPassword(auth, email, password).then((user)=>{
    sendEmailVerification(auth.currentUser).then(()=>{
      alert("Verify your email check your inbox")
      auth.signOut()
      setPage("login")
    })
  }).catch(e=>{
    alert(e.message.slice(22,-2))
    setSignUp(false)
  })
}

  const [passwordVisibility, setPasswordVisibility] = useState("password")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className=" bg-[#0c1015] h-screen  flex justify-center items-center">
      <div className=" shadow-gray-400 shadow-inner w-[90%] rounded-2xl flex flex-wrap md:p-10 p-2">
        <img src={SignUPSVG} alt="Login Svg" className="w-1/2 p-5 hidden md:block" />
        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
          <h1 className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-transparent font-extrabold font text-3xl text-left mb-10">Sign up</h1>
          <form className='mt-5' onSubmit={(e)=>{return e.preventDefault()}}>
           
            <label htmlFor="uname" className="absolute pt-4 pl-2"><FaUser/></label>
            <input type="text" name="uname" id="uname" placeholder="Enter your Email ID" title="Username" className="border-b-2 w-full pl-8 p-3 mb-6 bg-slate-100 rounded-2xl shadow-sm"
            onChange={(e)=> setEmail(e.target.value)}/>
            
            <label htmlFor="uname" className="absolute pt-4 pl-2 block"><BsFillShieldLockFill/></label>
            <input type={passwordVisibility} name="password" id="password" placeholder="Enter your password" title="Password" className="border-b-2 w-full pl-8 p-3 bg-stone-100 rounded-2xl shadow-sm"
            onChange={(e)=> setPassword(e.target.value)}/>
            <input type="checkbox" name="save" id="save" className='inline-block mt-5'
            />
            <label htmlFor="save" className='mx-2 text-white'>Remember me</label>
            <a onClick={()=>setPage("login")} className='block mt-5 underline font-mono cursor-pointer text-white'>back to login</a>
            <button className="inline-flex items-center px-4 justify-center py-2 mt-5 font-bold leading-6 text-sm shadow rounded-md bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] text-gray-900 min-w-[7em] transition ease-in-out duration-150" onClick={()=>createNewUser(email, password)}>
            <svg className={signUp?"animate-spin -ml-1 mr-3 h-5 w-5 text-white":"hidden"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>{signUp?"Processing...":"Sign Up"}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp