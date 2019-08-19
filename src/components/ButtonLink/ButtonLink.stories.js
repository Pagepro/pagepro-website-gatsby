import React from 'react'
import { storiesOf } from '@storybook/react'

import ButtonLink from './ButtonLink'

storiesOf('ButtonLink', module)
  .add('primary medium', () => (
    <ButtonLink
      primary
      medium
      btnUrl="#"
      btnLabel="Hire us"
    />
  ))
  .add('secondary big left', () => (
    <ButtonLink
      secondary
      big
      left
      btnUrl="#"
      btnLabel="Join us"
    />
  ))
  .add('wide', () => (
    <ButtonLink
      wide
      big
      btnUrl="#"
      btnLabel="See All on GitHub"
    />
  ))
