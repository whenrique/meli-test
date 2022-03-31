import React from 'react'

import Products from './Products'
import defaultProps from './Products.props'

export default {
  title: 'Products',
  component: Products
}

const Template = (args) => <Products {...defaultProps} />

export const Main = Template.bind({})
