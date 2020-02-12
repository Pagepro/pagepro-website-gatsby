import theme from '../themes/theme';

const [phone, tablet] = theme.breakpoints;

export const media = {
  phone: `(min-width: ${phone})`,
  tablet: `(min-width: ${tablet})`,
};

export const customMedia = {
  inner: `(min-width: ${theme.sizes.inner})`,
};
