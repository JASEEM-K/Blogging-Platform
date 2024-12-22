import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from './../components/ui/avatar'
import { BlogPost } from '../components/blog-post'

type IUser = {
  username: string,
  email: string,
  bio: string,
  profilePic: string
}

export const ProfilePage = () => {

  const page = "<h1>Hellow World</h1> <img src='https://images.unsplash.com/photo-1575111447439-2ec3e8669c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlbXB8ZW58MHx8MHx8fDA%3D' /> "


  const UserData: IUser = {
    username: 'joe',
    bio: 'i am a pro-grammmer',
    profilePic: 'https://images.unsplash.com/photo-1575111447439-2ec3e8669c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlbXB8ZW58MHx8MHx8fDA%3D',
    email: 'jesse@gmail.com',
  }

  return (
    <div className=" h-full grid lg:grid-cols-2">

      {/* Profile Details Sections */}
      < div className="h-full max-w-52 border-r-2 border-slate-500/20 ">

        <Avatar className="h-40 w-40 ">
          <AvatarImage src={UserData?.profilePic} />
          <AvatarFallback>{UserData?.username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>

        <div>
          <h1>@{UserData?.username}</h1>
          <p>{UserData?.bio}</p>
        </div>

      </div >

      {/* Right side of Profile */}
      <div className="">
        <BlogPost
          author="jaseem"
          like={32}
          comment={5}
          content={page}
        />
      </div>

    </div >
  )
}
