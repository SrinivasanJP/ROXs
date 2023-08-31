import React, { useState } from 'react'
import Home from './components/pages/Home.jsx'
import {Route, Routes} from 'react-router-dom'
import Courses from './components/pages/Courses'
import Login from './components/pages/Login'
import Signup from './components/pages/SignUp'
import StudentPage from './components/pages/StudentPage.jsx'
import BasicDetails from './components/pages/BasicDetails.jsx'
import CourseViewPage from './components/fragments/CourseViewPage.jsx'

function App() {
  const [page, setPage] = useState("home")
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
      {/* <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/student' element={<StudentPage />}></Route>
        <Route path='/initialization' element={<BasicDetails />}></Route>
        <Route path='/courseView' element={<CourseViewPage/>}></Route>

      </Routes> */}
    </div>
  )
}

export default App
