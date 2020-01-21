import { IThemeInterface } from './variables';

export const theme: IThemeInterface = {
  colors: {
    black: '#000',
    white: '#fff',
    darkGrey: '#171717',
    mediumGrey: '#585858',
    lightGrey: '#f4f4f4',
    red: '#f33540',
    darkNavy: '#061F2d',
    navy: '#19425a',
    blue: '#5d90ab',
  },
  breakpoints: ['768px', '1025px'],
  // Visual TypeScale / Major Third (1.25) / Base Size: 16px
  textStyles: {
    typo1: {
      fontSize: ['3.052rem'], // 48.83px
    },
    typo2: {
      fontSize: ['2.441rem'], // 39.06px
    },
    typo3: {
      fontSize: ['1.953rem'], // 31.25px
    },
    typo4: {
      fontSize: ['1.563rem'], // 25.00px
    },
    typo5: {
      fontSize: ['1.25rem'], // 20.00px
    },
    typo6: {
      fontSize: ['1rem'], // 16px
    },
    typo7: {
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
};

export default theme;

export type Theme = typeof theme;

export type WithTheme<T = {}> = { theme: Theme } & T;
