'use client'
import { createContext } from 'react'

const ThemeContext = createContext('dark')

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}
