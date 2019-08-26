import React from 'react'
import { storiesOf } from '@storybook/react'

import BulletList from './BulletList'

storiesOf('BulletList', module)
  .add('default', () => (
    <BulletList />
  ))
