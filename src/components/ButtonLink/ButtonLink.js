import React from 'react'
import PropTypes from 'prop-types'
import ButtonLinkStyled, { types, sizes } from './styledComponents'

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
  href: PropTypes.string.isRequired,
  btnLabel: PropTypes.string.isRequired,
}

ButtonLink.defaultProps = {
  type: 'primary',
  size: 'medium',
}

export default ButtonLink
