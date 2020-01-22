import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Project from '.';

const ProjectImg = require('../../assets/images/project-1.jpg') as string;

storiesOf('Project', module)
  .addDecorator(story => <div style={{ maxWidth: '942px' }}>{story()}</div>)
  .add('default', () => {
    const defaultProps = {
      label: text('Label', 'Gated Talent'),
      desc: text(
        'Description',
        'GatedTalent platform meets the needs of executives with exceptional skills seeking to engage with executive recruiters over the course of their career.'
      ),
      technologies: text('Technologies', 'Technology: React, Sass'),
      reversed: boolean('isReversed', false),
    };

    return <Project src={ProjectImg} alt="Picture" {...defaultProps} />;
  });
