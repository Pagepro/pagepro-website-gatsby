import * as React from 'react'
import { storiesOf } from '@storybook/react'
import darkWrapperDecorator
  from '../../../.storybook/decorators/darkWrapperDecorator'
import Logo from './Logo'

storiesOf('Logo', module)
  .addDecorator(darkWrapperDecorator)
  .add('default', () => (
    <Logo href="/" />
  ))
