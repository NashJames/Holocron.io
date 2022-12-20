import { Html, Head, Main, NextScript } from 'next/document'
import { StyledEngineProvider, getInitColorSchemeScript } from '@mui/material/styles'
import { Experimental_CssVarsProvider } from '@mui/material/styles'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <StyledEngineProvider injectFirst>
          <Experimental_CssVarsProvider>
            {getInitColorSchemeScript()}
            <Main />
          </Experimental_CssVarsProvider>
        </StyledEngineProvider>
        <NextScript />
      </body>
    </Html>
  )
}
