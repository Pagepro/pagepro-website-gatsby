import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Heading7,
  Heading8,
  Heading9,
  Heading10,
  Heading11,
  Typo1,
  Typo2,
  Typo3,
  Typo4,
  Typo5,
  Typo6,
  Typo7,
  Typo8,
  Typo9,
  Typo10,
  Typo11,
} from '../Typography/Typography'
import theme from '../../themes/theme'

storiesOf('Typography', module)
  .add('headings', () => (
    <Fragment>
      <Heading1
        fontWeight={theme.fontWeight.semiBold}
        style={{marginBottom: '10px'}}>
        Projects
      </Heading1>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Heading 1: 32px / 52px
      </p>

      <Heading2
        style={{marginBottom: '10px'}}
        fontWeight={theme.fontWeight.semiBold}>
        What is React?
      </Heading2>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Heading 2: 26px / 40px
      </p>

      <Heading3
        fontWeight={theme.fontWeight.semiBold}
        style={{marginBottom: '10px'}}>
        React Developers who deliver.
      </Heading3>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Heading 3: 22px / 36px
      </p>

      <Heading4
        fontWeight={theme.fontWeight.semiBold}
        style={{marginBottom: '10px'}}>
        Learn something new every day Working together
      </Heading4>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Heading 4: 30px
      </p>

      <Heading5
        style={{marginBottom: '10px'}}
        fontWeight={theme.fontWeight.semiBold}>
        Why us?
      </Heading5>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Heading 5: 32px / 30px
      </p>

      <Heading6
        style={{marginBottom: '10px'}}
        fontWeight={theme.fontWeight.semiBold}>
        We are a community of high-class developers
        specialized in building user interfaces.
      </Heading6>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Heading 6: 28px / 30px
      </p>

      <Heading7
        style={{marginBottom: '10px'}}
        fontWeight={theme.fontWeight.semiBold}>
        Newsletter
      </Heading7>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Heading 7: 28px
      </p>

      <Heading8
        style={{marginBottom: '10px'}}
        fontWeight={theme.fontWeight.semiBold}>
        Gated talent
      </Heading8>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Heading 8: 24px
      </p>

      <Heading9
        style={{marginBottom: '10px'}}
        fontWeight={theme.fontWeight.semiBold}>
        At PagePro, we are developing the web in the heart of Europe.
      </Heading9>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Heading 9: 26px
      </p>

      <Heading10
        style={{marginBottom: '10px'}}
        fontWeight={theme.fontWeight.semiBold}>
        Front-end Development
      </Heading10>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Heading 10: 18px / 24px
       </p>

      <Heading11
        style={{marginBottom: '10px'}}
        fontWeight={theme.fontWeight.semiBold}>
        Experienced Consultants
      </Heading11>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Heading 11: 16px
      </p>
    </Fragment>
  ))
  .add('typo', () => (
    <Fragment>
      <Typo1
        style={{marginBottom: '10px'}}>
        Success!
      </Typo1>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Typo 1: 26px
      </p>

      <Typo2
        style={{marginBottom: '10px'}}>
        We provide startups and scale up businesses with hands-on technical
        leadership and high-performing engeneering teams.
      </Typo2>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Typo 2: 22px
      </p>

      <Typo3
        style={{marginBottom: '10px'}}>
        Ilona Filipi
      </Typo3>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}
        >Typo 3: 20px
      </p>

      <Typo4
        style={{marginBottom: '10px'}}>
        Pagepro Sp. z o.o.
      </Typo4>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Typo 4: 18px
      </p>

      <Typo5
        style={{marginBottom: '10px'}}>
        Junior Javascript Developer
      </Typo5>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Typo 5: 16px
      </p>

      <Typo6
        style={{marginBottom: '10px'}}>
        Back to Case studies
      </Typo6>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Typo 6: 16px / 18px
      </p>

      <Typo7
        style={{marginBottom: '10px'}}>
        Pagepro LTD
      </Typo7>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Typo 7: 15px
      </p>

      <Typo8
        style={{marginBottom: '10px'}}>
        More
      </Typo8>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Typo 8: 14px
      </p>

      <Typo9
        style={{marginBottom: '10px'}}>
        Case study
      </Typo9>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Typo 9: 12px
      </p>

      <Typo10
        style={{marginBottom: '10px'}}>
        What we do
      </Typo10>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Typo 10: 11px / 14px
      </p>

      <Typo11
        style={{marginBottom: '10px'}}>
        Privacy Policy
      </Typo11>
      <p style={{marginBottom: '30px',
        textTransform: 'uppercase',
        fontSize: '12px'}}>
        Typo 11: 11px / 12px</p>
    </Fragment>
  ))

