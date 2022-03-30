import { render, screen } from "@testing-library/react"

import Breadcrumb from "./Breadcrumb"
import defaultProps from './Breadcrumb.props'

describe('Component: Breadcrumb', () => {
  it('should render without errors', () => {
    render(<Breadcrumb {...defaultProps} />)
    const breadcrumb = screen.queryByRole('navigation')
    expect(breadcrumb).toBeInTheDocument()
  })

  it('should not render with empty path prop', () => {
    const customProp = []
    render(<Breadcrumb path={customProp} />)
    const breadcrumb = screen.queryByTestId('breadcrumb')
    expect(breadcrumb).toBeNull()
  })

  it('should render all bredcrumb path', () => {
    const { path } = defaultProps
    render(<Breadcrumb {...defaultProps} />)
    const breadcrumb = screen.queryByTestId('breadcrumb')
    expect(breadcrumb.childElementCount).toBe(path.length)
  })
})
