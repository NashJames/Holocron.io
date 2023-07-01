import { getInitColorSchemeScript } from '@mui/material/styles'
import { Head, Html, Main, NextScript } from 'next/document'

/** https://nextjs.org/docs/advanced-features/custom-document */
export default function _Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {getInitColorSchemeScript()}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
