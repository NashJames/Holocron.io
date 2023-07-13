import './global.scss'

import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'

import AppHeader from '@components/AppHeader/AppHeader'
import { IBMPlexMonoFont, OxaniumFont, PoiretOneFont, TextMeOneFont } from '@lib/next-font'
import { tw } from '@lib/tailwind-merge'
import { darkTheme } from '@lib/theme-provider'

const css = {
  root: 'bg-base text-contrast-secondary flex flex-col items-center',
  fonts: [
    TextMeOneFont.className,
    OxaniumFont.variable,
    PoiretOneFont.variable,
    IBMPlexMonoFont.variable,
  ],
}

/** https://nextjs.org/docs/advanced-features/custom-app */
export default function _App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <main className={tw(css.root, css.fonts)}>
        <ThemeProvider theme={darkTheme}>
          <AppHeader />
          <Component {...pageProps} />
          {/* Footer? - use footer html tag*/}
        </ThemeProvider>
      </main>
    </StyledEngineProvider>
  )
}
