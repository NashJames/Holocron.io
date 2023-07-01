import { act, render } from '@testing-library/react'

import HomePage from '@pages/home'

test('renders home', async () => {
  const { container } = render(<HomePage />)
  await act(async () => expect(container).toMatchSnapshot())
})
