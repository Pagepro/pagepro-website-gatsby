import { IThemeInterface } from './variables';

const theme: IThemeInterface = {
  colors: {
    black: '#000',
    white: '#fff',
    darkGrey: '#171717',
    mediumGrey: '#585858',
    grey: '#9e9e9e',
    lightGrey: '#f4f4f4',
    red: '#f33540',
    darkNavy: '#061F2d',
    navy: '#19425a',
    blue: '#5d90ab',
  },
  breakpoints: ['768px', '1025px', '1440px'],
  // Visual TypeScale / Major Third (1.25) / Base Size: 16px
  textStyles: {
    typo1: {
      fontSize: ['2.011rem', '3.052rem'], // 23.18px / 48.83px
      fontWeight: 'semiBold',
    },
    typo2: {
      fontSize: ['1.749em', '2.441rem'], // 27.98px / 39.06px
    },
    typo3: {
      fontSize: ['1.521rem', '1.953rem'], // 24.33px / 31.25px
    },
    typo4: {
      fontSize: ['1.322rem', '1.563rem'], // 21.16px / 25.00px
    },
    typo5: {
      fontSize: ['1.15rem', '1.25rem'], // 18.40px / 20.00px
    },
    typo6: {
      fontSize: ['1rem'], // 16px
    },
    typo7: {
      fontSize: ['0.875rem'], // 14px
    },
    typo8: {
      fontSize: ['0.8rem'], // 12.8px
    },
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {
    big: 1.5,
    medium: 1.25,
    small: 1.15,
    normal: 1,
  },
  buttons: {
    width: '10.5rem',
    heightMedium: '3.375rem',
    heightBig: '3.75rem',
    primaryBgHover: '#e72934',
    secondaryBgHover: '#e1ecF2',
  },
  transitionDuration: 200,
  zIndexes: {
    statNumberDecor: -1,
  },
  shadows: {
    shadow1: 'box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);',
  },
};

export default theme;

export type Theme = typeof theme;

export type WithTheme<T = {}> = { theme: Theme } & T;
