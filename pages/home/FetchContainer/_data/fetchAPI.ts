/**  Basic fetch() with predefined config, status handling and indentation formatting */
export const fetchAPI = async (url: string) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  const data = res.status === 200 ? await res.json() : { status: `${res.status} ${res.statusText}` }

  return JSON.stringify(data, null, 2)
}
