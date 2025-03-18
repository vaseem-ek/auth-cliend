import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [dates,setDates]=useState('')
    const nav=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setName(localStorage.getItem('username'))
            setDates(localStorage.getItem('date'))
            setEmail(localStorage.getItem('email'))
        }
        
    },[localStorage.getItem('token')])
    const logout = () => {
        localStorage.clear()
        nav('/')
    }
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='border flex flex-col gap-5 text-3xl p-5 rounded w-1/2'>
      <h2>name: <span className='text-blue-600'>{name}</span></h2>
      <h2>date: <span className='text-blue-600'>{dates}</span></h2>
      <h2>email: <span className='text-blue-600'>{email}</span></h2>
      <button onClick={logout} className='bg-red-700 px-3 py-1 rounded-full text-sm text-white p-2'>LogOut</button>
      </div>
    </div>
  )
}

export default Profile
