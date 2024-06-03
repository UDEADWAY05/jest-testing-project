import { render } from "@testing-library/react"
import { App } from "../src/App"
import '@testing-library/jest-dom';

it('Проверка компонента', () => {
  const view = render(<App />)

  expect(view.getByText(/Hello World!/)).toBeInTheDocument()
})