import React from 'react'
import { storiesOf } from '@storybook/react'

import InfoBox from './InfoBox'
import ReactIcon from '../../assets/images/svg/react.svg'
import ReactNativeIcon from '../../assets/images/svg/react-native.svg'
import WordPressIcon from '../../assets/images/svg/word-press.svg'
import BulletList from '../BulletList/BulletList'
import Wrapper from '../Wrapper/Wrapper'
import theme from '../../themes/theme'
import { Typo6 } from '../Typography'

storiesOf('InfoBox', module)
  .addDecorator(
    story => (
      <div style={{ maxWidth: '240px' }}>
        {story()}
      </div>
    )
  )
  .add('default', () => (
    <InfoBox
      heading="Web & Mobile Development"
      src={ReactIcon}
      alt="React"
    >
      <Typo6>
        Gain access to our senior leaders and benefit from their
        insights into the technology and business domains.
      </Typo6>
    </InfoBox>
  ))
  .add('with list', () => (
    <InfoBox
      withBg
      heading="Web & Mobile Development"
      src={ReactIcon}
      alt="React"
      title="In our portfolio you can find:"
    >
      <BulletList itemsArray={
        [
          {
            text: 'we organize internal training courses and workshops',
          },
          {
            text: `we take part in meetings of the frontend community as
            participants and speakers`,
          },
          {
            text: `we build and share reusable frontend components, libraries,
            rules and style guides`,
          },
        ]
      }
      />
    </InfoBox>
  ))
  .add('with wrapper (bg and padding)', () => (
    <Wrapper
      background={theme.color.white}
      padding={theme.gutter.gutter24}
    >
      <InfoBox
        heading="React Development"
        src={ReactNativeIcon}
        alt="React"
      >
        <Typo6>
          Gain access to our senior leaders and benefit from their
          insights into the technology and business domains.
        </Typo6>
      </InfoBox>
    </Wrapper>
  ))
  .add('centered', () => (
    <InfoBox
      centered
      heading="Web & Mobile Development"
      src={WordPressIcon}
      alt="React"
    >
      <Typo6>
        Gain access to our senior leaders and benefit from their
        insights into the technology and business domains.
      </Typo6>
    </InfoBox>
  ))
