import * as React from 'react'

import LogoLinkStyled from './styles'

const LogoSvg = require('../../assets/images/svg/logo.svg') as string

interface IProps {
  href: string
}

const Logo: React.FC<IProps> = props => (
  <LogoLinkStyled {...props}>
    <img src={LogoSvg} alt="Pagepro" />
  </LogoLinkStyled>
)

export default Logo
