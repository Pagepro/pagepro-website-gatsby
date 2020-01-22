import styled from 'styled-components';

import Container from '../Container';

const variables = {
  stepWidth: '25rem',
};

const StepStyled = styled(Container)`
  max-width: ${variables.stepWidth};
  border: 2px solid ${props => props.theme.colors.lightGrey};
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;

const StepTitleStyled = styled.div`
  text-transform: uppercase;
  line-height: ${props => props.theme.lineHeights.medium};
`;

const StepSubtitleStyled = styled.div`
  margin-top: 1.5rem;
  color: ${props => props.theme.colors.red};
`;

const StepDescStyled = styled.div`
  margin-top: 2rem;
`;

export { StepStyled, StepTitleStyled, StepSubtitleStyled, StepDescStyled };
