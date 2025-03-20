import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Registration() {
    const [datas, setData] = useState({
        username: "", email: "", password: "", name: ""
    });
    const nav=useNavigate()
    

    const handleRegister = async (e) => {
        e.preventDefault();        

        try {
          
            const response = await axios.post('http://localhost:3000/api/auth/register', {
                username: datas.username,
                email: datas.email,
                password: datas.password,
                name: datas.name
            });
            console.log(response);
            

            if (response.data.success) {
                toast.success(response.data.message);
                nav('/')
            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <form onSubmit={handleRegister} className='border w-1/3 flex gap-2 flex-col justify-center shadow-2xl rounded-2xl p-4'>
                <h1 className='text-2xl text-center py-4'>Register</h1>
                <input type="text" placeholder='Enter username' value={datas.username} 
                    onChange={(e) => setData({ ...datas, username: e.target.value })} required
                    className='px-3 py-2 shadow outline-1 bg-slate-50 rounded-full w-full' />
                <input type="email" placeholder='Enter email' value={datas.email} 
                    onChange={(e) => setData({ ...datas, email: e.target.value })} required
                    className='px-3 py-2 shadow outline-1 bg-slate-50 rounded-full w-full' />
                <input type="text" placeholder='Enter name' value={datas.name} 
                    onChange={(e) => setData({ ...datas, name: e.target.value })} required
                    className='px-3 py-2 shadow outline-1 bg-slate-50 rounded-full w-full' />
                <input type="password" placeholder='Enter password' value={datas.password} 
                    onChange={(e) => setData({ ...datas, password: e.target.value })} required
                    className='px-3 py-2 shadow outline-1 bg-slate-50 rounded-full w-full' />
                <div className='flex justify-between'>
                    <Link className='text-blue-800' to={'/'}>Already have an account?</Link>
                    <button type='submit' className='px-3 py-2 text-sm text-white bg-orange-600 rounded-full'>Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Registration;
