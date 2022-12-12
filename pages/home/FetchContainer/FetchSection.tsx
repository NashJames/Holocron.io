import styles from './FetchSection.module.scss'
import React, { useState } from 'react'
import JSONMirror from './_components/JSONMirror'
import { SearchAPI } from './_components/SearchAPI'
import useSWR from 'swr'
import { fetchAPI } from './_data/fetchAPI'

export default function FetchSection() {
  const [url, setURL] = useState<string>('https://swapi.dev/api/people/1/')
  const { data, error } = useSWR(url, fetchAPI)

  return (
    <section className={styles.content}>
      <SearchAPI searchRequest={(request) => setURL(request)} />
      <JSONMirror data={data ?? error} />
    </section>
  )
}
