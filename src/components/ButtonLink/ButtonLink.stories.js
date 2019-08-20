import React from 'react'
import { storiesOf } from '@storybook/react'

import ButtonLink, { types, sizes } from './ButtonLink'

storiesOf('ButtonLink', module)
  .add('primary medium', () => (
    <ButtonLink
      type={types.primary}
      size={sizes.medium}
      btnUrl="#"
      btnLabel="Hire us"
    />
  ))
  .add('secondary big left', () => (
    <ButtonLink
      type={types.secondary}
      size={sizes.big}
      left
      btnUrl="#"
      btnLabel="Join us"
    />
  ))
  .add('wide', () => (
    <ButtonLink
      wide
      size={sizes.big}
      btnUrl="#"
      btnLabel="See All on GitHub"
    />
  ))
