import React from 'react'
import AboutLayout from './aboutLayout'

// This is a Server Component
export default function Layout({ children }: { children: React.ReactNode }) {
  return <AboutLayout>{children}</AboutLayout>
}
