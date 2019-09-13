import React, { Fragment } from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming';
import theme from '../src/themes/theme'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/common/GlobalStyles'

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles/>
      {story()}
    </Fragment>
  </ThemeProvider>
))

addParameters({
  options: {
    theme: themes.light,
  },
})

addDecorator(withKnobs)

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

global.__PATH_PREFIX__ = '';
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname)
}

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
