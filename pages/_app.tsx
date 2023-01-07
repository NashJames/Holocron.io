import './global.scss'
import { AppProps } from 'next/app'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import { darkTheme } from './_libs/theme-provider'
import AppHeader from './_components/AppHeader/AppHeader'

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
