'use Client'
import { useEffect, useState } from 'react'
import InitialFetch from './InitialFetch'
import JSONMirror from './JSONMirror'

export default function FetchAPI() {
  const [fetchURL] = useState<string>('https://swapi.dev/api/people/1/')
  const [json, setJson] = useState<string>("{ error: 'Initial Fetch Failed' }")

  // Runs on page load
  useEffect(() => {
    const fetchInitialState = async () => setJson(await InitialFetch())
    fetchInitialState()
  }, [])

  // Runs on each search request
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(fetchURL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      setJson(await response.json())
      console.log('fetchData')
      console.log(await response.json())
    }
    fetchData()
  }, [fetchURL])

  return (
    <>
      {/* https://github.com/radix-ui/website/blob/main/components/PrimitivesDocsSearch.tsx */}
      {/* Search bar w/ https://github.com/algolia/autocomplete */}
      <JSONMirror data={json} />
    </>
  )
}
