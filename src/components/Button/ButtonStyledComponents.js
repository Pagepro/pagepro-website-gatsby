import styled, { css } from 'styled-components'

import { transition } from '../../common/mixins'

const ButtonLabelStyled = styled.span`
  width: 100%;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  text-align: center;
`

const ButtonStyled = styled.a`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  width: auto;
  min-width: ${props => props.theme.btn.width};
  padding: 0 calc(${props => props.theme.size.gutter} * 1.5);
  cursor: pointer;
  ${transition}

  ${ButtonLabelStyled} {
    font-size: 16px;
  }

  /* Primary */
  ${props => props.primary && css`
    background-color: ${props => props.theme.color.red};
    color: ${props => props.theme.color.white};

    &:hover {
      background-color: ${props => props.theme.color.red2};
    }
  `}

  /* Secondary */
  ${props => props.secondary && css`
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.red};

    &:hover {
      background-color: ${props => props.theme.color.lightBlue};
    }
  `}

  /* Wide */
  ${props => props.wide && css`
    background-color: ${props => props.theme.color.white};
    border: 1px solid ${props => props.theme.color.grey2};
    min-width: 100%;

    &:hover {
      background-color: ${props => props.theme.color.lightGrey};
    }
  `}

  /* Medium */
  ${props => props.medium && css`
    height: ${props => props.theme.btn.heightMedium};
  `}

  /* Big */
  ${props => props.big && css`
    height: ${props => props.theme.btn.heightBig};
  `}

  /* Left */
  ${props => props.left && css`
    ${ButtonLabelStyled} {
      text-align: left;
    }
  `}
`

export {
  ButtonStyled,
  ButtonLabelStyled,
}
