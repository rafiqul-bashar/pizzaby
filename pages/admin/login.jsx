import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from "../../redux/adminSlice"

export default function Login() {
    const [username, setUsername] = React.useState(null)
    const [password, setPassword] = React.useState(null)
    const [error, setError] = React.useState(false)
    const router = useRouter()
    const dispatch = useDispatch()

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/login", {
                username,
                password,
            })
            console.log(res);
            if (res.status === 200) {
                dispatch(login(res.data))
                router.push("/admin");
            }
        } catch (err) {
            console.log(err);
            setError(true);
        }
    }

    return (
        <div className='h-auto  md:h-[calc(100vh-100px)] flex items-center justify-center'>
            <div className='flex flex-col'>
                <h1 className='font-semibold text-3xl text-center'>Admin Dashboard</h1>
                <input onChange={(e) => setUsername(e.target.value)} className="h-10 border-b-2 border-black focus:outline-none mb-5 my-6" type="text" placeholder='username' />
                <input onChange={(e) => setPassword(e.target.value)} className="h-10 border-b-2 border-black focus:outline-none mb-5 my-6" type="password" placeholder='password' />
                <button onClick={handleLogin} className='w-full p-1 text-white font-semibold bg-teal-500'>Login</button>
                {error && <span className='text-red-500 text-lg'>Wrong Credentials !</span>}
            </div>
        </div>
    )
}
