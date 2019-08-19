import styled, { css } from 'styled-components'

import { transition } from '../../common/mixins'
import theme from '../../themes/theme'

const ButtonLinkStyled = styled.a`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  width: auto;
  min-width: ${theme.btn.width};
  font-size: ${theme.fontSize16};
  font-weight: ${theme.fontWeight.semiBold};
  justify-content: center;
  padding: 0 calc(${theme.size.gutter} * 1.5);
  cursor: pointer;
  ${transition}

  /* Primary */
  ${props => props.primary && css`
    background-color: ${theme.color.red};
    color: ${theme.color.white};

    &:hover {
      background-color: ${theme.color.red2};
    }
  `}

  /* Secondary */
  ${props => props.secondary && css`
    background-color: ${theme.color.white};
    color: ${theme.color.red};

    &:hover {
      background-color: ${theme.color.lightBlue};
    }
  `}

  /* Wide */
  ${props => props.wide && css`
    background-color: ${theme.color.white};
    border: 1px solid ${theme.color.grey2};
    min-width: 100%;

    &:hover {
      background-color: ${theme.color.lightGrey};
    }
  `}

  /* Medium */
  ${props => props.medium && css`
    height: ${theme.btn.heightMedium};
  `}

  /* Big */
  ${props => props.big && css`
    height: ${theme.btn.heightBig};
  `}

  /* Left */
  ${props => props.left && css`
    justify-content: flex-start;
  `}
`

export {
  ButtonLinkStyled
}
