import React, { useState } from 'react'
import {FaUser} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import LoginSVG from './../../assets/Auth/Login-amico.svg'
import { auth } from './../../config/firebase'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { db } from './../../config/firebase'
import {doc, getDoc} from "firebase/firestore"
function Login({setPage}) {
  const bufferBtn = (<button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Processing...
</button>)
  const [login, setLogin] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState("password")
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  auth.onAuthStateChanged(user=>{
    if(user && auth.currentUser.emailVerified){
      checkBasics()
    }
  })
  const checkBasics = async() =>{
    const docRef = doc(db, "user", auth?.currentUser?.uid);
    const docs = await getDoc(docRef);
    if(docs.exists()){
      setLogin(false)
      setPage("student")
    }else{
      setLogin(false)
      setPage("initialization")
    }
  }

  const onLoginClick = async () =>{
    setLogin(true)
   
    if(!login){
      
      try{
      await signInWithEmailAndPassword(auth, email, password).then(data=>{
        if(auth.currentUser?.emailVerified){
          checkBasics()
        }else{
          alert("Email not verified Yet, check you mail")
          setLogin(false)
        }
      })

    }catch(e){
      alert(e.message.slice(22,-2))
      setLogin(false)
    }
    }else{
      alert("We are working on it pleace wait...")
    }
  }


  return (
    <div className="bg-[#f6f6f6] h-screen  flex justify-center items-center">

      <div className="bg-[#fefefe] w-[90%]  rounded-2xl shadow-2xl flex flex-wrap md:p-10 p-2 ">
        <img src={LoginSVG} alt="Login Svg" className="w-1/2 p-5 hidden md:block" />
        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
          <h1 className="antialiased font-extrabold font text-3xl text-left mb-10">Login</h1>
          <form className='mt-5' onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="uname" className="absolute pt-4 pl-2"><FaUser/></label>
            <input type="text" name="uname" id="uname" placeholder="Enter your User name" title="Username" className="border-b-2 w-full pl-8 p-3 mb-6  bg-stone-100 rounded-2xl shadow-sm" onChange={(e) => setEmail(e.target.value)}/>
            
            <label htmlFor="uname" className="absolute pt-4 pl-2 block"><BsFillShieldLockFill/></label>
            <input type={passwordVisibility} name="password" id="password" placeholder="Enter your password" title="Password" className="border-b-2 w-full pl-8 p-3 bg-stone-100 rounded-2xl shadow-sm" onChange={(e) => setPassword(e.target.value)}/>
            <input type="checkbox" name="save" id="save" className='mt-5' />
            <label htmlFor="save" className='mx-2'>Remember me</label>
            <a onClick={()=>setPage("signup")} className='block mt-5 underline font-mono cursor-pointer'>Create an account</a>
            <button className="inline-flex items-center px-4 justify-center py-2 mt-5 font-bold leading-6 text-sm shadow rounded-md text-white bg-purple-500 min-w-[7em] transition ease-in-out duration-150" onClick={onLoginClick}>
            <svg className={login?"animate-spin -ml-1 mr-3 h-5 w-5 text-white":"hidden"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
              {login?"Processing...":"Login"}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login