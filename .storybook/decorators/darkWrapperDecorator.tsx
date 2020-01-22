import React from 'react';
import theme from '../theme';
import { RenderFunction } from '@storybook/react';

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
