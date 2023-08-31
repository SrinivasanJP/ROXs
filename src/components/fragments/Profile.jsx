import React, { useEffect } from 'react'
import man from '../../assets/svgs/man.png'
import woman from '../../assets/svgs/woman.png'
import {BiLogOutCircle} from 'react-icons/bi'
import {auth} from '../../config/firebase'
import { useNavigate } from 'react-router-dom'

function Profile({wideBar, userData, setWideBar}) {
  const imgDesign = "w-40 mt-5"
  const Card = "flex flex-col justify-center items-center bg-gray-800 w-[90%] rounded-xl mt-5"
  const mainD="ml-12 flex flex-col max-w-screen bg-gray-950 text-gray-100 items-center h-full md:h-screen transition-all duration-500"
  const labelText = "ml-5 mt-2 font-bold"
  const dataText = "mt-2 font-semibold"
  const buttonStyle = " bg-slate-100 text-gray-950 font-bold m-5 w-[90%] text-xl rounded-xl p-3 flex justify-center items-center cursor-pointer"

  const zoro = useNavigate()

  const logout = async ()=>{
    await auth.signOut()
    .then(()=>{
      zoro("/login")
    })
  }


  return (
    <div  className={wideBar?mainD+" blur-sm -z-10 md:filter-none md:ml-[12em]":mainD}>
      <h1 className='mt-5 font-extrabold text-2xl self-start ml-5'>Profile</h1>
      <div className={Card}>
      <img src={userData["gender"]=="male"?man:woman} alt="profile image" className={imgDesign+""} />
      <h1 className=' font-bold text-xl mt-3'>{userData["studentName"]}</h1>
      <h2 className=' font-semibold mt-2'>{userData["edu"]}</h2>
      <h2 className=' font-semibold mt-2 mb-5'>{userData["email"]}</h2>
      </div>
      <div className={Card}>
        <p className='m-3'>{userData["about"]}</p>
      </div>
      <div className={Card}>
        <div className="grid grid-cols-2 w-full m-5">
          <p className={labelText}>Name: </p>
          <h1 className={dataText}>{userData["studentName"]}</h1>
          <p className={labelText}>Mobile: </p>
          <h1 className={dataText}>{userData["phoneNumber"]}</h1>
          <p className={labelText}>Gender: </p>
          <h1 className={dataText}>{userData["gender"]}</h1>
          <p className={labelText}>Date of Birth: </p>
          <h1 className={dataText}>{userData["dob"]}</h1>
          <p className={labelText}>Language:</p>
          <h1 className={dataText}>{userData["language"]}</h1>
          <p className={labelText}>Institution:</p>
          <h1 className={dataText}>{userData["schoolName"]}</h1>
          <p className={labelText}>Address:</p>
          <h1 className={dataText}>{userData["address"]}</h1>
          <p className={labelText}>Nationality:</p>
          <h1 className={dataText}>{userData["nationality"]}</h1>
        </div>
      </div>
      <div role='button' onClick={logout} className={buttonStyle}>
        <BiLogOutCircle  className='mr-2 w-6 h-6'/>
        <h1>LOGOUT</h1>
      </div>
   
    </div>
  )
}

export default Profile