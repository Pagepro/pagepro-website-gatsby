import styled from 'styled-components';

import { variables } from '../Inner/styles';
import Container from '../Container';

const SliderStyled = styled(Container)`
  display: flex;
  width: calc(100vw - ((100vw - ${variables.inner}) / 2));
`;

const SliderItemStyled = styled(Container)`
  flex-shrink: 0;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export { SliderStyled, SliderItemStyled };
