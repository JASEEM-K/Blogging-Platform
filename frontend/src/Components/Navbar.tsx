import { ModeToggle } from "./mode-togglet";
import { Search, UserRound } from 'lucide-react'
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className='mt-3 max-h-16 px-2 flex justify-between'>
      <div className="text-red-500 font-bold font-mono text-xl drop-shadow translate-y-2" >Blogger</div>
      <div className='border border-slate-500 rounded-full border-slate-500/10 hidden sm:block' >
        <div className="flex px-4 p-2 gap-2 " >
          <input className="bg-transparent focus:outline-none -translate-y-1  " placeholder='Serach' />
          <Search size='20' className="cursor-pointer" />
        </div>
      </div>
      <div className='flex gap-4  '>
        <Search size='20' className='rounded-full border border-slate-500/10 block sm:hidden' />
        <ModeToggle />
        <Button>
          <UserRound size='40' />
        </Button>
      </div>
    </div>
  )
}

export default Navbar
