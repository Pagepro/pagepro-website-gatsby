import React from 'react';
import { storiesOf } from '@storybook/react';

import { Typo1, Typo2, Typo3, Typo4, Typo5, Typo6, Typo7 } from '.';

storiesOf('Typography', module).add('typo', () => (
  <>
    <Typo4
      style={{
        fontWeight: 600,
        marginBottom: '1.875rem',
      }}
    >
      Visual TypeScale / Major Third (1.25) / Base Size: 16px
    </Typo4>
    <Typo1>A Visual Type Scale</Typo1>
    <p
      style={{
        marginBottom: '1.25rem',
        fontSize: '0.75rem',
      }}
    >
      Typo 1: 3.052rem // 48.83px
    </p>

    <Typo2>A Visual Type Scale</Typo2>
    <p
      style={{
        marginBottom: '1.25rem',
        fontSize: '0.75rem',
      }}
    >
      Typo 2: 2.441rem // 39.06px
    </p>

    <Typo3>A Visual Type Scale</Typo3>
    <p
      style={{
        marginBottom: '1.25rem',
        fontSize: '0.75rem',
      }}
    >
      Typo 3: 1.953rem // 31.25px
    </p>

    <Typo4>A Visual Type Scale</Typo4>
    <p
      style={{
        marginBottom: '1.25rem',
        fontSize: '0.75rem',
      }}
    >
      Typo 4: 1.563rem // 25.00px
    </p>

    <Typo5>A Visual Type Scale</Typo5>
    <p
      style={{
        marginBottom: '1.25rem',
        fontSize: '0.75rem',
      }}
    >
      Typo 5: 1.25rem // 20.00px
    </p>

    <Typo6>A Visual Type Scale</Typo6>
    <p
      style={{
        marginBottom: '1.25rem',
        fontSize: '0.75rem',
      }}
    >
      Typo 6: 1rem // 16px
    </p>

    <Typo7>A Visual Type Scale</Typo7>
    <p
      style={{
        marginBottom: '1.25rem',
        fontSize: '0.75rem',
      }}
    >
      Typo 7: 0.8rem // 12.8px
    </p>
  </>
));
