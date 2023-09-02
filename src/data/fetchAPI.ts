export interface FetchAPIType {
  response: string
  timeElapsed: number
}

/** Basic fetch() with predefined config, status handling and indentation formatting */
export const fetchAPI = async (url: string, fetchProps?: RequestInit): Promise<FetchAPIType> => {
  const elapsedStart = new Date().getTime()
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 60 * 60 * 24 },
    method: 'GET',
  })

  const data = res.status === 200 ? await res.json() : { status: `${res.status} ${res.statusText}` }

  const response = JSON.stringify(data, null, 2)
  const timeElapsed = new Date().getTime() - elapsedStart

  return { response, timeElapsed }
}
