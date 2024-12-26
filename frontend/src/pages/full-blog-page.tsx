import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { } from 'react'

export const FullBlog = () => {

  const userData = {
    username: 'joe',
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

        <h1 className='text-4xl font-bold '>
          {userData.title}
        </h1>

        <div className='flex font-mono'>
          @&nbsp;{userData.username}
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
              <div className='flex font-mono text-sm font-bold'>
                {cmt.username}
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

