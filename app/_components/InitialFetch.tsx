/// Fetches the example API request on the server to save client resources
/// Data cached for 24 hours
export default async function InitialFetch() {
  const res = await fetch('https://swapi.dev/api/people/1/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 60 * 60 * 24 },
  })

  if (!res.ok) return res.status.toString()

  return JSON.stringify(await res.json(), null, 2)
}
