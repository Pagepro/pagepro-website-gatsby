import React from 'react'
import theme from '../theme'

const darkWrapperDecorator = story => <div style={{
  background: `${theme.background}`,
  padding: `${theme.padding}`
}}>{story()}</div>

export default darkWrapperDecorator
