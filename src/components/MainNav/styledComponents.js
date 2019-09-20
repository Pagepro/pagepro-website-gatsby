import styled from 'styled-components'

import { decorLink } from '../../common/mixins'
import theme from '../../themes/theme'

const MainNavStyled = styled.ul`
  display: flex;
`

const MainNavItemStyled = styled.li`
  &:not(:last-child) {
    margin-right: ${props => props.theme.gutter.gutter32};
  }
`

const MainNavLinkStyled = styled.a`
  ${decorLink({
    height: '2px',
    hoverUnderlineBg: `${theme.color.red}`,
  })}
  display: block;
  color: ${props => props.theme.color.lightGrey};
  font-weight: ${props => props.theme.fontWeight.semiBold};
`

export {
  MainNavStyled,
  MainNavItemStyled,
  MainNavLinkStyled,
}
