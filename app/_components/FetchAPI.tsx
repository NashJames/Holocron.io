'use Client'
import { useCallback, useEffect, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { createTheme } from '@uiw/codemirror-themes'
import { json } from '@codemirror/lang-json'

// Add custom theme
// Add CSS border etc.

export default function Page() {
  const [fetchURL, setFetchURL] = useState<string>('https://swapi.dev/api/people/1/')
  const [data, setData] = useState<string | undefined>()

  useCallback(async () => {
    const res = await fetch(fetchURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const json = await res.json()
    setData(json)
  }, [fetchURL])

  return (
    <>
      {/* https://github.com/radix-ui/website/blob/main/components/PrimitivesDocsSearch.tsx */}
      <CodeMirror value={data} height="200px" extensions={[json()]} readOnly />
    </>
  )
}
