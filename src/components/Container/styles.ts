import styled from 'styled-components';

import {
  color,
  backgroundColor as bg,
  marginTop as mt,
  marginBottom as mb,
  marginLeft as ml,
  marginRight as mr,
  margin as m,
  paddingTop as pt,
  paddingBottom as pb,
  paddingLeft as pl,
  paddingRight as pr,
  padding as p,
  BackgroundColorProps,
  MarginProps,
  PaddingProps,
} from 'styled-system';
import { IColor } from 'themes/variables';

interface IContainerStyledProps extends BackgroundColorProps, MarginProps, PaddingProps {
  bg?: IColor;
  color?: IColor;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  p?: string;
  m?: string;
}

type IProps = IContainerStyledProps;

const ContainerStyled = styled.div<IProps>`
  ${bg}
  ${color}

  ${m}
  ${mt}
  ${mb}
  ${ml}
  ${mr}

  ${p}
  ${pt}
  ${pb}
  ${pl}
  ${pr}
`;

export default ContainerStyled;
