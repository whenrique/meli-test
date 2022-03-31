import { render, screen } from "@testing-library/react"
import Product from "./Product"

describe('Component: Product', () => {
  it('should render without error', () => {
    render(<Product />)
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })
})
