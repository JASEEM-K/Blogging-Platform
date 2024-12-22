import { Trash2, Heart, MessageSquareText } from 'lucide-react'

type BlogPostProps = {
  author: string,
  content: string,
  like: number,
  comment: number,
}

export const BlogPost = ({ author, content, like, comment }: BlogPostProps) => {


  return (
    <div className="font-mono border border-secondary p-4">
      <div className=" flex justify-end">
        {/* Delete Icon */}
        <Trash2 className="hover:text-red-500" />
      </div>
      <div>{author}</div>
      {/* To show the contennts of the blog Post */}
      <div className="overflow-hidden max-h-80 w-full p-4 mb-2 rounded-lg  ">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      {/* the controls bar of the blog post */}
      <div className="flex justify-end gap-4 pt-2 border-t border-secondary ">
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

