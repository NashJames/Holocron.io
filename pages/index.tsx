import Head from 'next/head'
import TitleSection from './home/TitleContainer/TitleSection'
import FetchSection from './home/FetchContainer/FetchSection'
import { GetStaticProps, GetStaticPropsResult } from 'next'

// Fetch should add to the url under /data/[subject]/[id]#APISearch

export default function HomePage({ staticFetch }: { staticFetch: string }) {
  return (
    <>
      <Head>
        <title>Holocron.io</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* AppHeader?  with next/link */}
      <TitleSection />
      <FetchSection data={staticFetch} />
      {/* Footer? */}
    </>
  )
}

interface Props {
  staticFetch: string
}

/// Fetches the example API request on the server to save client resources
/// Data cached for 24 hours
export const getStaticProps: GetStaticProps<Props> = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const res = await fetch('https://swapi.dev/api/people/1/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!res.ok) return { props: { staticFetch: res.status.toString() } }
  const staticFetch = JSON.stringify(await res.json(), null, 2)

  return { props: { staticFetch }, revalidate: 60 * 60 * 24 }
}
