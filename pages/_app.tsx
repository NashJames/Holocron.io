import './global.scss'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './_libs/theme-provider'
import AppHeader from './_components/AppHeader/AppHeader'
import Background from './_components/Background/Background'

export default function _app({ Component, pageProps }: AppProps) {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ThemeProvider theme={darkTheme}>
        <AppHeader />
        <Component {...pageProps} />
        {/* Footer? - use footer html tag*/}
        <Background />
      </ThemeProvider>
    </main>
  )
}
