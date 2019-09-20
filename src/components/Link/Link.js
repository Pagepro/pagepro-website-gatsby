import React from 'react'
import PropTypes from 'prop-types'
import {
  LinkLabelStyled,
  LinkIconStyled,
  LinkStyled,
} from './styledComponents'
import GitHub from '../../assets/svg/GitHub'
import ArrowRight from '../../assets/svg/ArrowRight'

const Link = ({
  withGithub,
  label,
  withArrow,
  iconColor,
  ...rest
}) => (
  <LinkStyled
    {...rest}
  >
    {withGithub && (
      <LinkIconStyled>
        <GitHub fontSize="16px" />
      </LinkIconStyled>
    )}
    <LinkLabelStyled>{label}</LinkLabelStyled>
    {withArrow && (
      <LinkIconStyled>
        <ArrowRight fontSize="8px" fill={iconColor} />
      </LinkIconStyled>
    )}
  </LinkStyled>
)

Link.propTypes = {
  href: PropTypes.string.isRequired,
  withArrow: PropTypes.bool,
  withGithub: PropTypes.bool,
  light: PropTypes.bool,
  label: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
}

Link.defaultProps = {
  iconColor: '',
  light: false,
  withArrow: false,
  withGithub: false,
}

export default Link
