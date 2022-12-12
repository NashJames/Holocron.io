import Head from 'next/head'
import TitleSection from './home/TitleContainer/TitleSection'
import FetchSection from './home/FetchContainer/FetchSection'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { SWRConfig } from 'swr'
import { fetchAPI } from './home/FetchContainer/_data/fetchAPI'
import { xWingAscii } from '@public/asciiArt/x-wing'

// Fetch should add to the url under /data/[subject]/[id]#APISearch

export default function HomePage({ fallback }: { fallback: FallbackProps }) {
  if (process.env.NODE_ENV === 'production') console.log(xWingAscii())
  return (
    <>
      <Head>
        <title>Holocron.io</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TitleSection />
      <SWRConfig value={{ fallback }}>
        <FetchSection />
      </SWRConfig>
    </>
  )
}

interface FallbackProps {
  fallback: {
    'https://swapi.dev/api/people/1/': string
  }
}

/// Fetches the example API request on the server to save client resources
/// Data cached for 24 hours
export const getStaticProps: GetStaticProps<FallbackProps> = async (): Promise<
  GetStaticPropsResult<FallbackProps>
> => {
  const json = await fetchAPI('https://swapi.dev/api/people/1/')

  return {
    props: { fallback: { 'https://swapi.dev/api/people/1/': json } },
    revalidate: 60 * 60 * 24,
  }
}