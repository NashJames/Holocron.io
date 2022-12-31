import { Html, Head, Main, NextScript } from 'next/document'
import { StyledEngineProvider, getInitColorSchemeScript } from '@mui/material/styles'
import { Experimental_CssVarsProvider } from '@mui/material/styles'

/// https://nextjs.org/docs/advanced-features/custom-document
export default function _Document() {
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
