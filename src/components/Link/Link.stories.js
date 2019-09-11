import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import Link from './Link'

storiesOf('Link', module)
  .add('default', () => {
    const defaultProps = {
      label: text('Link text', 'Read more'),
      light: boolean('isLight', false),
      withGithub: boolean('withGithub', false),
      withArrow: boolean('withArrow', false),
    }
    return (
      <div style={{background: '#eee', padding: '5px'}}>
        <Link
          { ...defaultProps }
          href='#'
        />
      </div>
    )
  })
