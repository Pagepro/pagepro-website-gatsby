import React from 'react'
import { storiesOf } from '@storybook/react'

import MainNav from './MainNav'

storiesOf('MainNav', module)
  .addDecorator(story => <div style={{
    background: '#000',
    padding: '5px'
  }}>{story()}</div>)
  .add('default', () => (
    <MainNav/>
  ))
