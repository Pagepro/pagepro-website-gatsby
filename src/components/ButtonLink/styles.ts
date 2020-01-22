import styled, { css } from 'styled-components';

import { defaultTransition } from '../../common/mixins';

export enum ButtonLinkSize {
  medium,
  big,
}

export enum ButtonLinkType {
  primary,
  secondary,
  outline,
}

interface IProps {
  size?: ButtonLinkSize;
  buttonType?: ButtonLinkType;
  left?: boolean;
}

const ButtonLinkStyled = styled.a<IProps>`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  width: auto;
  min-width: ${({ theme }) => theme.btn.width};
  font-size: ${({ theme }) => theme.fontSize.fontSize15};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  justify-content: center;
  padding: 0 calc(${({ theme }) => theme.gutter.gutter24});
  cursor: pointer;
  ${defaultTransition}

  /* Primary */
  ${({ buttonType, theme }) =>
    buttonType === ButtonLinkType.primary &&
    css`
      background-color: ${theme.color.red};
      color: ${theme.color.white};

      &:hover {
        background-color: ${theme.btn.primaryBgHover};
      }
    `}

  /* Secondary */
  ${({ buttonType, theme }) =>
    buttonType === ButtonLinkType.secondary &&
    css`
      background-color: ${theme.color.white};
      color: ${theme.color.red};

      &:hover {
        background-color: ${theme.btn.secondaryBgHover};
      }
    `}

  /* Outline */
  ${({ buttonType, theme }) =>
    buttonType === ButtonLinkType.outline &&
    css`
      background-color: ${theme.color.white};
      border: 2px solid ${theme.color.lightGrey};
      min-width: 100%;

      &:hover {
        background-color: ${theme.color.lightGrey};
      }
    `}

  /* Medium */
  ${({ size, theme }) =>
    size === ButtonLinkSize.medium &&
    css`
      height: ${theme.btn.heightMedium};
    `}

  /* Big */
  ${({ size, theme }) =>
    size === ButtonLinkSize.big &&
    css`
      height: ${theme.btn.heightBig};
    `}

  /* Left */
  ${({ left }) =>
    left &&
    css`
      justify-content: flex-start;
    `}
`;

export default ButtonLinkStyled;
