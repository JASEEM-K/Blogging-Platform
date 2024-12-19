import Navbar from './components/Navbar'
import { LoginPage } from './pages/loging-page'
import { BlogPost } from './components/blog-post'

function App() {

  return (
    <div className=' max-w-screen-lg h-full mx-auto  '>
      <Navbar />
      <LoginPage />
      <BlogPost
        title='Frist post'
        key='hello'
        author='hello'
        content='how are you'
        like={24}
        comment={3}
      />
    </div>
  )
}

export default App

