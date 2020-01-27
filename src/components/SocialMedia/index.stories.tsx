import React from 'react';
import { storiesOf } from '@storybook/react';

import darkWrapperDecorator from '../../../.storybook/decorators/darkWrapperDecorator';
import SocialMedia from '.';
import Instagram from '../Icons/Instagram';
import Twitter from '../Icons/Twitter';
import LinkedIn from '../Icons/LinkedIn';
import Facebook from '../Icons/Facebook';
import YouTube from '../Icons/YouTube';

storiesOf('SocialMedia', module)
  .addDecorator(darkWrapperDecorator)
  .add('default', () => (
    <SocialMedia
      items={[
        {
          href: 'https://www.instagram.com/pagepro_/',
          icon: <Instagram />,
        },
        {
          href: 'https://www.linkedin.com/company/pagepro',
          icon: <LinkedIn />,
        },
        {
          href: 'https://twitter.com/pagepro_agency',
          icon: <Twitter />,
        },
        {
          href: 'https://www.facebook.com/thisispagepro/',
          icon: <Facebook />,
        },
        {
          href: '#',
          icon: <YouTube />,
        },
      ]}
    />
  ));
