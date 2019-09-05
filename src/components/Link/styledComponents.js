import styled, { css } from 'styled-components'

import { decorLink } from '../../common/mixins'
import theme from '../../themes/theme'

const LinkLabelStyled = styled.span`
  ${decorLink}
  font-size: ${props => props.theme.fontSize.fontSize15};
`

const LinkStyled = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  line-height: 1;
  color: ${theme.color.darkGrey};
  font-weight: ${theme.fontWeight.semiBold};
  cursor: pointer;

  ${props => props.light && css`
    text-transform: lowercase;
    color: ${theme.color.white};
    font-weight: ${theme.fontWeight.regular};
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
