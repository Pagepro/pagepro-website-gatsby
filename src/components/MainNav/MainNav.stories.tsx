import * as React from 'react'
import { storiesOf } from '@storybook/react'
import darkWrapperDecorator
  from '../../../.storybook/decorators/darkWrapperDecorator'
import MainNav from './MainNav'

storiesOf('MainNav', module)
  .addDecorator(darkWrapperDecorator)
  .add('default', () => (
    <MainNav />
  ))
