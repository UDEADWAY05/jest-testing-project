import { render, screen } from "@testing-library/react"
import uE from "@testing-library/user-event"
import { AddButton } from "../src/components/addButton"

describe('Кнопка "добавить"', () => {
  const userEvent = uE.setup()

  it.todo('Блокирововка для строки больше 32 символов')
  it.todo('Блокирововка для строки меньше 1 символа')

  it('Проверка кликов по кнопке', async () => {
    const fn = jest.fn()
    
    render(<AddButton onClick={fn} />)
    
    const button = screen.getByText(/добавить/i)

    await userEvent.click(button);

    expect(fn).toBeCalledTimes(1)
  })
})