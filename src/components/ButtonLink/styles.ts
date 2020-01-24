import styled, { css } from 'styled-components';

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
}

const ButtonLinkStyled = styled.a<IProps>`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  width: auto;
  min-width: ${({ theme }) => theme.buttons.width};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  justify-content: center;
  padding: 0 1.5rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitionDuration}ms ease;

  /* Primary */
  ${({ buttonType }) =>
    buttonType === ButtonLinkType.primary &&
    css`
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        background-color: ${({ theme }) => theme.buttons.primaryBgHover};
      }
    `}

  /* Secondary */
  ${({ buttonType }) =>
    buttonType === ButtonLinkType.secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.red};

      &:hover {
        background-color: ${({ theme }) => theme.buttons.secondaryBgHover};
      }
    `}

  /* Outline */
  ${({ buttonType }) =>
    buttonType === ButtonLinkType.outline &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.lightGrey};
      min-width: 100%;

      &:hover {
        background-color: ${({ theme }) => theme.colors.lightGrey};
      }
    `}

  /* Medium */
  ${({ size }) =>
    size === ButtonLinkSize.medium &&
    css`
      height: ${({ theme }) => theme.buttons.heightMedium};
    `}

  /* Big */
  ${({ size }) =>
    size === ButtonLinkSize.big &&
    css`
      height: ${({ theme }) => theme.buttons.heightBig};
    `}
`;

export default ButtonLinkStyled;
