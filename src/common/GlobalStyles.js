import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset-advanced'

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    user-select: auto;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
    font-size: 16px;
    line-height: 1.4;
    color: #2f2f2f;
  }

  iframe,
  img {
    display: block;
    max-width: 100%;
  }
`

export default GlobalStyles
