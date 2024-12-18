import React, { useState } from 'react'
import { Eye, EyeClosed, KeyRound, UserRound } from 'lucide-react'

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState("password")


  return (
    <div className=' max-w-screen-sm mx-auto border border-slate-500/15 rounded-lg flex flex-col items-center space-y-4 '>
      <h1 className=''>Welcome Back</h1>
      <p> Login to you&apos;re account</p>
      <form className=''>
        <div className=' flex gap-2 border border-slate-500/10 w-64 rounded-full px-4 '>
          <UserRound size='10' />
          <input value={formData.username} name='username' placeholder='Username' type='text'
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className='focus:outline-none bg-transparent px-4'
          />
        </div>
        <div className=' flex gap-2 border border-slate-500/10 w-64 rounded-full justify-between px-4 '>
          <KeyRound className='transform rotate-12' size='10' />
          <input value={formData.password} placeholder='Password' type={showPassword}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className='focus:outline-none bg-transparent '
          />
          {showPassword === 'password' ?
            <Eye onClick={() => setShowPassword('text')} /> :
            <EyeClosed onClick={() => setShowPassword('password')} />}
        </div>
        <button
        >
          Login
        </button>
      </form>
      <div>
        <p>Dont&apos;t have account</p>
      </div>
    </div>
  )
}
