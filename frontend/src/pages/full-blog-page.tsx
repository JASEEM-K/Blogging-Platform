import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { } from 'react'

export const FullBlog = () => {

  const userData = {
    username: 'joe',
    content: '<p>This is a basic example of implementing images. Drag to re-order.</p> <img src="https://placehold.co/600x400" /><img src="https://placehold.co/800x400" />',
    comments: [

      {
        id: 343,
        username: 'jacob',
        message: 'nice one'
      },

      {
        id: 353,
        username: 'jesse',
        message: 'nnnice onenice onenice onenice onenice onenice onenice onenice onenice onenice onenice oneice onennice onenice onenice onenice onenice onenice onenice onenice onenice onenice onenice oneice onennice onenice onenice onenice onenice onenice onenice onenice onenice onenice onenice oneice onenice onenice onenice onenice onenice onenice onenice onenice onenice onenice onenice oneice one'
      },

      {
        id: 344,
        username: 'jessa',
        message: ' not nice one'
      }

    ]
  }

  return (
    <div>

      <div className='tiptap ' dangerouslySetInnerHTML={{ __html: userData.content }} />

      <div className='flex font-mono font-bold border-b border-slate-500/20'>
        @&nbsp;{userData.username}
      </div>

      <form className='flex'>
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
          <div key={cmt.id} className='py-2'>
            <div className='flex font-mono text-sm font-bold'>
              @ {cmt.username}
            </div>
            <div className='text-lg ml-4'>
              {cmt.message}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

