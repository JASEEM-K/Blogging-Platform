import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Highlight from '@tiptap/extension-highlight'

import './style.scss'

const content = '<p>Hello World!</p>'

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography
    ],
    content,
  })

  console.log(editor)

  return (
    <div>
      <h1 className=' background-color:white '>Hai</h1>
      <EditorContent className=' background-color:white ' editor={editor} />
    </div>
  )
}

export default RichTextEditor
