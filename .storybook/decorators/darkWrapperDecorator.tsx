import React from 'react';
import { RenderFunction } from '@storybook/react';

import theme from '../theme';

const darkWrapperDecorator = (story: RenderFunction) => (
  <div
    style={{
      background: `${theme.colors.background}`,
      padding: `${theme.spaces.space6}`,
    }}
  >
    {story()}
  </div>
);

export default darkWrapperDecorator;
