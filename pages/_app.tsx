import './global.scss'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './_libs/theme-provider'
import AppHeader from './_components/AppHeader/AppHeader'

/// https://nextjs.org/docs/advanced-features/custom-app
export default function _App({ Component, pageProps }: AppProps) {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ThemeProvider theme={darkTheme}>
        <AppHeader />
        <Component {...pageProps} />
        {/* Footer? - use footer html tag*/}
      </ThemeProvider>
    </main>
  )
}
