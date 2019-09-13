import React from 'react'
import { storiesOf } from '@storybook/react'
import theme from '../../../.storybook/theme'

import SocialMedia from './SocialMedia'
import Instagram from '../../assets/svg/Instagram'
import Twitter from '../../assets/svg/Twitter'
import LinkedIn from '../../assets/svg/LinkedIn'
import Facebook from '../../assets/svg/Facebook'
import YouTube from '../../assets/svg/YouTube'

storiesOf('SocialMedia', module)
  .addParameters({ options: { theme: theme } })
  .add('default', () => (
    <SocialMedia itemsArray = {
      [
        {
          href: 'https://www.instagram.com/pagepro_/',
          icon: <Instagram />
        },
        {
          href: 'https://www.linkedin.com/company/pagepro',
          icon: <LinkedIn />
        },
        {
          href: 'https://twitter.com/pagepro_agency',
          icon: <Twitter />
        },
        {
          href: 'https://www.facebook.com/thisispagepro/',
          icon: <Facebook />
        },
        {
          href: '#',
          icon: <YouTube />
        },
      ]
    }/>
  ))
