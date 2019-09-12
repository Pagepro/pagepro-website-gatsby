import React from 'react'
import { storiesOf } from '@storybook/react'

import CtaBox from './CtaBox'

storiesOf('CtaBox', module)
  .addDecorator(storyFn => <div style={{
    background: '#000',
    padding: '5px'
  }}>{storyFn()}</div>)
  .add('default', () => (
    <CtaBox />
  ))
