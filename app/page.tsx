import FetchAPI from './_components/FetchAPI'
import JSONMirror from './_components/JSONMirror'

export default async function Page() {
  // Forward fetched data to your Client Component
  const data: string = "{ test: 'data' }"

  return (
    <>
      <FetchAPI />
      <JSONMirror data={data} />
    </>
  )
}
