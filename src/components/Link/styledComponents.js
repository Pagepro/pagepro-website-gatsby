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
  color: ${theme.color.darkNavy};
  font-weight: ${theme.fontWeight.medium};
  cursor: pointer;

  ${props => props.light && css`
    color: ${theme.color.white};
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
    margin-left: calc(${props => props.theme.gutter.gutter16} * .3);
  }

  ${LinkLabelStyled} + & {
    margin-left: calc(${props => props.theme.gutter.gutter16} * .3);
    margin-top: 2px;
  }
`

export {
  LinkLabelStyled,
  LinkIconStyled,
  LinkStyled,
}
