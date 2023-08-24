import React from 'react'
import Home from './components/pages/Home.jsx'
import {Route, Routes} from 'react-router-dom'
import Navigation from './components/Navigation'
import Courses from './components/pages/Courses'
import Login from './components/pages/Login'
import Signup from './components/pages/SignUp'
import StudentPage from './components/pages/StudentPage.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/student' element={<StudentPage />}></Route>

      </Routes>
    </div>
  )
}

export default App
