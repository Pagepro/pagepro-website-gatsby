import styled from 'styled-components'

import { decorLink } from '../../common/mixins'

const MainNavStyled = styled.ul`
  display: flex;
`

const MainNavItemStyled = styled.li`
  &:not(:last-child) {
    margin-right: calc(${props => props.theme.size.gutter} * 2.25);
  }
`

const MainNavLinkStyled = styled.a`
  ${decorLink}
  display: block;
  color: ${props => props.theme.color.lightGrey};
  font-weight: ${props => props.theme.fontWeight.semiBold};
`

export {
  MainNavStyled,
  MainNavItemStyled,
  MainNavLinkStyled
}
