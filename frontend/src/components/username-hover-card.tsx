import {
  CalendarIcon,
  Github,
  Linkedin,
  Mail,
  Twitter
} from "lucide-react"
import X from '../assets/xlogo.svg'
import { } from 'react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar"
import { Button } from "./ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card"

interface HoverCardProps {
  username: string,
  profilePic: string,
  bio: string,
  links: {
    name: string,
    link: string,
  }[]
}


export function ProfileHoverCard({ username, bio, profilePic, links }: HoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">{username}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={profilePic} />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@{username}</h4>
            <p className="text-sm">
              {bio}
            </p>

            <div className="flex">
              {links.map(lnk => (
                <a key={lnk.name} href={lnk.link} target="_blank" >
                  {lnk.name === 'linkedin' && <Linkedin size={10} />}
                  {lnk.name === 'mail' && <Mail size={10} />}
                  {lnk.name === 'github' && <Github size={10} />}
                  {lnk.name === 'twitter' && <Twitter size={10} />}
                  {lnk.name === 'x' && <X size={10} />}
                </a>
              ))}
            </div>

            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
