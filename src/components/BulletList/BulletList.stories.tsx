import * as React from 'react'
import { storiesOf } from '@storybook/react'

import BulletList from './BulletList'

storiesOf('BulletList', module)
  .add('default', () => (
    <BulletList
      items={
        [
          'we organize internal training courses and workshops',
          `we take part in meetings of the frontend community as
          participants and speakers`,
          `we build and share reusable frontend components, libraries,
          rules and style guides`,
        ]
      }
    />
  ))
