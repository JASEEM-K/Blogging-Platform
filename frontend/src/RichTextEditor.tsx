import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// define your extension array
const extensions = [StarterKit]

const content = '<p>Hello World!</p>'

const RichTextEditor = () => {
  const editor = useEditor({
    extensions,
    content,
  })

  return (
    <div>
      <h1 className=' background-color:white '>Hai</h1>
      <EditorContent className=' background-color:white ' editor={editor} />
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
    </div>
  )
}

export default RichTextEditor
