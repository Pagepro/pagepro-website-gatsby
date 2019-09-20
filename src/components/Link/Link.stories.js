import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from './Link'
import theme from '../../themes/theme'

storiesOf('Link', module)
  .add('default', () => (
    <Link
      href="#"
      label="Read more"
    />
  ))
  .add('with arrow', () => (
    <Link
      withArrow
      iconColor={theme.color.red}
      href="#"
      label="More"
    />
  ))
  .add('with github', () => (
    <Link
      withGithub
      href="#"
      label="Github"
    />
  ))
  .add('light', () => (
    <div style={{ background: '#000', padding: '5px' }}>
      <Link
        light
        withArrow
        iconColor={theme.color.red}
        href="#"
        label="more"
      />
    </div>
  ))
  .add('light with white arrow', () => (
    <div style={{ background: '#000', padding: '5px' }}>
      <Link
        light
        withArrow
        iconColor={theme.color.white}
        href="#"
        label="case study"
      />
    </div>
  ))
