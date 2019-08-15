import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Button', module)
  .add('primary medium', () => (
    <Button
      primary
      medium
      btnUrl="#"
      btnLabel="Hire us"
    />
  ))
  .add('secondary big left', () => (
    <Button
      secondary
      big
      left
      btnUrl="#"
      btnLabel="Join us"
    />
  ))
