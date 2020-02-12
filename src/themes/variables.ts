export type IColor =
  | 'black'
  | 'white'
  | 'darkGrey'
  | 'mediumGrey'
  | 'grey'
  | 'lightGrey'
  | 'red'
  | 'darkNavy'
  | 'navy'
  | 'blue';

export type IFontWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

export type ILineHeight = 'big' | 'medium' | 'small' | 'normal';

export type ITypo = 'typo1' | 'typo2' | 'typo3' | 'typo4' | 'typo5' | 'typo6' | 'typo7' | 'typo8';

export interface IThemeInterface {
  colors: { [color in IColor]: string };
  breakpoints: string[];
  textStyles: { [typo in ITypo]: {} };
  fontWeights: { [fontWeight in IFontWeight]: number };
  lineHeights: { [lineHeight in ILineHeight]: number };
  transitionDuration: number;
  buttons: {};
  zIndexes: {};
  shadows: any;
  sizes: any;
}
