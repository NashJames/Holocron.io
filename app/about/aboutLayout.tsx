'use client' // this directive should be at top of the file, before any imports.
import React from 'react'

// This is a Client Component
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>My Dashboard</h2>
      {children}
    </div>
  )
}
