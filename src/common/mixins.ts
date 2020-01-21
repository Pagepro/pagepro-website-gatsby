import { WithTheme } from 'themes/theme';

export const transition = `
  transition: 270ms ease;
`;

interface IDecorLinkProps {
  height?: string;
  hoverUnderlineBg?: string;
}

export const decorLink = ({ height = '1px', hoverUnderlineBg = 'currentColor' }: WithTheme<IDecorLinkProps>) => `
  position: relative;

  &::after {
    position: absolute;
    right: 0;
    bottom: -0.125rem;
    left: 0;
    display: block;
    width: 100%;
    height: ${height};
    content: '';
    transition: transform .3s;
    transform: scaleX(0);
    transform-origin: bottom right;
    background-color: currentColor;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
      background: ${hoverUnderlineBg};
    }
  }
`;

export const fieldReset = () => `
  width: 100%;
  appearance: none;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  font-size: 1rem;

  &::-ms-expand {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-animation-name: autofill;

    background: transparent;
    box-shadow: none;

    -webkit-animation-fill-mode: both;
  }
`;

export const checkbox = () => `
  display: flex;
  flex-wrap: wrap;

  label {
    position: relative;
    font-size: 1rem;
    cursor: pointer;

    &::before,
    &::after {
      position: absolute;
      display: flex;
      flex-shrink: 0;
      content: '';
      ${transition}
    }

    &::before {
      top: 0;
      left: 0;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    overflow: hidden;
  }
`;

interface IDecorLineProps {
  backgroundColor?: string;
}

export const decorLine = ({ backgroundColor = 'currentColor' }: WithTheme<IDecorLineProps>) => `
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: '';
    width: 3.375rem;
    height: 0.0625rem;
    background: ${backgroundColor};
  }
`;
