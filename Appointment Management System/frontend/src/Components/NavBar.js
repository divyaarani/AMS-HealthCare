import React from 'react'
import { NavLink } from 'react-router-dom'
// import { useAuth } from './auth'
import logo from './Images/Green & Blue Medical Center Logo (2).png'

export default function NavBar() {
    // const auth=useAuth()
  return (
    <nav className='header-nav'>
        <div className='logo'>
            <img src={logo} alt='logo' width={80}/>       
        </div>
        <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/OurDoctors'>Our Doctors</NavLink>
        <NavLink to='/ContactUs'>Contact Us</NavLink>
        <NavLink to='/Services'>Services</NavLink>
        <button id='button-nav' on>Book an Appointment</button>      
        <NavLink to='/Signup'>Sign Up</NavLink>
        <NavLink to='/Signin'>Sign In</NavLink>  
    
    </div> 
    </nav>
  )
}
