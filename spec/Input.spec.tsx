import { render, screen } from "@testing-library/react"
import { Input } from "../src/components/input"

// import uE from '@testing-library/user-event';

describe('Поле ввода', () => {
  // const userEvent = uE.setup({ delay: 100 })

  it('Не больше 32 символов', () => {
    expect('Greeting!').toBeShorterThan(32);
  })

  // it('Поле доступно для ввода', async () => {
  //   const fn = jest.fn(val => {
  //     console.log(val)
  //   })

  //   render(<Input defaultValue="" onChange={fn} />)
    
  //   const input = screen.getByRole('textbox')

  //   await userEvent.type(input, 'hello!') //userEvent.type - возращает промис

  //   await userEvent.clear(input)
  //   // fireEvent.change(input, { target: { value: "hello!" } }) // плохой способ

  //   expect(fn).toBeCalledWith('')
  // })
})