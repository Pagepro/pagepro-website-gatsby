import React from 'react';
import { storiesOf } from '@storybook/react';

import { Typo1, Typo2, Typo3, Typo4, Typo5, Typo6, Typo7, Typo8 } from '.';

const TypographyContainer: React.FC = () => (
  <div
    style={{
      marginBottom: '1rem',
      fontSize: '0.75rem',
    }}
  />
);

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
    <TypographyContainer>Typo 1: 3.052rem // 48.83px</TypographyContainer>

    <Typo2>A Visual Type Scale</Typo2>
    <TypographyContainer>Typo 2: 2.441rem // 39.06px</TypographyContainer>

    <Typo3>A Visual Type Scale</Typo3>
    <TypographyContainer>Typo 3: 1.953rem // 31.25px</TypographyContainer>

    <Typo4>A Visual Type Scale</Typo4>
    <TypographyContainer>Typo 4: 1.563rem // 25.00px</TypographyContainer>

    <Typo5>A Visual Type Scale</Typo5>
    <TypographyContainer>Typo 5: 1.25rem // 20.00px</TypographyContainer>

    <Typo6>A Visual Type Scale</Typo6>
    <TypographyContainer>Typo 6: 1rem // 16px</TypographyContainer>

    <Typo7>A Visual Type Scale</Typo7>
    <TypographyContainer>Typo 7: 0.875rem // 14px</TypographyContainer>

    <Typo8>A Visual Type Scale</Typo8>
    <TypographyContainer>Typo 8: 0.8rem // 12.8px</TypographyContainer>
  </>
));
