import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import Input from './Input/Input'
import Checkbox from './Checkbox/Checkbox'
import Radio from './Radio/Radio'

storiesOf('Field', module)
  .add('input', () => (
    <Input
      placeholder="Your name"
      type="text"
    />
  ))
  .add('checkbox', () => (
    <div style={{ background: "#000", padding: "5px" }}>
      <Checkbox
        inputId="chbx1"
        label={(
          <Fragment>
            I read and I accepted <a href="#">Privacy Policy</a>
          </Fragment>
        )}
      />
    </div>
  ))
  .add('radio', () => (
    <div style={{ background: "#000", padding: "5px" }}>
      <Radio
        inputId="rb1"
        label="Radio"
      />
    </div>
  ))
