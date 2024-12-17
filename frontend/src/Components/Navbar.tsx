import { ModeToggle } from "./mode-togglet";
import { Search } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='mt-3 max-h-16 mx-auto px-2 flex justify-between'>
      <div className="text-red-500" >Blogger</div>
      <div className='border-slate-500 rounded-full border-slate-500/15 hidden sm:block' >
        <div className="flex px-4 p-2 gap-2 " >
          <input className="bg-transparent " placeholder='Serach' />
          <Search />
        </div>
      </div>
      <div className='flex gap-4  '>
        <Search className='block sm:hidden' />
        <ModeToggle />
        <div>Acc</div>
      </div>
    </div>
  )
}

export default Navbar
