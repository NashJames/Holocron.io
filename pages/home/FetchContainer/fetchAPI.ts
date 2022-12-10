/// Default Fetch with predefined config and indentation formatting
export const fetchAPI = async (url: string) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  return JSON.stringify(await res.json(), null, 2)
}
