import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    axios.post("http://localhost:3001/auth/signup", { username, email, password })
      .then(res => { console.log(res.data) })
      .catch(err => { console.log(err) })
    e.preventDefault()
    navigate('/Signin')
  }
  return (
    <div>      
      <form className='conForm' onSubmit={handleSubmit}>
        <div className='SUcontainer'>
        <h1 className='conh1'>Sign up/Registration form</h1><br/>
          <label >Name:</label>
          <input className='conInp' type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Name' required/><br />
          <label>Email:</label>
          <input className='conInp' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Id' required/><br />
          <label>Password:</label>
          <input className='conInp' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required/><br/>

          <div>
            <button className='con-btn' type="submit">Sign Up/Register</button> 
            {/* <button className='con-btn' type="button">Cancel</button> */}
          </div>
        </div>
      </form>
    </div>
  )
}
