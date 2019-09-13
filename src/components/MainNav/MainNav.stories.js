import React from 'react'
import { storiesOf } from '@storybook/react'
import theme from '../../../.storybook/theme'
import MainNav from './MainNav'

storiesOf('MainNav', module)
  .addParameters({ options: { theme: theme } })
  .add('default', () => (
    <MainNav/>
  ))
