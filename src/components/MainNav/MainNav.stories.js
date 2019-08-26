import React from 'react'
import { storiesOf } from '@storybook/react'

import MainNav from './MainNav'

storiesOf('MainNav', module)
  .addDecorator(storyFn => <div style={{ background: '#000', padding: '5px' }}>{storyFn()}</div>)
  .add('default', () => (
    <MainNav/>
  ))
