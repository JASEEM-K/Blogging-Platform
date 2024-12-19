import React, { useState } from 'react'
import { Eye, EyeClosed, KeyRound, UserRound } from 'lucide-react'

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState("password")


  return (
    <div className=' max-w-screen-sm mx-auto border border-slate-500/15 rounded-lg flex flex-col justify-center items-center space-y-4 bg-primary/10 '>
      <h1 className='text-2xl'>Welcome Back</h1>
      <p> Login to you&apos;re account</p>
      <form className='space-y-4 relative items-center'>
        <div className='flex gap-2 border border-slate-500/10 w-64 rounded-lg px-4 focus:outline-primary  '>
          <UserRound size='20' />
          <input value={formData.username} name='username' placeholder='Username' type='text'
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className='focus:outline-none bg-transparent '
          />
        </div>
        <div className=' flex gap-2 border border-slate-500/10 rounded-lg justify-between px-4 '>
          <div className='flex items-center' >
            <KeyRound className='' size='20' />
          </div>
          <input value={formData.password} placeholder='Password' type={showPassword}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className='focus:outline-none bg-transparent w-full '
          />
          <div className='flex items-center'>
            {showPassword === 'password' ?
              <Eye onClick={() => setShowPassword('text')} /> :
              <EyeClosed onClick={() => setShowPassword('password')} />}
          </div>
        </div>
        <button>
          Login
        </button>
      </form>
      <div>
        <p>Dont&apos;t have account</p>
      </div>
    </div>
  )
}
