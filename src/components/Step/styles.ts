import styled from 'styled-components';

const variables = {
  stepWidth: '400px',
};

const StepStyled = styled.div`
  max-width: ${variables.stepWidth};
  padding: ${props => props.theme.gutter.gutter32};
  border: 2px solid ${props => props.theme.color.lightGrey};
  font-weight: ${props => props.theme.fontWeight.semiBold};
`;

const StepTitleStyled = styled.div`
  text-transform: uppercase;
  line-height: ${props => props.theme.lineHeight.medium};
`;

const StepSubtitleStyled = styled.div`
  margin-top: ${props => props.theme.gutter.gutter24};
  color: ${props => props.theme.color.red};
`;

const StepDescStyled = styled.div`
  margin-top: ${props => props.theme.gutter.gutter32};
`;

export { StepStyled, StepTitleStyled, StepSubtitleStyled, StepDescStyled };
