import React from 'react'
import theme from '../theme'
import { RenderFunction } from '@storybook/react'

const darkWrapperDecorator = (story: RenderFunction) => <div style={{
  background: `${theme.background}`,
  padding: `${theme.padding}`
}}>{story()}</div>

export default darkWrapperDecorator
