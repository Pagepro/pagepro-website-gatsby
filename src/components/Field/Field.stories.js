import React from 'react'
import { storiesOf } from '@storybook/react'
import darkWrapperDecorator
  from '../../../.storybook/decorators/darkWrapperDecorator'
import Input from './Input/Input'
import Checkbox from './Checkbox/Checkbox'
import Radio from './Radio/Radio'

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
      inputId="chbx1"
      label={(
        <>
          I read and I accepted &nbsp;
          <a href="#">Privacy Policy</a>
        </>
      )}
    />
  ))
  .add('radio', () => (
    <Radio
      inputId="rb1"
      label="Radio"
    />
  ))
