'use client'

import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import useSWR from 'swr'

import JSONMirror from './JSONMirror'
import SearchBar from './SearchBar'

import { fetchAPI, FetchAPIType } from '@data/fetchAPI'

const css = {
  subtitle: 'text-lg sm:text-2xl lg:text-3xl h-9 block',
}

const DATA_UNDEFINED = '{\n  "error": "data undefined"\n}'

/** A Fetch API Playground for https://swapi.dev/api/ */
export function FetchPlayground({ fallbackData }: { fallbackData: FetchAPIType }) {
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
        data={!url ? fallbackData?.response : data?.response ?? DATA_UNDEFINED}
        responseTime={!url ? fallbackData?.timeElapsed : data?.timeElapsed ?? 0}
        isLoading={isLoading}
        dataURL={url ?? 'https://swapi.dev/api/starships/10/'}
      />
    </>
  )
}
