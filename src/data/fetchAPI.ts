export interface FetchAPIType {
  response: string
  timeElapsed: number
}

/** Basic fetch() with predefined config, status handling and indentation formatting */
export const fetchAPI = async (url: string): Promise<FetchAPIType> => {
  const elapsedStart = Date.now()
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 60 * 60 * 24 }, // 24 hours
    method: 'GET',
  })

  const timeElapsed = Date.now() - elapsedStart

  const data = res.status === 200 ? await res.json() : { status: `${res.status} ${res.statusText}` }
  const response = JSON.stringify(data, undefined, 2)

  return { response, timeElapsed }
}
