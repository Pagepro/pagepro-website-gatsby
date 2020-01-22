import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import StatNumber from '.';

storiesOf('StatNumber', module).add('default', () => {
  const defaultProps = {
    description: text('Description', 'Projects done in 2018'),
    count: text('Count', '176'),
  };

  return <StatNumber {...defaultProps} />;
});
