import React from 'react'
import Header from './Header'

export default {
  title: 'Header',
  component: Header
}

const Template = (args) => <Header onSubmit={() => console.log('submit')} />

export const Main = Template.bind({})
