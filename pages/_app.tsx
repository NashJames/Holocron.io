import './global.scss'
import { AppProps } from 'next/app'

export default function _app({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
