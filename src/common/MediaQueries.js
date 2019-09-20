import theme from '../themes/theme'

const [
  tablet,
  phone,
] = theme.breakpoints

export default {
  tablet: `min-width: ${tablet}`,
  phone: `min-width: ${phone}`,
}
