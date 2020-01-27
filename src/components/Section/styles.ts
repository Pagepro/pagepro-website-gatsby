import styled from 'styled-components';

import Inner from '../Inner';
import { variables } from '../Inner/styles';

const SectionInnerStyled = styled(Inner)`
  max-width: 100%;
  margin-left: calc(50% - ${variables.inner} / 2);
`;

export { SectionInnerStyled };
