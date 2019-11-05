import React from 'react'

import ButtonLinkStyled, { ButtonLinkType, ButtonLinkSize } from './styles'

interface IProps {
  type?: ButtonLinkType
  size?: ButtonLinkSize
  left?: boolean
  className?: string
  href: string
}

const ButtonLink: React.FC<IProps> = ({
  children,
  type,
  ...rest
}) => (
  <ButtonLinkStyled
    {...rest}
    buttonType={type}
  >
    {children}
  </ButtonLinkStyled>
)

ButtonLink.defaultProps = {
  type: ButtonLinkType.primary,
  size: ButtonLinkSize.medium,
}

export default ButtonLink
