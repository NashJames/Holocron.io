import { Html, Head, Main, NextScript } from 'next/document'
import { StyledEngineProvider, getInitColorSchemeScript } from '@mui/material/styles'

export default function Document() {
  return (
    <Html lang="en">
      <StyledEngineProvider injectFirst>
        <Head />
        <body>
          {getInitColorSchemeScript()}
          <Main />
          <NextScript />
        </body>
      </StyledEngineProvider>
    </Html>
  )
}
