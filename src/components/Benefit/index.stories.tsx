import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Benefit from '.';

storiesOf('Benefit', module)
  .addDecorator(story => <div style={{ background: '#061F2d', maxWidth: '260px' }}>{story()}</div>)
  .add('default', () => {
    const defaultProps = {
      title: text('Title', 'MODULARITY'),
      description: text(
        'Description',
        'Building interface with React components allows to really embrace agile approach to ever-changing business requirements. One component can be seamlessly modified without breaking the others. Thanks to this, we are able to deliver products that suits needs of our customers without unexpected delays and errors.'
      ),
    };

    return <Benefit {...defaultProps} />;
  });
