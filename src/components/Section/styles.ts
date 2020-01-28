import styled from 'styled-components';

import Inner from '../Inner';
import { variables } from '../Inner/styles';

const SectionInnerStyled = styled(Inner)`
  max-width: 100%;
  margin-left: calc(50% - ${variables.inner} / 2);
`;

const SectionDescStyled = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
`;

const SectionContentStyled = styled.div``;

const SectionHeadingStyled = styled.div`
  & + ${SectionContentStyled} {
    margin-top: 3rem;
  }
`;

export { SectionInnerStyled, SectionHeadingStyled, SectionContentStyled, SectionDescStyled };
