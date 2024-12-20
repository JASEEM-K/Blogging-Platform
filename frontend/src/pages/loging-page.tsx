import { useState } from 'react'
import { Eye, EyeClosed, KeyRound, UserRound } from 'lucide-react'
import { Input } from "../components/ui/input"
import { Button } from '../components/ui/button'

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState("password")


  return (
    <div className=' max-w-screen-sm mx-auto border border-slate-500/15 rounded-lg flex flex-col justify-center items-center space-y-4 bg-primary/10 '>
      <h1 className='text-3xl mt-2 font-bold'>Welcome Back</h1>
      <p className='opacity-85 '> Login to you&apos;re account</p>
      <form className='space-y-4 flex flex-col max-w-screen-sm items-center'>
        <div className='flex gap-2 border border-slate-500/10 w-full  rounded-lg px-4 focus:outline-primary  '>
          <UserRound size='20' />
          <Input value={formData.username} name='username' placeholder='Username' type='text'
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className='focus:outline-none bg-transparent '
          />
        </div>
        <div className=' flex gap-2 border border-slate-500/10 w-full rounded-lg justify-between px-4 '>
          <div className='flex items-center' >
            <KeyRound className='rotate-12' size='20' />
          </div>
          <Input value={formData.password} placeholder='Password' type={showPassword}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className='focus:outline-none bg-transparent w-full '
          />
          <div className='flex items-center cursor-pointer'>
            {showPassword === 'password' ?
              <EyeClosed onClick={() => setShowPassword('text')} /> :
              <Eye onClick={() => setShowPassword('password')} />}
          </div>
        </div>
        <Button className='w-full'>
          Login
        </Button>
      </form>
      <div className='flex'>
        <p>Dont&apos;t have account</p>

        <a>Sign up</a>
      </div>
    </div>
  )
}
