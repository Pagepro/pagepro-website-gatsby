import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import StatNumber from './StatNumber'

storiesOf('StatNumber', module)
  .add('default', () => {
    const defaultProps = {
      description: text('Description', 'Projects done in 2018'),
      count: text('Count', '176'),
      reversed: boolean('isReversed', false),
    }
    return (
      <StatNumber
        {...defaultProps}
      />
    )
  })
