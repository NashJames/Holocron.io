import './global.scss'
import { AppProps } from 'next/app'
import { StyledEngineProvider, Experimental_CssVarsProvider } from '@mui/material/styles'
import { theme } from './_libs/theme-provider'
import AppHeader from './_components/AppHeader/AppHeader'

/// https://nextjs.org/docs/advanced-features/custom-app
export default function _App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Experimental_CssVarsProvider defaultMode="dark" theme={theme}>
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AppHeader />
          <Component {...pageProps} />
          {/* Footer? - use footer html tag*/}
        </main>
      </Experimental_CssVarsProvider>
    </StyledEngineProvider>
  )
}
