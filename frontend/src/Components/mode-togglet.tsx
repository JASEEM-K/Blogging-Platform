import { Moon, Sun } from "lucide-react"

import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  if (theme === 'light') {
    return (
      <Button variant="outline" size="icon" onClick={() => setTheme('dark')} >
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </Button>
    )
  }

  else if (theme === 'dark') {
    return (
      <Button variant="outline" size="icon" onClick={() => setTheme('light')} >
        <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    )
  }
}
