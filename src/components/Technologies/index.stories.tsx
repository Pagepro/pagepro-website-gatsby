import React from 'react';
import { storiesOf } from '@storybook/react';

import { technologies } from '../../mocks/technologiesMock';
import Technologies from '.';

storiesOf('Technologies', module).add('default', () => <Technologies items={technologies} />);
