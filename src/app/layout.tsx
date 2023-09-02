import '../styles/global.scss'

import { Metadata } from 'next'

import { AppHeader } from '@components'
import { IBMPlexMonoFont, OxaniumFont, PoiretOneFont, TextMeOneFont } from '@lib/next-font'
import { tw } from '@lib/tailwind-merge'
import { ThemeProvider } from '@lib/ThemeProvider'

export const metadata: Metadata = {
  title: 'Holocron.io',
  description: '🌌 A modern implementation of the Star Wars API',
  icons: '/favicon/holocron.svg',
}

const css = {
  root: 'bg-base text-white flex flex-col items-center',
  fonts: [
    TextMeOneFont.className,
    OxaniumFont.variable,
    PoiretOneFont.variable,
    IBMPlexMonoFont.variable,
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={tw(css.root, css.fonts)}>
        <ThemeProvider>
          <AppHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
