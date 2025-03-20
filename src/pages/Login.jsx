import axios from 'axios'
import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
    const [users, setUsers] = useState({
        email: "", password: ""
    })
    const nav = useNavigate()

    const handlelogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                email: users.email,
                password: users.password
            })
            console.log(response.data);

            if (response.data.success === true) {
                toast.success("login successfull")
                localStorage.setItem('username', response.data.user.username)
                localStorage.setItem('date', response.data.user.date)
                localStorage.setItem('email', response.data.user.email)
                localStorage.setItem('token', response.data.token)
                nav('/profile')
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }

        


    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <form onSubmit={handlelogin} className='border w-1/3 flex gap-5 flex-col justify-center shadow-2xl rounded-2xl p-4'>
                <h1 className='text-2xl text-center py-4'>Login Form</h1>
                <input title='enter your email' type="email" onChange={(e) => { setUsers({ ...users, email: e.target.value }) }} placeholder='enter email' required className='px-3 py-2 shadow  outline-1 bg-slate-50 rounded-full w-full' />
                <input title='enter your secret password' type="password" onChange={(e) => { setUsers({ ...users, password: e.target.value }) }} placeholder='enter password' required className='px-3 py-2 shadow  outline-1 bg-slate-50 rounded-full w-full' />
                <div className='flex justify-between'>
                    <Link className='text-blue-300' to={'/reg'}>new here  ..?</Link>
                    <button title='click and enjoy' type='submit' className='px-3 py-2 rounded-full bg-green-500 '>Login</button>
                </div>

            </form>

        </div>
    )
}

export default Login
