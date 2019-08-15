import React from 'react'

import PropTypes from 'prop-types'
import {
  ButtonStyled,
  ButtonLabelStyled,
} from './ButtonStyledComponents'

const Button = ({
  btnLabel,
  btnUrl,
  func,
  ...otherProps,
}) => (
  <ButtonStyled
    href={btnUrl}
    onClick={func}
    {...otherProps}
  >
    <ButtonLabelStyled>
      {btnLabel}
    </ButtonLabelStyled>
  </ButtonStyled>
)

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  big: PropTypes.bool,
  medium: PropTypes.bool,
  wide: PropTypes.bool,
  left: PropTypes.bool,
  btnUrl: PropTypes.string,
  btnLabel: PropTypes.string,
}

export default Button
