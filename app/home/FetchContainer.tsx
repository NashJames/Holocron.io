'use client'
import styles from './FetchContainer.module.scss'
import { useCallback, useEffect, useState } from 'react'
import InitialFetch from './InitialFetch'
import JSONMirror from './JSONMirror'

export default function FetchContainer() {
  const [fetchURL] = useState<string>('https://swapi.dev/api/people/1/')
  const [json, setJson] = useState<string>('')

  // Runs on page load
  useEffect(() => {
    //+ Noticeable delay compared to setting default in useState
    const fetchInitialState = async () => setJson(await InitialFetch())
    fetchInitialState()
  }, [])

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
    <div className={styles.content}>
      {/* https://github.com/radix-ui/website/blob/main/components/PrimitivesDocsSearch.tsx */}
      {/* Search bar w/ https://github.com/algolia/autocomplete */}
      <JSONMirror data={json} />
    </div>
  )
}
