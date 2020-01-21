import styled from 'styled-components';
import { lineHeight, fontSize, textStyle, textAlign } from 'styled-system';

import { IColor, IFontWeight } from 'themes/variables';

export interface ITypoStyles {
  fontSize?: string[];
  color?: IColor;
  fontWeight?: IFontWeight;
}

type IProps = ITypoStyles;

const StyledDynamicComponent = styled.p<IProps>`
  ${lineHeight}
  ${fontSize}
  ${textStyle}
  ${textAlign}
`;

export default StyledDynamicComponent;
