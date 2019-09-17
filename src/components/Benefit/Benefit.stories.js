import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import Benefit from './Benefit'

storiesOf('Benefit', module)
  .addDecorator(storyFn => <div style={{
    background: '#061F2d',
    maxWidth: '260px'
  }}>{storyFn()}</div>)
  .add('default', () => {
    const defaultProps = {
      title: text('Title', 'MODULARITY'),
      description: text('Description', 'Building interface with React components allows to really embrace agile approach to ever-changing business requirements. One component can be seamlessly modified without breaking the others. Thanks to this, we are able to deliver products that suits needs of our customers without unexpected delays and errors.'),
    }

    return (
      <Benefit
        { ...defaultProps }
      />
    )
  })
