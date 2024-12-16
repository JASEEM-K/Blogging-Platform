import React from 'react'

const Navbar = () => {
  return (
    <div className=' max-h-16 mx-auto px-2 flex justify-between'>
        <div >Blogger</div>
        <div className='w-36 rounded-full border-slate-500/15 none sm:block' >Sreach bar</div>
        <div >
            <div className='block sm:none'>Search Icon</div>
            <div>Acc</div>
        </div>
    </div>
  )
}

export default Navbar