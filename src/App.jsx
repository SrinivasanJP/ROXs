import React, { useState } from 'react'
import Home from './components/pages/Home.jsx'
import Courses from './components/pages/Courses'
import Login from './components/pages/Login'
import Signup from './components/pages/SignUp'
import StudentPage from './components/pages/StudentPage.jsx'
import BasicDetails from './components/pages/BasicDetails.jsx'
import CourseViewPage from './components/fragments/CourseViewPage.jsx'
import { auth } from './config/firebase.js'
 function App(){
  const [page, setPage] = useState("home")
  auth.onAuthStateChanged((user)=>{
    if(user!=null&&user.emailVerified){
      setPage("student")
    }
  })
  
  
  const renderPage = ()=>{
    switch (page){
      case "home":{
        return (<Home setPage={setPage}/>)
      }
      case "login":{
        return (<Login setPage={setPage}/>)
      }
      case "signup":{
        return (<Signup setPage={setPage}/>)
      }
      case "courses":{
        return (<Courses setPage={setPage}/>)
      }
      case "student":{
        return (<StudentPage setPage={setPage}/>)
      }
      case "initialization":{
        return (<BasicDetails setPage={setPage}/>)
      }
    }
  }
  return (
    <div>
      {renderPage()}
    </div>
  )
}

export default App
