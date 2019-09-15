export const transition = `
  transition: 270ms ease;
`

export const decorLink = ({
  height = '1px',
  hoverUnderlineBg = 'currentColor',
}) => `
  position: relative;

  &::after {
    position: absolute;
    right: 0;
    bottom: -2px;
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
`

export const fieldReset = props => `
  width: 100%;
  appearance: none;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  font-size: ${props.theme.fontSize.fontSize15};

  &::-ms-expand {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-animation-name: autofill;

    background: transparent;
    box-shadow: none;

    -webkit-animation-fill-mode: both;
  }
`

export const checkbox = props => `
  display: flex;
  flex-wrap: wrap;

  label {
    position: relative;
    font-size: ${props.theme.fontSize.fontSize15};
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
`

export const decorLine = ({
  backgroundColor = 'currentColor',
}) => `
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: '';
    width: 54px;
    height: 1px;
    background: ${backgroundColor};
  }
`
