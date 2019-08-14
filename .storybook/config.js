import React, { Fragment } from 'react'
import { configure, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import theme from '../src/themes/theme'
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
