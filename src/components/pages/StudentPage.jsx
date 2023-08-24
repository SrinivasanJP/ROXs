import React from 'react'
import { auth } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'

function StudentPage() {
    const navigate = useNavigate()
  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()}>
            <button onClick={()=> {
                auth.signOut().then(data=>{
                    navigate('/')
                })
            }}>Sign Out</button>
        </form>
    </div>
  )
}

export default StudentPage