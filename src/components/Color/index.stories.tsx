import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Color from '.'

storiesOf('Color', module)
  .add('default', () => (
    <Color />
  ))
