import React from 'react'
import { storiesOf } from '@storybook/react'
import StatNumber from './StatNumber'

storiesOf('StatNumber', module)
  .addDecorator(storyFn => <div style={{
     maxWidth: '400px'
  }}>{storyFn()}</div>)
  .add('default', () => (
    <StatNumber
      description="Projects done in 2018"
      count="176"
    />
  ))
