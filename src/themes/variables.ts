export type IColor = 'black' | 'white' | 'darkGrey' | 'mediumGrey' | 'lightGrey' | 'red' | 'darkNavy' | 'navy' | 'blue';

export type IFontWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

export type ILineHeight = 'big' | 'medium' | 'small' | 'normal';

export interface IThemeInterface {
  colors: { [color in IColor]: string };
  breakpoints: string[];
  textStyles: any;
  fontWeights: { [fontWeight in IFontWeight]: number };
  lineHeights: { [lineHeight in ILineHeight]: number };
}
