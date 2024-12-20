import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Highlight from '@tiptap/extension-highlight'

import './style.scss'

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography
    ],
    content: '<p>Hello World!</p>',
  })

  const handleLogthis = () => {
    const html = editor?.getHTML()
    const htmlString = JSON.stringify(html)
    console.log(htmlString);
  }

  return (
    <div>
      <div id='resulting-code-space' />
      <EditorContent className=' background-color:white ' editor={editor} />
      <button onClick={handleLogthis} > Print </button>
    </div>
  )
}

export default RichTextEditor
