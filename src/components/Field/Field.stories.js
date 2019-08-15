import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import Input from './Input'
import Checkbox from './Checkbox'

storiesOf('Field', module)
  .add('input', () => (
    <Input
      placeholder="Your name"
      type="text"
    />
  ))
  .add('checkbox', () => (
    <Checkbox
      inputId="1"
      label={(
        <Fragment>
          I read and I accepted <a href="#">Privacy Policy</a>
        </Fragment>
     )}
    />
  ))
