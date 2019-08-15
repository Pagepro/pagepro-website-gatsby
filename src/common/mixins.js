export const transition = `
  transition: 270ms ease;
`

export const decorLink = `
  position: relative;

  &::after {
    position: absolute;
    right: 0;
    bottom: -2px;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
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
    }
  }
`
