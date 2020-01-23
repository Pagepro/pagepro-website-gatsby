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
  left?: boolean;
}

const variables = {
  width: '10.5rem',
  heightMedium: '3.375rem',
  heightBig: '3.75rem',
  primaryBgHover: '#e72934',
  secondaryBgHover: '#e1ecF2',
};

const ButtonLinkStyled = styled.a<IProps>`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  width: auto;
  min-width: ${variables.width};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  justify-content: center;
  padding: 0 1.5rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitionDuration}ms ease;

  /* Primary */
  ${({ buttonType, theme }) =>
    buttonType === ButtonLinkType.primary &&
    css`
      background-color: ${theme.colors.red};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${variables.primaryBgHover};
      }
    `}

  /* Secondary */
  ${({ buttonType, theme }) =>
    buttonType === ButtonLinkType.secondary &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.red};

      &:hover {
        background-color: ${variables.secondaryBgHover};
      }
    `}

  /* Outline */
  ${({ buttonType, theme }) =>
    buttonType === ButtonLinkType.outline &&
    css`
      background-color: ${theme.colors.white};
      border: 2px solid ${theme.colors.lightGrey};
      min-width: 100%;

      &:hover {
        background-color: ${theme.colors.lightGrey};
      }
    `}

  /* Medium */
  ${({ size }) =>
    size === ButtonLinkSize.medium &&
    css`
      height: ${variables.heightMedium};
    `}

  /* Big */
  ${({ size }) =>
    size === ButtonLinkSize.big &&
    css`
      height: ${variables.heightBig};
    `}

  /* Left */
  ${({ left }) =>
    left &&
    css`
      justify-content: flex-start;
    `}
`;

export default ButtonLinkStyled;
