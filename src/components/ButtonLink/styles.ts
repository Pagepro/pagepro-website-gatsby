import styled, { css } from 'styled-components';

import { defaultTransition } from '../../common/mixins';
import { WithTheme } from '../../themes/theme';

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

type ButtonLinkStyledProps = WithTheme<IProps>;

const ButtonLinkStyled = styled.a`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  width: auto;
  min-width: ${({ theme }: ButtonLinkStyledProps) => theme.btn.width};
  font-size: ${({ theme }: ButtonLinkStyledProps) => theme.fontSize.fontSize15};
  font-weight: ${({ theme }: ButtonLinkStyledProps) => theme.fontWeight.semiBold};
  justify-content: center;
  padding: 0 calc(${({ theme }: ButtonLinkStyledProps) => theme.gutter.gutter24});
  cursor: pointer;
  ${defaultTransition}

  /* Primary */
  ${({ buttonType, theme }: ButtonLinkStyledProps) =>
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
  ${({ buttonType, theme }: ButtonLinkStyledProps) =>
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
  ${({ size, theme }: ButtonLinkStyledProps) =>
    size === ButtonLinkSize.medium &&
    css`
      height: ${theme.btn.heightMedium};
    `}

  /* Big */
  ${({ size, theme }: ButtonLinkStyledProps) =>
    size === ButtonLinkSize.big &&
    css`
      height: ${theme.btn.heightBig};
    `}

  /* Left */
  ${({ left }: ButtonLinkStyledProps) =>
    left &&
    css`
      justify-content: flex-start;
    `}
`;

export default ButtonLinkStyled;
