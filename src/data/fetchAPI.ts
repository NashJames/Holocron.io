/**  Basic fetch() with predefined config, status handling and indentation formatting */
export const fetchAPI = async (url: string) => {
  const elapsedStart = new Date().getTime()
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  })

  const data = res.status === 200 ? await res.json() : { status: `${res.status} ${res.statusText}` }

  const fetchResponse = JSON.stringify(data, null, 2)
  const fetchElapsed = new Date().getTime() - elapsedStart

  return { fetchResponse, fetchElapsed }
}
