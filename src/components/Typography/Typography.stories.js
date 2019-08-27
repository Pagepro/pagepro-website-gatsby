import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import {
  Typo1,
  Typo2,
  Typo3,
  Typo4,
  Typo5,
  Typo6,
  Typo7
} from '../Typography/Typography'

storiesOf('Typography', module)
  .add('typo', () => (
    <Fragment>
      <Typo4 style={{
        fontWeight: 600,
        marginBottom: '30px',
      }}>
        Visual TypeScale / Major Third (1.25) / Base Size: 15px
      </Typo4>
      <Typo1>A Visual Type Scale</Typo1>
      <p style={{
        marginBottom: '20px',
        fontSize: '12px'
      }}>
        Typo 1: 3.052rem // 45.78px
      </p>

      <Typo2>A Visual Type Scale</Typo2>
      <p style={{
        marginBottom: '20px',
        fontSize: '12px'
      }}>
        Typo 2: 2.441rem // 36.62px
      </p>

      <Typo3>A Visual Type Scale</Typo3>
      <p style={{
        marginBottom: '20px',
        fontSize: '12px'
      }}>
        Typo 3: 1.953rem // 29.30px
      </p>

      <Typo4>A Visual Type Scale</Typo4>
      <p style={{
        marginBottom: '20px',
        fontSize: '12px'
      }}>
        Typo 4: 1.563rem // 23.44px
      </p>

      <Typo5>A Visual Type Scale</Typo5>
      <p style={{
        marginBottom: '20px',
        fontSize: '12px'
      }}>
        Typo 5: 1.25rem // 18.75px
      </p>

      <Typo6>A Visual Type Scale</Typo6>
      <p style={{
        marginBottom: '20px',
        fontSize: '12px'
      }}>
        Typo 6: 1rem // 15px
      </p>

      <Typo7>A Visual Type Scale</Typo7>
      <p style={{
        marginBottom: '20px',
        fontSize: '12px'
      }}>
        Typo 7: 0.8rem // 12px
      </p>
    </Fragment>
  ))

