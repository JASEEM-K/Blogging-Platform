import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { } from 'react'

export const FullBlog = () => {

  const userData = {
    username: 'joe',
    profilePic: 'https://placehold.co/800x800',
    title: 'First Time Ha ',
    content: '<p>This is a basic example of implementing images. Drag to re-order.</p> <img src="https://placehold.co/600x400" /><img src="https://placehold.co/800x400" />',
    comments: [

      {
        id: 343,
        profilePic: 'https://placehold.co/800x800',
        username: 'jacob',
        message: 'nice one'
      },

      {
        id: 353,
        profilePic: 'https://placehold.co/800x800',
        username: 'jesse',
        message: 'nnnice onenice onenice onenice onenice onenice onenice onenice onenice onenice onenice oneice onennice onenice onenice onenice onenice onenice onenice onenice onenice onenice onenice oneice onennice onenice onenice onenice onenice onenice onenice onenice onenice onenice onenice oneice onenice onenice onenice onenice onenice onenice onenice onenice onenice onenice onenice oneice one'
      },

      {
        id: 344,
        profilePic: 'https://placehold.co/800x800',
        username: 'jessa',
        message: ' not nice one'
      }

    ]
  }


  return (
    <div>

      <div className='my-4'>

        <h1 className='text-4xl font-bold my-4 '>
          {userData.title}
        </h1>

        <div className='flex font-mono border-y border-secondary py-1.5 px-4 justify-between '>

          <div className='flex gap-1.5 items-center'>
            <Avatar className='size-8'>
              <AvatarImage src={userData.profilePic} />
              <AvatarFallback>{userData.username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            {userData.username}
          </div>

          <div>
            25<sup>th</sup>&nbsp;Dec&nbsp;2024
          </div>

        </div>
      </div>

      <div className='tiptap ' dangerouslySetInnerHTML={{ __html: userData.content }} />

      <form className='flex pt-4 border-t border-slate-500/20'>
        <Input
          className='outline-none rounded-r-none'
          placeholder='Comment on the Blog'
        />
        <Button
          className='rounded-l-none'
        >Post </Button>
      </form>

      <div className='border-y ml-4 border-slate-500/20 py-4' >
        {userData.comments.map(cmt => (
          <div key={cmt.id} className='py-2 flex gap-4 '>

            <Avatar>
              <AvatarImage src={cmt.profilePic} />
              <AvatarFallback>{cmt.username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>

            <div className=''>
              <div className='flex font-mono text-sm font-bold items-center'>
                {cmt.username}
                <div className='font-normal pl-4 text-xs opacity-70'>
                  11 seconds ago
                </div>
              </div>
              <div className='text-lg '>
                {cmt.message}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

