import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from './Link'

storiesOf('Link', module)
  .add('default', () => (
    <Link
      linkUrl="#"
      linkLabel="Read more"
    />
	))
  .add('with arrow', () => (
		<Link
      withArrow
      linkUrl="#"
      linkLabel="More"
    />
  ))
  .add('with github', () => (
    <Link
      withGithub
      linkUrl="#"
      linkLabel="Github"
    />
  ))
  .add('light', () => (
    <div style={{background: '#000', padding: '5px'}}>
      <Link
        light
        withArrow
        linkUrl="#"
        linkLabel="More"
      />
    </div>
  ))
