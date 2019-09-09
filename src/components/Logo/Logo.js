import React from 'react'

import PropTypes from 'prop-types'
import LogoSvg from '../../assets/images/svg/logo.svg'
import { LogoLinkStyled } from './styledComponents'

const Logo = props => (
  <LogoLinkStyled {...props}>
    <img src={LogoSvg} alt="Pagepro" />
  </LogoLinkStyled>
)

Logo.propTypes = {
  href: PropTypes.string,
}

export default Logo
