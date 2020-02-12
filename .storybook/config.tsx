import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';

import theme from '../src/themes/theme';
import GlobalStyles from '../src/common/GlobalStyles';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
));

addDecorator(withKnobs);

// @ts-ignore
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// @ts-ignore
global.__PATH_PREFIX__ = '';
// @ts-ignore
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addParameters({ viewport: { viewports: 'responsive' } });
