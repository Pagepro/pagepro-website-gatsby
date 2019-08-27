import React from 'react'
import { storiesOf } from '@storybook/react'

import CtaBox from './CtaBox'

storiesOf('CtaBox', module)
  .add('default', () => (
    <div style={{ background: "#000", padding: "5px" }}>
      <CtaBox />
    </div>
  ))