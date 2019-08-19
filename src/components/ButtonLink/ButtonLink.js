import React from 'react'

import PropTypes from 'prop-types'
import {
  ButtonLinkStyled
} from './styledComponents'


const ButtonLink = ({
  btnLabel,
  btnUrl,
  func,
  ...otherProps,
}) => (
  <ButtonLinkStyled
    href={btnUrl}
    onClick={func}
    {...otherProps}
  >
    {btnLabel}
  </ButtonLinkStyled>
)

ButtonLink.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  big: PropTypes.bool,
  medium: PropTypes.bool,
  wide: PropTypes.bool,
  left: PropTypes.bool,
  btnUrl: PropTypes.string,
  btnLabel: PropTypes.string,
}

export default ButtonLink
