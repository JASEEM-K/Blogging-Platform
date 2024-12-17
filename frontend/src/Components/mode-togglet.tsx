import React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button variant="outline" size="icon">
      {theme === 'dark' && <Sun onClick={() => setTheme('light')} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />}
      {theme === 'light' && <Moon onClick={() => setTheme('dark')} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
      {theme === 'system' && <Moon onClick={() => setTheme('dark')} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
    </Button>
  )
}
