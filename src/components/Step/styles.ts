import styled from 'styled-components';

import Container from '../Container';

const variables = {
  stepWidth: '25rem',
};

const StepStyled = styled(Container)`
  max-width: ${variables.stepWidth};
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const StepTitleStyled = styled.div`
  text-transform: uppercase;
  line-height: ${({ theme }) => theme.lineHeights.medium};
`;

const StepSubtitleStyled = styled.div`
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.red};
`;

const StepDescStyled = styled.div`
  margin-top: 2rem;
`;

export { StepStyled, StepTitleStyled, StepSubtitleStyled, StepDescStyled };
