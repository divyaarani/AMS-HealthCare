import React, { useState } from 'react'

export default function ContactUs() {
  const[input,setInput]=useState('')
  const[textarea,setTextarea]=useState('')
  const handleSubmit=(e)=>{
    setInput(e.target.value)
    setTextarea(e.target.value)
  }
  return (
    <div className='conCard'>
      <h1 id='conh1'> How Can We Help You?</h1>
      <div className='con-container'>
        <h2 className='con-h2'>If you are a paitent/Doctor or want to Partner with us</h2>
        <h3 className='con-h2'>Contact our customer support team for your queries</h3>
        <hr/>
        <img/>
        <p style={{color:'black'}}>Email us at</p>
        <h3 style={{color:'seagreen'}}>Email: digitalquery@healthcare.com</h3>
        <hr/>
        <img/>
        <p style={{color:'black'}}>or Whatsapp us at</p>
        <h3 style={{color:'seagreen'}}>+91 9818000001</h3>
        <hr/>
        <img/>
        <p style={{color:'black'}}>or Call us between 9am to 8pm, Mon to Sun at</p>
        <h3 style={{color:'seagreen'}}>(040)-44415555</h3>
        <hr/>
        <h3>or Fill in the form given below.</h3>
        <form className='conForm'>
            <label>Name: </label>
            <input className='conInp' type='text'value={input} placeholder='First Name' required/>           
            <input className='conInp' type='text'value={input} placeholder='Last Name'/><br/>
            <label>Mobile number:</label>
            <input className='conInp' type='number'value={input} placeholder='Your Mobile Number' required/>
            <label>Email: </label>
            <input className='conInp' type='email'value={input} placeholder='Your Email ID' required/><br/>
            <label>How can we Help you</label><br/>
            <textarea className='conInp' type='text' value={textarea} placeholder='Ask your Question' required/><br/>

            <button id='con-btn' type='submit'onSubmit={handleSubmit}>Submit</button>

        </form>

      </div>
    </div>
  )
}
