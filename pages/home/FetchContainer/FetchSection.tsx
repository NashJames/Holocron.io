import styles from './FetchSection.module.scss'
import React, { useState } from 'react'
import JSONMirror from './JSONMirror'
import { SearchAPI } from './SearchAPI'
import useSWR from 'swr'
import { fetchAPI } from './fetchAPI'

export default function FetchSection() {
  const [url, setURL] = useState<string>('https://swapi.dev/api/people/1/')
  const { data, error, isLoading } = useSWR(url, fetchAPI)

  return (
    <section className={styles.content}>
      <SearchAPI />
      <JSONMirror data={data ?? error} />
    </section>
  )
}
