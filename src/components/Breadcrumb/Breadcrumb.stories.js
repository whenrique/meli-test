import React from 'react'

import Breadcrumb from './Breadcrumb'
import defaultProps from './Breadcrumb.props'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb
}

const Template = (args) => <Breadcrumb {...defaultProps} />

export const Main = Template.bind({})
