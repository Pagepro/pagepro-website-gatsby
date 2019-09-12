import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import StatNumber from './StatNumber'

storiesOf('StatNumber', module)
  .addDecorator(storyFn => <div style={{
     maxWidth: '400px'
  }}>{storyFn()}</div>)
  .add('default', () => {
    const defaultProps = {
      description: text('Description', 'Projects done in 2018'),
      count: text('Count', '176'),
    }
    return (
      <StatNumber
        { ...defaultProps }
      />
    )
  })
