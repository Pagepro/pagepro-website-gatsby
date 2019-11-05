import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from '.'
import theme from '../../themes/theme'

storiesOf('Link', module)
  .add('default', () => (
    <Link
      href="#"
    >
      Read more
    </Link>
  ))
  .add('with arrow', () => (
    <Link
      withArrow
      iconColor={theme.color.red}
      href="#"
    >
      More
    </Link>
  ))
  .add('with github', () => (
    <Link
      withGithub
      href="#"
    >
      Github
    </Link>
  ))
  .add('light', () => (
    <div style={{ background: '#000', padding: '5px' }}>
      <Link
        light
        withArrow
        iconColor={theme.color.red}
        href="#"
      >
        more
      </Link>
    </div>
  ))
  .add('light with white arrow', () => (
    <div style={{ background: '#000', padding: '5px' }}>
      <Link
        light
        withArrow
        iconColor={theme.color.white}
        href="#"
      >
        case study
      </Link>
    </div>
  ))
