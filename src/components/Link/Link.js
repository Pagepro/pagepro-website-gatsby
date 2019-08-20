import React from 'react'

import PropTypes from 'prop-types'
import {
  LinkLabelStyled,
  LinkIconStyled,
  LinkStyled
} from './styledComponents'
import GitHub from '../../assets/svg/GitHub'
import ArrowRight from '../../assets/svg/ArrowRight'


const Link = ({
  withGithub,
  label,
  withArrow,
  ...rest
}) => (
  <LinkStyled
    {...rest}
  >
    {withGithub &&
      <LinkIconStyled>
        <GitHub fontSize="16px"/>
      </LinkIconStyled>
    }
    <LinkLabelStyled>{label}</LinkLabelStyled>
    {withArrow &&
      <LinkIconStyled>
        <ArrowRight fontSize="7px"/>
      </LinkIconStyled>
    }
  </LinkStyled>
)

Link.propTypes = {
  linkUrl: PropTypes.string,
  linkLabel: PropTypes.string,
  withArrow: PropTypes.bool,
  withGithub: PropTypes.bool,
  light: PropTypes.bool
}

export default Link
