import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const auth=useAuth()
    const navigate=useNavigate()
    const handleLogout=()=>{
        auth.logout()
        navigate('/')
    }
  return (
    <div>
      Welcome{auth.user}
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  )
}
