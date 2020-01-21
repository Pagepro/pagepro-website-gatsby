import styled from 'styled-components';
import { lineHeight, fontSize, color, textStyle, fontWeight, textAlign } from 'styled-system';

export interface ITypoStyles {
  fontSize?: string[];
  fontWeight?: number;
}

type IProps = ITypoStyles;

const StyledDynamicComponent = styled.p<IProps>`
  ${lineHeight}
  ${fontSize}
  ${color}
  ${textStyle}
  ${fontWeight}
  ${textAlign}
`;

export default StyledDynamicComponent;
