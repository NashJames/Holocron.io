'use client'

import { Card } from '@nextui-org/react'
import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import useSWR from 'swr'

import JSONMirror from './JSONMirror'
import SearchBar from './SearchBar'

import { fetchAPI, FetchAPIType } from '@data/fetchAPI'
import EasterEggBasketIcon from '@public/icons/EasterEggBasket'

const css = {
  subtitle: 'text-lg sm:text-2xl lg:text-3xl h-9 block',
  easterEgg: {
    card: 'fixed bottom-2 right-2 z-50 py-1 px-2 w-fit bg-warning flex flex-row justify-center',
    icon: 'w-10 mr-1',
    text: 'font-title text-black',
    subheading: 'text-base font-bold',
  },
}

const DATA_UNDEFINED = '{\n  "error": "data undefined"\n}'

/** A Fetch API Playground for https://swapi.dev/api/ */
export default function FetchPlayground({ fallbackData }: { fallbackData: FetchAPIType }) {
  const [url, setURL] = useState<string>()
  const { data, isLoading } = useSWR(url, fetchAPI)

  return (
    <>
      <TypeAnimation
        sequence={[3000, 'Take a look at the data below...']}
        className={css.subtitle}
        cursor={false}
      />

      <SearchBar searchRequest={(request: string) => setURL(request)} />

      <JSONMirror
        data={(url ? data?.response : fallbackData?.response) ?? DATA_UNDEFINED}
        responseTime={(url ? data?.timeElapsed : fallbackData?.timeElapsed) ?? 0}
        isLoading={isLoading}
        dataURL={url ?? 'https://swapi.dev/api/starships/10/'}
      />

      {url?.startsWith('https://swapi.dev/api/starships/12') ? (
        <Card className={css.easterEgg.card}>
          <EasterEggBasketIcon className={css.easterEgg.icon} />
          <div className={css.easterEgg.text}>
            <p className={css.easterEgg.subheading}>Psst!</p>
            <p>Check out the browser console for an easter egg!</p>
          </div>
        </Card>
      ) : undefined}
    </>
  )
}
