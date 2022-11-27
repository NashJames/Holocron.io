import './global.scss'
import React from 'react'
import ThemeProvider from './_root/theme-provider'
// Layouts must accept a children prop.
// This will be populated with nested layouts or pages
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
