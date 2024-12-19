import React from "react"
import { Trash2, Heart, MessageSquareText } from 'lucide-react'

type BlogPostProps = {
  title: string,
  author: string,
  content: string,
  like: number,
  comment: number,
}

export const BlogPost = ({ title, author, content, like, comment }: BlogPostProps) => {

  return (
    <div>
      <div className=" flex justify-between">
        <h1 className="text-2xl">
          {title}
        </h1>
        {/* Delete Icon */}
        <Trash2 className="hover:text-red-500" />
      </div>
      <div>{author}</div>
      {/* To show the contennts of the blog Post */}
      <div>
        {content}
      </div>

      {/* the controls bar of the blog post */}
      <div className="flex justify-start gap-4">
        <div className="flex gap-2">
          <Heart />
          {like}
        </div>
        <div className="flex gap-2">
          <MessageSquareText />
          {comment}
        </div>
      </div>
    </div>
  )
}

