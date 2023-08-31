import React, { useState, useEffect } from 'react'
import { auth, db } from '../../config/firebase'
import SideBar from '../SideBar'
import Dashboard from '../fragments/Dashboard'
import Courses from '../fragments/Courses'
import Profile from '../fragments/Profile'
import PerformanceST from '../fragments/PerformanceST'
import { doc, getDoc } from 'firebase/firestore'
import CourseViewPage from '../fragments/CourseViewPage'



function StudentPage() {
    const [fragment,setFragment] = useState("dashboard");
    const [wideBar, setWideBar] = useState(false);
    const [uID, setUID] = useState("");
    const [userData, setUserData] = useState({})
  
    useEffect(()=>{
    (async()=>{
      try{
      const docRef = doc(db, "user", uID);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        setUserData(docSnap.data());
      }
      else{
        console.log("NO doc found");
      }
    }catch(err){
      console.log("UID not loaded")
    }
    })();
    },[uID]);
    useEffect(()=>{
      auth.onAuthStateChanged((user) =>{
        if(user){
          setUID(user.uid)
        }else{
          console.log("Auth error")
        }
      })
    }, []);
    const renderFragment = () => {
        switch (fragment) {
          case "dashboard":
            return <Dashboard wideBar={wideBar} setWideBar={setWideBar}/>;
          case "profile":
            return <Profile wideBar={wideBar} userData={userData} setWideBar={setWideBar}/>;
          case "performance":
            return <PerformanceST wideBar={wideBar}/>;
          case "course":
            return <Courses wideBar={wideBar} setFragment={setFragment}/>
          default:
            return null;
        }
      };
  return (
    <div>
        <SideBar  wideBar ={wideBar} setWideBar={setWideBar}  setFragment={setFragment} />
        {renderFragment()}
    </div>
  )
}

export default StudentPage