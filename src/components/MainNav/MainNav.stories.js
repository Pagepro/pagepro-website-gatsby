import React from 'react'
import { storiesOf } from '@storybook/react'

import MainNav from './MainNav'

storiesOf('MainNav', module)
  .add('default', () => (
    <div style={{ background: "#000", padding: "5px" }}>
      <MainNav/>
    </div>
  ))
