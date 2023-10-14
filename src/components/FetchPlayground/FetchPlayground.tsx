'use client'

import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { AnimatePresence } from 'framer-motion'
import useSWR from 'swr'

import { fetchAPI, FetchAPIType } from '@data/fetchAPI'
import { xWingAscii } from '@public/asciiArt/x-wing'

import EasterEggToast from './_components/EasterEggToast'
import JSONMirror from './JSONMirror'
import SearchBar from './SearchBar'

const css = {
  subtitle: 'text-lg sm:text-2xl lg:text-3xl h-9 block',
}

// prettier-ignore
const SWR_CONFIG = { revalidateOnFocus: false, revalidateOnReconnect: false, revalidateIfStale: false }
const DATA_UNDEFINED = '{\n  "error": "data undefined"\n}'

/** A Fetch API Playground for https://swapi.dev/api/ */
export default function FetchPlayground({ fallbackData }: { fallbackData: FetchAPIType }) {
  const [url, setURL] = useState<string>()
  const { data, isLoading } = useSWR(url, fetchAPI, SWR_CONFIG)
  const [logXWing, setLogXWing] = useState<boolean>(true)

  useEffect(() => {
    if (logXWing) {
      if (process.env.NODE_ENV === 'production') console.log(xWingAscii)
      setLogXWing(false)
    }
  }, [logXWing])

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

      <AnimatePresence>
        {url?.startsWith('https://swapi.dev/api/starships/12') && !isLoading ? (
          <EasterEggToast key="easter-egg-toast" />
        ) : undefined}
      </AnimatePresence>
    </>
  )
}
