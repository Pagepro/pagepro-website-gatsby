import React from 'react'

import PropTypes from 'prop-types'
import {
  ButtonLinkStyled
} from './styledComponents'

export const types = {
  primary: 'primary',
  secondary: 'secondary'
}

export const sizes = {
  medium: 'medium',
  big: 'big'
}

const ButtonLink = ({
  btnLabel,
  ...rest
}) => (
  <ButtonLinkStyled
    {...rest}
  >
    {btnLabel}
  </ButtonLinkStyled>
)

ButtonLink.propTypes = {
  type: PropTypes.oneOf(Object.keys(types)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  outline: PropTypes.bool,
  left: PropTypes.bool,
  btnUrl: PropTypes.string,
  btnLabel: PropTypes.string,
}

export default ButtonLink
