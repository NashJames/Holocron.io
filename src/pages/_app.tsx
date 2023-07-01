import './global.scss'

import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'

import AppHeader from '@components/AppHeader/AppHeader'
import { darkTheme } from '@lib/theme-provider'

/** https://nextjs.org/docs/advanced-features/custom-app */
export default function _App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <main>
        <ThemeProvider theme={darkTheme}>
          <AppHeader />
          <Component {...pageProps} />
          {/* Footer? - use footer html tag*/}
        </ThemeProvider>
      </main>
    </StyledEngineProvider>
  )
}
