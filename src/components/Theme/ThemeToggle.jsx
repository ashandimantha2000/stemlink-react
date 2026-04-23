import React from 'react'
import { useThemeStore } from '../../context/Zustand/useThemeStore'

function ThemeToggle() {
    const toggleTheme = useThemeStore((state)=> state.toggleTheme)
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Mode</button>
    </div>
  )
}

export default ThemeToggle
