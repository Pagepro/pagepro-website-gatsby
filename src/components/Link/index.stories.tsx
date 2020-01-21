import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from '.';
storiesOf('Link', module)
  .add('default', () => <Link href="#">Read more</Link>)
  .add('with arrow', () => (
    <Link withArrow iconColor="red" href="#">
      More
    </Link>
  ))
  .add('with github', () => (
    <Link withGithub href="#">
      Github
    </Link>
  ))
  .add('light', () => (
    <div style={{ background: '#000', padding: '0.3125rem' }}>
      <Link light withArrow iconColor="red" href="#">
        more
      </Link>
    </div>
  ))
  .add('light with white arrow', () => (
    <div style={{ background: '#000', padding: '0.3125rem' }}>
      <Link light withArrow iconColor="white" href="#">
        case study
      </Link>
    </div>
  ));
