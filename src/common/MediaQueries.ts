import theme from '../themes/theme';

const [phone, tablet, desktop] = theme.breakpoints;

export const media = {
  phone: `(min-width: ${phone})`,
  tablet: `(min-width: ${tablet})`,
  desktop: `(min-width: ${desktop})`,
};

export const customMedia = {
  inner: `(min-width: ${theme.sizes.inner})`,
};
