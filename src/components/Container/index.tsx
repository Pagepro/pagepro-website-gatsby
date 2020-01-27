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
  overflow,
  width,
  MarginProps,
  PaddingProps,
  OverflowProps,
  WidthProps,
} from 'styled-system';
import { IColor } from 'themes/variables';

interface IContainerStyledProps extends MarginProps, PaddingProps, OverflowProps, WidthProps {
  bg?: IColor;
  color?: IColor;
}

type IProps = IContainerStyledProps;

const Container = styled.div<IProps>`
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

  ${width}
  ${overflow}
`;

export default Container;
