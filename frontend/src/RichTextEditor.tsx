import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import ImageExtention from '@tiptap/extension-image'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import React, { useState } from 'react'

import {
  Undo2,
  Redo2,
  Bold,
  Underline,
  Italic,
  Code,
  Strikethrough,
  Baseline,
  Quote,
  List,
  ListOrdered,
  AlignCenter,
  Highlighter,
  AlignLeft,
  AlignRight,
  Image,
  AlignJustify,
  ImageUp,

} from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog"
import { useRef } from 'react'


const RichTextEditor = () => {

  const UploadRef = useRef<HTMLInputElement | null>(null)
  const ColorRef = useRef<HTMLInputElement | null>(null)
  const [urlText, setUrlText] = useState('')

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      Color,
      TextStyle,
      ImageExtention,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: '<p>This is a basic example of implementing images. Drag to re-order.</p> <img src="https://placehold.co/600x400" /><img src="https://placehold.co/800x400" />'
  })

  const handleImageInput = () => {
    if (UploadRef.current)
      UploadRef.current.click()
  }

  const handleColorClick = () => {
    if (ColorRef.current)
      ColorRef.current.click()
  }


  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    console.log(file);
    const url = 'https://placehold.co/600x400'

    if (url)
      editor?.chain().focus().setImage({ src: url }).run()
  }


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

        <div
          onClick={handleColorClick}
          className='relative flex flex-col items-center cursor-pointer '>
          <Baseline size={25} className='' />
          <input
            type='color'
            ref={ColorRef}
            onInput={e => editor?.chain().focus().setColor(e.target.value).run()}
            value={editor?.getAttributes('textStyle').color}
            className='max-h-1.5 max-w-6 absolute bottom-0'
          />
        </div>

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

        <div className='flex gap-4 px-4 border-x border-slate-500/20'>

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

        </div>

        <Dialog>
          <DialogTrigger>

            <button
              className='transition translate-y-0.5'
            >
              <Image size={20} />
            </button>

          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className='p-2'>Upload Image or Enter Image URL:</DialogTitle>
              <DialogDescription className='flex flex-col items-center'>

                <div
                  className=' border-2 border-slate-500/40 rounded-lg flex flex-col items-center justify-center align-middle h-52 w-52'
                  onClick={handleImageInput}
                >
                  <ImageUp size={60} />
                </div>

                <div>
                  <input
                    type='text'
                    value={urlText}
                    onChange={e => setUrlText(e.target.value)}
                    className='bg-transparent border border-slate-500 rounded-sm mt-4'
                    placeholder='Enter URL'
                  />
                  <button
                  >
                    Submit
                  </button>
                </div>

                <input
                  type='file'
                  className='hidden'
                  ref={UploadRef}
                  accept='image/*'
                  onChange={addImage}
                />

              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

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

      <div className='max-h-screen overflow-scroll m-3'>
        <EditorContent className='background-color:white  ' editor={editor} />
      </div>
    </div >
  )
}

export default RichTextEditor
