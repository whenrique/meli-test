import { fireEvent, render, screen } from "@testing-library/react"
import Header from "./Header"

describe('Component: Header', () => {
  it('Should render without errors', () => {
    render(<Header />)
    const header = screen.getByRole('heading')

    expect(header).toBeInTheDocument()
  })

  it('should submit with query', () => {
    const handleSubmit = jest.fn()

    render(<Header onSubmit={handleSubmit} />)

    const form = screen.getByRole('search')
    const input = screen.getByTestId('search-input')

    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.submit(form)

    expect(handleSubmit).toHaveBeenCalled()
  })

  it('shouldn\'t submit without query', () => {
    const handleSubmit = jest.fn()

    render(<Header onSubmit={handleSubmit} />)

    const form = screen.getByRole('search')
    const input = screen.getByTestId('search-input')

    fireEvent.change(input, { target: { value: '' } })
    fireEvent.submit(form)

    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })

  it('should submit by click', () => {
    const handleSubmit = jest.fn()

    render(<Header onSubmit={handleSubmit} />)

    const input = screen.getByTestId('search-input')
    const button = screen.getByTestId('search-button')

    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.click(button)

    expect(handleSubmit).toHaveBeenCalled()
  })

  it('shouldn\'t submit by click', () => {
    const handleSubmit = jest.fn()

    render(<Header onSubmit={handleSubmit} />)

    const input = screen.getByTestId('search-input')
    const button = screen.getByTestId('search-button')

    fireEvent.change(input, { target: { value: '' } })
    fireEvent.click(button)

    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
})
