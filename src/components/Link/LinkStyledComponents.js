import styled, { css } from 'styled-components'

import { decorLink } from '../../common/mixins'

const LinkLabelStyled = styled.span`
  ${decorLink}
  font-size: 14px;
`

const LinkStyled = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  line-height: 1;
  color: ${props => props.theme.color.darkGrey};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  cursor: pointer;

  ${props => props.light && css`
    text-transform: lowercase;
    color: ${props => props.theme.color.white};
    font-weight: ${props => props.theme.fontWeight.regular};
  `}

  &:hover {
    ${LinkLabelStyled}::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`

const LinkIconStyled = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  & + ${LinkLabelStyled} {
    margin-left: calc(${props => props.theme.size.gutter} * .375)
  }

  ${LinkLabelStyled} + & {
    margin-left: calc(${props => props.theme.size.gutter} * .375)
  }
`

export {
  LinkLabelStyled,
  LinkIconStyled,
  LinkStyled,
}
