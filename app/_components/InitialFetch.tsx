/// Fetches the example API request on the server to save client resources
/// Data cached for 24 hours
export default async function InitialFetch() {
  const res = await fetch(`https://swapi.dev/api/people/1/`, { next: { revalidate: 60 * 60 * 24 } })
  const data = res.json()

  return data
}
