import useSWR from 'swr'
import Image from 'next/image'
import { useState } from 'react'
import { Typography } from '@mui/material'
import { fetchAPI } from './_data/fetchAPI'
import styles from './FetchSection.module.scss'
import JSONMirror from './_components/JSONMirror'
import SearchAPI from './_components/SearchBar'
import DeathStarSVG from '@public/illustrations/death-star-bg.svg'

const DATA_UNDEFINED = '{\n  "error": "data undefined"\n}'

/** Connects the SearchBar, CodeMirror and fetchAPI components */
export default function FetchSection() {
  const [url, setURL] = useState<string>('https://swapi.dev/api/starships/10/')
  const { data, isLoading } = useSWR(url, fetchAPI)

  return (
    <section className={styles.Content}>
      <Typography variant="h4" className={styles.Subtitle}>
        Take a look at the data below...
      </Typography>

      <SearchAPI searchRequest={(request) => setURL(request)} />

      <JSONMirror
        data={data?.fetchResponse ?? DATA_UNDEFINED}
        responseTime={data?.fetchElapsed ?? 0}
        isLoading={isLoading}
        dataURL={url}
      />

      <Image
        alt={'An illustration of the Death Star'}
        className={styles.DeathStar}
        src={DeathStarSVG}
        draggable={false}
      />
    </section>
  )
}
