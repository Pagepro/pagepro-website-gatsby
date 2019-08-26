import React from 'react'
import { storiesOf } from '@storybook/react'

import InfoBox from './InfoBox'
import ReactIcon from '../../assets/images/svg/react.svg'
import ReactNativeIcon from '../../assets/images/svg/react-native.svg'
import WordpressIcon from '../../assets/images/svg/wordpress.svg'
import BulletList from '../BulletList/BulletList'
import { Typo8 } from '../Typography/Typography'

storiesOf('InfoBox', module)
  .addDecorator(storyFn => <div style={{ maxWidth: '240px' }}>{storyFn()}</div>)
  .add('default', () => (
    <InfoBox
      heading="Web & Mobile Development"
      src={ReactIcon}
      alt="React"
    >
      <Typo8>Gain access to our senior leaders and benefit from their
      insights into the technology and business domains.</Typo8>
    </InfoBox>
))
  .add('with background', () => (
    <InfoBox
      withBg
      heading="React Development"
      src={ReactNativeIcon}
      alt="React"
    >
      <Typo8>Gain access to our senior leaders and benefit from their
      insights into the technology and business domains.</Typo8>
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
            text: 'we organize internal training courses and workshops'
          },
          {
            text: 'we take part in meetings of the frontend community as participants and speakers'
          },
          {
            text: 'we build and share reusable frontend components, libraries, rules and style guides'
          }
        ]
      }/>
    </InfoBox>
  ))
  .add('centered', () => (
    <InfoBox
      centered
      heading="Web & Mobile Development"
      src={WordpressIcon}
      alt="React"
    >
      <Typo8>Gain access to our senior leaders and benefit from their
      insights into the technology and business domains.</Typo8>
    </InfoBox>
  ))
