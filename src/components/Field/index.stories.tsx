import * as React from 'react'
import { storiesOf } from '@storybook/react'

import darkWrapperDecorator
  from '../../../.storybook/decorators/darkWrapperDecorator'
import Input from './Input'
import Checkbox from './Checkbox'
import Radio from './Radio'

storiesOf('Field', module)
  .addDecorator(darkWrapperDecorator)
  .add('input', () => (
    <Input
      placeholder="Your name"
      type="text"
    />
  ))
  .add('checkbox', () => (
    <Checkbox
      id="chbx1"
    >
      I read and I accepted &nbsp;
      <a href="#">Privacy Policy</a>
    </Checkbox>
  ))
  .add('radio', () => (
    <Radio
      id="rb1"
    >
      Radio
    </Radio>
  ))
