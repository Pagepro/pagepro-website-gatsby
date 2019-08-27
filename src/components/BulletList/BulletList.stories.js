import React from 'react'
import { storiesOf } from '@storybook/react'

import BulletList from './BulletList'

storiesOf('BulletList', module)
  .add('default', () => (
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
  ))
