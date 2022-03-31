import { render, screen } from "@testing-library/react"

import Products from "./Products"
import defaultProps from './Products.props'

describe('Component: Products', () => {
  it('should render without errors', () => {
    render(<Products {...defaultProps} />)
    const rowgroup = screen.queryByRole('rowgroup')
    expect(rowgroup).toBeInTheDocument()
  })

  it('should not render not found page when empty products prop', () => {
    const customProps = {
      products: []
    }

    render(<Products {...customProps} />)
    const rowgroup = screen.getByText(/Produto não encontrado!/ig)
    expect(rowgroup).toBeInTheDocument()
  })
})
