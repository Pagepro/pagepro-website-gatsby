import theme from '../themes/theme'

const [
  tablet,
  phone,
 ] = theme.breakpoints

export const bp = {
  tablet: `min-width: ${tablet}`,
  phone: `min-width: ${phone}`,
}

// Example of use
// @media (${bp.tablet}) {}
