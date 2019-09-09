import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { transition } from '../../common/mixins'
import { types, sizes } from './ButtonLink'

const ButtonLinkStyled = styled.a`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  width: auto;
  min-width: ${props => props.theme.btn.width};
  font-size: ${props => props.theme.fontSize15};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  justify-content: center;
  padding: 0 calc(${props => props.theme.gutter.gutter24});
  cursor: pointer;
  ${transition}

  /* Primary */
  ${({ type }) => type === types.primary && css`
    background-color: ${props => props.theme.color.red};
    color: ${props => props.theme.color.white};

    &:hover {
      background-color: ${props => rgba(
        props.theme.color.red,
        props.theme.opacities.opacity85
      )};
    }
  `}

  /* Secondary */
  ${({ type }) => type === types.secondary && css`
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.red};

    &:hover {
      background-color: ${props => rgba(
        props.theme.color.blue,
        props.theme.opacities.opacity14
      )};
    }
  `}

  /* Outline */
  ${({ type }) => type === types.outline && css`
    background-color: ${props => props.theme.color.white};
    border: 2px solid ${props => props.theme.color.lightGrey};
    min-width: 100%;

    &:hover {
      background-color: ${props => props.theme.color.lightGrey};
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

  /* Left */
  ${({ left }) => left && css`
    justify-content: flex-start;
  `}
`

export {
  ButtonLinkStyled
}
