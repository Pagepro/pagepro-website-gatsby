import styled, { css } from 'styled-components'

import { transition } from '../../common/mixins'
import { types, sizes } from './ButtonLink'

const ButtonLinkStyled = styled.a`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  width: auto;
  min-width: ${props => props.theme.btn.width};
  font-size: ${props => props.theme.fontSize16};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  justify-content: center;
  padding: 0 calc(${props => props.theme.size.gutter} * 1.5);
  cursor: pointer;
  ${transition}

  /* Primary */
  ${({ type }) => type === types.primary && css`
    background-color: ${props => props.theme.color.red};
    color: ${props => props.theme.color.white};

    &:hover {
      background-color: ${props => props.theme.btn.primaryBgHover};
    }
  `}

  /* Secondary */
  ${({ type }) => type === types.secondary && css`
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.red};

    &:hover {
      background-color: ${props => props.theme.btn.secondaryBgHover};
    }
  `}

  /* Medium */
  ${({ size }) => size === sizes.medium && css`
    height: ${props => props.theme.btn.heightMedium};
  `}

  /* Big */
  ${({ size }) => size === sizes.big && css`
    height: ${props => props.theme.btn.heightBig};
  `}

  /* Outline */
  ${({ outline }) => outline && css`
    background-color: ${props => props.theme.color.white};
    border: 1px solid ${props => props.theme.btn.outlineColor};
    min-width: 100%;

    &:hover {
      background-color: ${props => props.theme.color.lightGrey};
    }
  `}

  /* Left */
  ${({ left }) => left && css`
    justify-content: flex-start;
  `}
`

export {
  ButtonLinkStyled
}
