import Navbar from './components/Navbar'
import { ProfileHoverCard } from './components/username-hover-card'
import { FullBlog } from './pages/full-blog-page'
import RichTextEditor from './RichTextEditor'

function App() {

  //const page = "<h1>Hellow World</h1><ul><li>Hai</li><li>Second time hai</li></ul> <img src='https://images.unsplash.com/photo-1575111447439-2ec3e8669c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlbXB8ZW58MHx8MHx8fDA%3D' /> "

  const linksForDemo = [

    {
      name: 'x',
      link: 'x.com',
    },

    {
      name: 'github',
      link: 'github.com',
    },

  ]

  return (
    <div className=' max-w-screen-lg h-full mx-auto  '>
      <Navbar />
      <ProfileHoverCard
        username='joes'
        profilePic='https://placehold.co/800x800'
        bio='What are you guys doing '
        links={linksForDemo}
      />
      <RichTextEditor />
      <FullBlog />
    </div>
  )
}

export default App

