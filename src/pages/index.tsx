import Head from 'next/head'
import { SWRConfig } from 'swr'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { xWingAscii } from '@public/asciiArt/x-wing'
import { fetchAPI } from '@data/fetchAPI'
import HomePage from './home'

/** https://nextjs.org/docs/routing/introduction#index-routes */
export default function Index({ fallback }: { fallback: FallbackProps }) {
  if (process.env.NODE_ENV === 'production') console.log(xWingAscii())

  return (
    <>
      <Head>
        <title>Holocron.io</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon/holocron.svg" />
      </Head>
      <SWRConfig value={{ fallback }}>
        <HomePage />
      </SWRConfig>
    </>
  )
}

interface FallbackProps {
  fallback: {
    'https://swapi.dev/api/starships/10/': { fetchResponse: string; fetchElapsed: number }
  }
}

/** Fetches the example API request on the server to save client resources. Data cached for 24 hours */
export const getStaticProps: GetStaticProps<FallbackProps> = async (): Promise<
  GetStaticPropsResult<FallbackProps>
> => {
  const data = await fetchAPI('https://swapi.dev/api/starships/10/')

  // You can see this data in the browser console, under the following HTML:
  // <script id="__NEXT_DATA__" type="application/json">...</script>
  return {
    props: { fallback: { 'https://swapi.dev/api/starships/10/': data } },
    revalidate: 60 * 60 * 24,
  }
}
