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
  }
  return (
    <div>
      <h1>Sign Up/Registration form</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <label>Name:</label>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Name' required /><br />
          <label>Email:</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Id' required /><br />
          <label>Password:</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required /><br />

          <div className="clearfix">
            <button type="submit">Sign Up/Register</button>
            <button type="button">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}
