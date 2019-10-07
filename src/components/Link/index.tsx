import * as React from 'react'
import {
  LinkLabelStyled,
  LinkIconStyled,
  LinkStyled,
} from './styledComponents'
import GitHub from '../../assets/svg/GitHub'
import ArrowRight from '../../assets/svg/ArrowRight'

interface IProps {
  href: string
  withGithub?: boolean
  withArrow?: boolean
  iconColor?: string
  light?: boolean
}

const Link: React.FC<IProps> = ({
  withGithub,
  children,
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
    <LinkLabelStyled>{children}</LinkLabelStyled>
    {withArrow && (
      <LinkIconStyled>
        <ArrowRight fontSize="8px" fill={iconColor} />
      </LinkIconStyled>
    )}
  </LinkStyled>
)

Link.defaultProps = {
  iconColor: '',
  light: false,
  withArrow: false,
  withGithub: false,
}

export default Link
