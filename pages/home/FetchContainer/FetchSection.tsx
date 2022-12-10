import styles from './FetchSection.module.scss'
import React, { useCallback, useState } from 'react'
import JSONMirror from './JSONMirror'
import { SearchAPI } from './SearchAPI'

export default function FetchSection({ data }: { data: string }) {
  const [fetchURL] = useState<string>('https://swapi.dev/api/people/1/')
  const [json, setJson] = useState<string>(data)

  // Runs on each search request
  useCallback(async () => {
    //+ Fetch is not yet officially supported in next.js client components
    //+ May trigger additional re-renders
    const res = await fetch(fetchURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
      setJson(JSON.stringify(await res.json(), null, 2))
    } else setJson(res.status.toString())
  }, [fetchURL])

  return (
    <section className={styles.content}>
      <SearchAPI />
      <JSONMirror data={json} />
    </section>
  )
}
