import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signin() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[userList,setUserList]=useState([])
    const[errorMessage,setErrorMessage]=useState('')
    // const auth=useAuth()
    const navigate=useNavigate()
    // useEffect(()=>{
    //     axios.post('http://localhost:3001/user/signin')
    //     .then(res=>setUserList(res.data))
    // },[])
    const handleLogin=(e)=>{
        e.preventDefault()
        axios.get('http://localhost:3001/user/signin')
        .then(res=>{setUserList(res.data);
        const user=userList.find(x=>x.email===email)
        if(res.status===400){
                navigate('/BookanAppointment')
        }
        else{
            setErrorMessage("User not found")
        }})
    }

  return (
    <div>
      <form className='SIform' onSubmit={handleLogin}>
          <h1 className='conh1'>Sign In/Log In</h1>
        <label className='SIlabe'>Email:</label>
        <input className='conInp' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email ID' required/><br/>
        <label className='SIlabe'>Password:</label>
        <input className='conInp' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' required/><br/>

        <button className='con-btn' type='submit'>Sign In</button>        
      </form>
      {errorMessage}
    </div>
  )
}
