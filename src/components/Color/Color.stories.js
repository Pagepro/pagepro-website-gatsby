import React from 'react'
import { storiesOf } from '@storybook/react'

import Color from './Color'

storiesOf('Color', module)
  .add('default', () => (
    <Color />
  ))
