import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function BookanAppointment() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [select, setSelect] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const [list, setList] = useState([])

    const [popup, setPopup] = useState(false)
    const [name1, setName1] = useState('')
    const [phone1, setPhone1] = useState('')
    const [email1, setEmail1] = useState('')
    const [select1, setSelect1] = useState('')
    const [date1, setDate1] = useState('')
    const [time1, setTime1] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/Appointments')
            .then(res => {setList(res.data)})
            .catch(err => {console.log(err)})
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Appointments/post', { name: name, phone: phone, email: email, doctor: select, date: date, time: time })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const handleDelete = (deletedata) => {
        axios.delete(`http://localhost:3001/Appointments/${deletedata}`)
            .then(res => {
                console.log(res)
                alert("Deleted Successfully")
            })
            .catch(err => console.log(err))
    }

    //Update operation
    const OpenPopup = (data) => {
        setPopup(true)
        setName1(data.name)
        setPhone1(data.phone)
        setEmail1(data.email)
        setSelect1(data.select)
        setDate1(data.date)
        setTime1(data.time)
    }
    const handleUpdate =(id)=> {
        axios.put(`http://localhost:3001/Appointments/${id}`, { name: name1, phone: phone1, email: email1,  doctor:select1, date: date1, time: time1 })
            .then(res=>{ console.log(res) })
            .catch(err=>{console.log(err)})
    }
    return (
        <div>   
            <div>
                <form className='Aptcrd' onSubmit={handleSubmit}>
                    <h1 className='apth1'>Book an Appointment</h1>
                    <label className='apt-labe'>Your Name</label>
                    <input id='inp1' type='text' value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/><br />
                    <label className='apt-labe'>Phone</label>
                    <input id='inp1' type='number' value={phone} placeholder='Enter Phone number' onChange={(e)=>setPhone(e.target.value)}/><br />
                    <label className='apt-labe'>Email</label>
                    <input id='inp1' type='email' value={email} placeholder='Enter Email ID' onChange={(e)=>setEmail(e.target.value)}/><br /><br />
                    <select id='inp1' value={select} onChange={(e)=>setSelect(e.target.value)}>
                        <option>Select your Doctor</option>
                        <option>Doctor 1</option>
                        <option>Doctor 2</option>
                        <option>Doctor 3</option>
                        <option>Doctor 4</option>
                        <option>Doctor 5</option>
                    </select>
                    <label className='apt-labe'>Select Date</label>
                    <input id='inp1' type='date' value={date} onChange={(e)=>setDate(e.target.value)} />
                    <label className='apt-labe'>select time</label>
                    <input id='inp1' type='time' value={time} onChange={(e)=>setTime(e.target.value)} />
                    <button id='apt-btn' type='submit'>Submit</button>
                </form>
            </div>
            <div>
                <h1 className='conh1'>Appointment List</h1>
            <table className="apt-tbl">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='apt-tbody'>
                    {list?.map(x=>(<tr key={x.id}>
                        <td>{x.name}</td>
                        <td>{x.phone}</td>
                        <td>{x.email}</td>
                        <td>{x.select}</td>
                        <td>{x.date}</td>
                        <td>{x.time}</td>
                        <td>
                            <button id="apt-btn" onClick={() => {OpenPopup(x)}}>Update</button>
                            <button id="apt-btn" onClick={() => {handleDelete(x.name)}}>Delete</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>
            </div>
            {popup &&
                <div className='update-popup'>
                    <div className='apt'>
                        
                        <form className='Aptcrd' onSubmit={handleUpdate}>
                        <button className='close-btn' onClick={()=>setPopup(false)}>X</button>
                    <h1 className='apth1'>Update Appointments</h1>
                    <label className='apt-labe'>Your Name</label>
                    <input id='inp1' type='text' value={name1} placeholder='Enter Name' onChange={(e) => setName1(e.target.value)} /><br />
                    <label className='apt-labe'>Phone</label>
                    <input id='inp1' type='number' value={phone1} placeholder='Enter Phone number' onChange={(e) => setPhone1(e.target.value)} /><br />
                    <label className='apt-labe'>Email</label>
                    <input id='inp1' type='email' value={email1} placeholder='Enter Email ID' onChange={(e) => setEmail1(e.target.value)} /><br /><br />
                    <select id='inp1'value={select1} onChange={(e) => setSelect1(e.target.value)}>
                        <option>Select your Doctor</option>
                        <option>Doctor 1</option>
                        <option>Doctor 2</option>
                        <option>Doctor 3</option>
                        <option>Doctor 4</option>
                        <option>Doctor 5</option>
                    </select>
                    <label className='apt-labe'>Select Date</label>
                    <input id='inp1' type='date' value={date1} onChange={(e) => setDate1(e.target.value)} />
                    <label className='apt-labe'>select time</label>
                    <input id='inp1' type='time' value={time1} onChange={(e) => setTime1(e.target.value)} />
                    <button id='apt-btn' type='submit' >Update</button>
                </form>
                    </div>
                </div>}
        </div>
    )
}
