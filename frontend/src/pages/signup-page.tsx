import { useState } from 'react'
import { Eye, EyeClosed, KeyRound, Mail, UserRound } from 'lucide-react'
import { Button } from '../components/ui/button'

export const SingUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  })
  const [showPassword, setShowPassword] = useState("password")


  return (
    <div className='font-mono max-w-screen-sm mx-auto py-8 border border-slate-500/15 rounded-lg flex flex-col  items-center space-y-8 sm:space-y-4 h-full bottom-0 mb-0 '>
      <h1 className='text-4xl mt-2 font-bold'>Create Account</h1>
      <p className='opacity-60'>Get started with new account</p>

      <form className='space-y-8 sm:space-y-4 flex flex-col max-w-screen-sm items-center'>

        <div className='space-y-1.5 w-full'>
          <label className='opacity-70'>Username:</label>
          <div className=' flex items-center h-9 gap-2 focus-within:ring-1 focus-within:ring-ring border border-input bg-transparent transition-colors text-base shadow-sm rounded-lg justify-start px-3 py-1 md:text-sm '>
            <UserRound size='20' />
            <input value={formData.username} name='username' placeholder='Username' type='text'
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className='focus:outline-none bg-transparent '
            />
          </div>
        </div>

        <div className='space-y-1.5 w-full'>
          <label className='opacity-70'>Email:</label>
          <div className=' flex items-center h-9 gap-2 focus-within:ring-1 focus-within:ring-ring border border-input bg-transparent transition-colors text-base shadow-sm rounded-lg justify-start px-3 py-1 md:text-sm '>
            <Mail size='20' />
            <input value={formData.email} name='email' placeholder='Email' type='email'
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className='focus:outline-none bg-transparent '
            />
          </div>
        </div>


        <div className='space-y-1.5 w-full  '>
          <label className='opacity-70'>Password:</label>
          <div className=' flex items-center h-9 gap-2 focus-within:ring-1 focus-within:ring-ring border border-input bg-transparent transition-colors text-base shadow-sm rounded-lg justify-between px-3 py-1 md:text-sm '>
            <div className='flex items-center' >
              <KeyRound className='rotate-12' size='20' />
            </div>
            <input value={formData.password} placeholder='Password' type={showPassword}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className='focus:outline-none bg-transparent w-full placeholder:text-muted-foreground '
            />
            <div className='flex items-center cursor-pointer'>
              {showPassword === 'password' ?
                <EyeClosed onClick={() => setShowPassword('text')} /> :
                <Eye onClick={() => setShowPassword('password')} />}
            </div>
          </div>
        </div>

        <Button className='w-full'>
          Sign Up
        </Button>
      </form>
      <div className='flex'>
        <p>Already have a account&nbsp;</p>
        <a >Login</a>
      </div>
    </div>
  )
}
