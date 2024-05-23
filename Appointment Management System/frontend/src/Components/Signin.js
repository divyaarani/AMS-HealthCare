import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[userList,setUserList]=useState([])
    const[errorMessage,setErrorMessage]=useState('')
    // const auth=useAuth()
    const navigate=useNavigate()
    useEffect(()=>{
        axios.post('http://localhost:3001/auth/signin/user')
        .then(res=>setUserList(res.data))
    },[])
    const handleLogin=(e)=>{
        e.preventDefault()
        const user=userList.find(x=>x.email===email)
        if(user){
            if(user.password===password){
                // auth.Login(username)
                navigate('/')
            }
            else{
                setErrorMessage("Incorrect password")
            }
        }
        else{
            setErrorMessage("User not found")
        }
    }

  return (
    <div>
        <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label>Password:</label>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>

        <button type='submit'>Sign In</button>        
      </form>
      {errorMessage}
    </div>
  )
}
