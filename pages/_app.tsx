import './global.scss'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './_libs/theme-provider'
import AppHeader from './_components/AppHeader/AppHeader'

export default function _app({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <AppHeader />
        <Component {...pageProps} />
        {/* Footer? - use footer html tag*/}
      </main>
    </ThemeProvider>
  )
}
