import styled from 'styled-components';

import { IColor } from 'themes/variables';

interface IContainerStyledProps {
  background?: IColor;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  px?: string;
  py?: string;
  p?: string;
  m?: string;
}

const ContainerStyled = styled.div<IContainerStyledProps>`
  ${({ m }) => (m ? `margin: ${m}` : '')};
  ${({ mb }) => (mb ? `margin-bottom: ${mb}` : '')};
  ${({ mt }) => (mt ? `margin-top: ${mt}` : '')};
  ${({ ml }) => (ml ? `margin-left: ${ml}` : '')};
  ${({ mr }) => (mr ? `margin-right: ${mr}` : '')};
  ${({ mx }) => (mx ? `margin-left: ${mx}; margin-right: ${mx};` : '')};
  ${({ my }) => (my ? `margin-top: ${my}; margin-bottom: ${my};` : '')};

  ${({ p }) => (p ? `padding: ${p}` : '')};
  ${({ pt }) => (pt ? `padding-top: ${pt}` : '')};
  ${({ pb }) => (pb ? `padding-bottom: ${pb}` : '')};
  ${({ pl }) => (pl ? `padding-left: ${pl}` : '')};
  ${({ pr }) => (pr ? `padding-right: ${pr}` : '')};
  ${({ px }) => (px ? `padding-left: ${px}; padding-right: ${px};` : '')};
  ${({ py }) => (py ? `padding-top: ${py}; padding-bottom: ${py};` : '')};

  ${({ background }) => background && `background: ${background}`}
`;

export default ContainerStyled;
