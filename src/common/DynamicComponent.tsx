import styled from 'styled-components';
import { lineHeight, fontWeight, color, fontSize, textStyle, textAlign } from 'styled-system';

import { IColor, IFontWeight, ILineHeight } from 'themes/variables';

export interface ITypoStyles {
  fontSize?: string[];
  color?: IColor;
  fontWeight?: IFontWeight;
  lineHeight?: ILineHeight;
}

const StyledDynamicComponent = styled.p<ITypoStyles>`
  ${color}
  ${fontWeight}
  ${lineHeight}
  ${fontSize}
  ${textStyle}
  ${textAlign}
`;

export default StyledDynamicComponent;
