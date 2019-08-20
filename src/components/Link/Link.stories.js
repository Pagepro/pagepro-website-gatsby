import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from './Link'

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
    <div style={{background: '#000', padding: '5px'}}>
      <Link
        light
        withArrow
        href="#"
        label="More"
      />
    </div>
  ))
