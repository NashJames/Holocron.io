import './global.scss'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './_libs/theme-provider'

export default function _app({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* AppHeader?  with next/link - use header html tag*/}
      <main>
        <Component {...pageProps} />
      </main>
      {/* Footer? - use footer html tag*/}
    </ThemeProvider>
  )
}
