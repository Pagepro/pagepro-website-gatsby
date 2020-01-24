import DynamicComponent, { ITypoStyles } from '../../common/DynamicComponent';
import styled from 'styled-components';

import theme from '../../themes/theme';
const { typo1, typo2, typo3, typo4, typo5, typo6, typo7, typo8 } = theme.textStyles;

const createTypoComponent = (typoStyles: ITypoStyles) => {
  const TypoComponent = styled(DynamicComponent)``;

  TypoComponent.defaultProps = {
    ...typoStyles,
  };

  return TypoComponent;
};

export const Typo1 = createTypoComponent(typo1);

export const Typo2 = createTypoComponent(typo2);

export const Typo3 = createTypoComponent(typo3);

export const Typo4 = createTypoComponent(typo4);

export const Typo5 = createTypoComponent(typo5);

export const Typo6 = createTypoComponent(typo6);

export const Typo7 = createTypoComponent(typo7);

export const Typo8 = createTypoComponent(typo8);
