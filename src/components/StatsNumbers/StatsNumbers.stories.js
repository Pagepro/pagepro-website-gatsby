import React from 'react'
import { storiesOf } from '@storybook/react'

import StatsNumbers from './StatsNumbers'

storiesOf('StatsNumbers', module)
  .addDecorator(storyFn => <div style={{
     maxWidth: '400px'
  }}>{storyFn()}</div>)
  .add('default', () => (
    <StatsNumbers
      description="Projects done in 2018"
      number="176"
    />
  ))
