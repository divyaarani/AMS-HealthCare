import React from 'react'

export default function NavBar1() {
  return (
    <nav className='header-nav1'>
        <div>
        <input id='inp1' type="text" placeholder='Search here'/>
       <button id='button-nav1'>Search</button> 
        </div>       
       <p style={{color:'seagreen'}}>Email: digitalquery@healthcare.com</p>
    </nav>
  )
}