import { act, render } from '@testing-library/react'
import HomePage from 'pages/home'

// const FALLBACK_EXAMPLE = {
//   fallback: {
//     'https://swapi.dev/api/starships/10/':
//       '{\n  "name": "Millennium Falcon",\n  "model": "YT-1300 light freighter",\n  "manufacturer": "Corellian Engineering Corporation",\n  "cost_in_credits": "100000",\n  "length": "34.37",\n  "max_atmosphering_speed": "1050",\n  "crew": "4",\n  "passengers": "6",\n  "cargo_capacity": "100000",\n  "consumables": "2 months",\n  "hyperdrive_rating": "0.5",\n  "MGLT": "75",\n  "starship_class": "Light freighter",\n  "pilots": [\n    "https://swapi.dev/api/people/13/",\n    "https://swapi.dev/api/people/14/",\n    "https://swapi.dev/api/people/25/",\n    "https://swapi.dev/api/people/31/"\n  ],\n  "films": [\n    "https://swapi.dev/api/films/1/",\n    "https://swapi.dev/api/films/2/",\n    "https://swapi.dev/api/films/3/"\n  ],\n  "created": "2014-12-10T16:59:45.094000Z",\n  "edited": "2014-12-20T21:23:49.880000Z",\n  "url": "https://swapi.dev/api/starships/10/"\n}',
//   },
// }

test('renders home', async () => {
  // const { container } = render(<Home fallback={FALLBACK_EXAMPLE} />)
  const { container } = await act(async () => render(<HomePage />))
  expect(container).toMatchSnapshot()
})
