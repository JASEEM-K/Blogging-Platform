import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'

import {
  Undo2,
  Redo2,
  Bold,
  Underline,
  Italic,
  Code,
  Strikethrough,
  Quote,
  List,
  ListOrdered,
  AlignCenter,
  Highlighter,
  AlignLeft,
  AlignRight,
  AlignJustify,

} from 'lucide-react'

const RichTextEditor = () => {

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: '<p>Hello World!</p>',
  })


  return (
    <div>

      <div className='flex gap-4 p-4 border-b border-secondary'>

        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={editor?.isActive('bold') ? 'is-active' : ''}
        >
          <Bold size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={editor?.isActive('italic') ? 'is-active' : ''}
        >
          <Italic size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          className={editor?.isActive('strike') ? 'is-active' : ''}
        >
          <Strikethrough size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().toggleCode().run()}
          className={editor?.isActive('code') ? 'is-active' : ''}
        >
          <Underline size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
          className={editor?.isActive('codeblock') ? 'is-active' : ''}
        >
          <Code size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={editor?.isActive('bulletList') ? 'is-active' : ''}
        >
          <List size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className={editor?.isActive('orderedList') ? 'is-active' : ''}
        >
          <ListOrdered size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
          className={editor?.isActive('blockquote') ? 'is-active' : ''}
        >
          <Quote size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().toggleHighlight().run()}
          className={editor?.isActive('highlight') ? 'is-active' : ''}
        >
          <Highlighter size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().setTextAlign('left').run()}
          className={editor?.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
        >
          <AlignLeft size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().setTextAlign('center').run()}
          className={editor?.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
        >
          <AlignCenter size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().setTextAlign('right').run()}
          className={editor?.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
        >
          <AlignRight size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().setTextAlign('justify').run()}
          className={editor?.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
        >
          <AlignJustify size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().undo().run()}
          disabled={!editor?.can().chain().focus().undo().run()} >
          <Undo2 size={20} />
        </button>

        <button
          onClick={() => editor?.chain().focus().redo().run()}
          disabled={!editor?.can().chain().focus().redo().run()} >
          <Redo2 size={20} />
        </button>

      </div>

      <div>
        <EditorContent className='background-color:white ' editor={editor} />
      </div>
    </div>
  )
}

export default RichTextEditor
