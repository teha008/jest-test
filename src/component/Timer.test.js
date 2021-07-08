import { render } from '@testing-library/react'
import Timer from './Timer'

test('초 표시', () => {
  Date.now = jest.fn(() => 1234567891023)
  const el = render(<Timer />)
  expect(el).toMatchSnapshot()
})
