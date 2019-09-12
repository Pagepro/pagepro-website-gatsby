import React from 'react'
import { storiesOf } from '@storybook/react'

import Logo from './Logo'

storiesOf('Logo', module)
  .addDecorator(storyFn => <div style={{
    background: '#000',
    padding: '5px'
  }}>{storyFn()}</div>)
  .add('default', () => (
    <Logo href="/" />
  ))
